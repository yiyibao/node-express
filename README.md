## Environment

`Node >= 6`

## Start

 - Clone or download this repository
 - Enter your local directory, and install dependencies:
 
 ``` bash
npm install
```

## 运行

 ``` bash
node app.js
```
## 简单的express项目结构
	
 ``` bash
项目名称---|
	|
	----controller 路由模块
	|
	---public 静态资源
	|
	---routes 接口模块
	|	|
	|	 ---index.js
	|   |
	|    ---业务文件
	|
	---app.js 入口文件	

```

## 解析
	
 ``` bash
	1、支持跨域

	app.all('*', function(req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With,imgverifycode");
		res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
		res.header("X-Powered-By", ' 3.2.1');
		/*让options请求快速返回*/
		if(req.method == "OPTIONS") {
			res.send(202);
		} else {
			next();
		}

	});

	
	2、express及express-router的使用

	node.js
	var express = require('express');
	var app = express();
	var path=require('path');
	const routes = require('./routes/index');
	app.use('/',express.static(path.join(__dirname, 'public')));
	routes(app);


	index.js
	module.exports=function(app){
		app.use('/',require('./home'));
	};

	home.js (业务文件)
	const express = require('express');
	const router = express.Router();
	//首页概览
	router.get('/api/profit/diamond/account/info', (req, res) => {
		console.log(req.query);
		var data = {
			"message": "has token",
			"code": 200,
			"data": {
				"balanceAccount": 88.88,
			}
		}
		res.json(data);
	})
	module.exports = router;

	That is OK! you can do it!
```
