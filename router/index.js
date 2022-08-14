const express = require("express");
const router = express.Router();
const db = require("../database/db.js");
const common = require("../utils/common.js");

// 首页
router.get("/", (req, res) => {
	// 按id倒序排列
	let sql = "SELECT * FROM `message_board` ORDER BY id DESC";
	db.Query(sql).then((data) => {
		res.render("index.html", {
			title: "首页",
			data: data,
		});
	});
});

// 添加数据
router.post("/add", common.urlencodedParser, (req, res) => {
	let sql = `INSERT INTO message_board (name,content) VALUES ('${req.body.name}','${req.body.content}')`;
	db.Query(sql).then((data) => {
		console.log(data);
		res.send({
			code: 200,
			msg: "操作成功",
		});
		res.end();
	});
});

// 404
router.use((req, res) => {
	res.render("404.html");
});

module.exports = router;
