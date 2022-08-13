const Post = require('../models/Post');

exports.getPosts = (req, res) => {
	// res.header('Access-Control-Allow-Origin', '*');
	Post.find({}).exec((err, posts) => {
		if (err) res.json(err);
		res.json(posts);
	});
};
