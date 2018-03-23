var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/sms', function(req, res, next) {
	console.log(['req', req])
	res.status(200);
	res.json({msg: 'OK'});
});

module.exports = router;
