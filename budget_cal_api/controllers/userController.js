const User = require('../models/User');

exports.createAccount = (req, res) => {
	console.log(req.body);
	User.create(req.body, (err) => {
		if (err) return res.json(err);
		res.redirect('/users/login');
	});
};

exports.login = (req, res) => {
	console.log(req.body);
	// 요청된 username을 데이터베이스에서 있는지 찾는다
	User.findOne({ username: req.body.username }, (err, user) => {
		if (!user) {
			return res.json({
				loginSuccess: false,
				message: '제공된 username에 해당하는 유저가 없습니다.',
			});
		}

		// 요청된 username이 데이터베이스에 있다면 비밀번호가 맞는느 확인
		user.comparePassword(req.body.password, (err, isMatch) => {
			if (!isMatch) {
				return res.json({
					loginSuccess: false,
					meesage: '비밀번호가 틀렸습니다.',
				});
			}
			// 비밀번호까지 맞다면 토큰을 생성
			user.generateToken((err, user) => {
				if (err) return res.status(400).send(err);

				// 정상적일 경우 토큰을 쿠키나 로컬스토리지 등에 저장
				// 쿠키에 저장
				res.cookie('x_auth', user.token)
					.status(200)
					.json({ loginSuccess: true, userId: user._id });
			});
		});
	});
};
