var express = require('express');
var router = express.Router();
var sanitize = require('mongo-sanitize');

var User = require('../models/user');

router.post('/', function(req, res, next) {
	if(req.body.name){
		var cleanName = sanitize(req.body.name);
		User.findOne({name: cleanName}, function(err, user){
			if(err) throw err;

			if(user){
				return res.json({
					message: "Dobrodosao nazad " + user.name
				});
			}

			if(!user){
				return res.json({
					message: "Dobrodosao " + cleanName
				});
			}
		});
	}else{
		return res.json({
			error: 'Missing parameter: name'
		})
	}
});

module.exports = router;
