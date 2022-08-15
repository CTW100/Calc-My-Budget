const User = require('../models/User');

exports.createAccount = (req, res) => {
	console.log(req.body);
	User.create(req.body, (err) => {
		if (err) return res.json(err);
		res.redirect('/users/login');
	});
};
