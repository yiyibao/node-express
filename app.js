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


var server = newFunction();
function newFunction() {
	return app.listen(3000, function () {
		// var host = net.en0[1].address||'';
		// var host2 = net.lo0[0].address || ''
		// var port = server.address().port;
		console.log("应用实例，访问地址为 http://%s:%s");
		// console.log("应用实例，也可以访问地址为 http://%s:%s", host2, port);
	});
}

