const Post = require('../models/Post');

const { format, utcToZonedTime } = require('date-fns-tz');

exports.getPosts = (req, res) => {
	res.header('Access-Control-Allow-Origin', '*');
	Post.find({}).exec((err, posts) => {
		console.log(posts);
		const timeZone = 'Asia/Seoul';

		const formattedPosts = posts.map((post) => {
			post['goalDate'] = format(
				utcToZonedTime(post.goalDate, timeZone),
				'yyyy-MM-dd'
			);
			return post;
		});

		if (err) res.json(err);
		res.json(formattedPosts);
	});
};

exports.createPost = (req, res) => {
	console.log(req.body);
	Post.create(req.body, (err) => {
		if (err) return res.json(err);
		res.redirect('/');
	});
};
