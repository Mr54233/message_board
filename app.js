// 创建服务
const express = require('express');
var app = express();

// 设置静态文件目录
app.use('/node_modules/', express.static('./node_modules/'));
app.use('/public/', express.static('./public/'));

// 路由
const router = require('./router/index.js');
app.use(router);

// 跨域
app.all("*",function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
})

// 模板引擎
app.engine('html', require('express-art-template'));

// 服务端口
app.listen(90,()=>{
	console.log("server running on http://127.0.0.1:90");
});
