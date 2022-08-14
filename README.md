# 使用说明

1.  npm install
2.  node app.js

# 建表

```
CREATE TABLE `message_board` (
	`id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(50) NOT NULL DEFAULT '0',
	`content` VARCHAR(50) NOT NULL DEFAULT '0',
	INDEX `id` (`id`)
)
COMMENT='留言板数据'
COLLATE='utf8_general_ci'
ENGINE=InnoDB
AUTO_INCREMENT=1
;
```
