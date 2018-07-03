const express = require('express');
const crl = express();
const fs = require('fs');
var path = require('path');

//方法一
crl.use('/', express.static(path.join(__dirname, '/../public')));
crl.use('/demo', express.static(path.join(__dirname, '/../public', 'index2.html')));

//方法二
crl.get("/helloworld.html", function (req, res) {
	fs.readFile(path.join(__dirname, '/../public', 'helloworld.html'), function (err, data) {
		// body
		if (err) {
			console.log(err);
			//404：NOT FOUND
			res.writeHead(404, {
				"Content-Type": "text/html"
			});
		} else {
			//200：OK
			res.writeHead(200, {
				"Content-Type": "text/html"
			});
			res.write(data.toString());
		}
		res.end();
	});
})

module.exports = crl;