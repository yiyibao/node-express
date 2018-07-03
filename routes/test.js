
const express = require('express');
const router = express.Router();

//首页概览
router.get('/api/profit/diamond/account/info', (req, res) => {
	console.log(req.query);
	var data = {
		"message": "has token",
		"code": 200,
		"data": {
			"balanceAccount": 88.8800,
		}
	}
	res.json(data);
})


module.exports = router;