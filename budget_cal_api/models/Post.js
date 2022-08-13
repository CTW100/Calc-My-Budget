const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
	name: { type: String, required: true },
	price: { type: Number, required: true },
	goalDate: { type: Date, default: Date.now, required: true },
	url: { type: String, required: true },
	explain: { type: String },
});

const Post = mongoose.model('post', postSchema);
module.exports = Post;
