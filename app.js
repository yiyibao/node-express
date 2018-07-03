var express = require('express');
var app = express();
var path = require('path');
const fs = require('fs')
// var bodyParser = require('body-parser')
// app.use(bodyParser.urlencoded({ extended: false }));

const routes = require('./routes/index');//接口数据

const crl = require('./controller/index');//服务端路由controller

//设置跨域头
app.all('*', function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With,imgverifycode");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1');
	/*让options请求快速返回*/
	if (req.method == "OPTIONS") {
		res.send(202);
	} else {
		next();
	}

});

routes(app);
crl(app);

var interfaces = require('os').networkInterfaces();  

var host = '';  
for(var devName in interfaces){  
	  var iface = interfaces[devName];  
	  for(var i=0;i<iface.length;i++){  
		   var alias = iface[i];  
		   if(alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal){  
			host = alias.address;  
		   }  
	  }  
}  
var server = newFunction();
function newFunction() {
	return app.listen(3000, function () {
		var port = 3000;
		console.log("应用实例，访问地址为 http://%s:%s",host,port);
	});
}

