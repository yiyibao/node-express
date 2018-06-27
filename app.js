var express = require('express');
var app = express();
var path = require('path');
var os = require("os");
// var bodyParser = require('body-parser')
// app.use(bodyParser.urlencoded({ extended: false }));
var net = os.networkInterfaces();

const routes = require('./routes/index');
app.use('/', express.static(path.join(__dirname, 'public')));

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
		// var host = net.en0[1].address||'';
		// var host2 = net.lo0[0].address || ''
		// var port = server.address().port;
		var port = 3000;
		console.log("应用实例，访问地址为 http://%s:%s",host,port);
		// console.log("应用实例，也可以访问地址为 http://%s:%s", host2, port);
	});
}

