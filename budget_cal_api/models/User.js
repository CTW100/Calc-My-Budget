const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
	username: { type: String, required: true },
	password: { type: String, required: true },
	name: { type: String, required: true },
	email: { type: String, required: true },
});

userSchema.pre('save', function (next) {
	const user = this;
	if (!user.isModified('password')) {
		return next();
	} else {
		user.password = bcrypt.hashSync(user.password);
		return next();
	}
});

const User = mongoose.model('user', userSchema);
module.exports = User;
