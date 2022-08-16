const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const postRouter = require('./routers/postRouter');
const userRouter = require('./routers/userRouter');
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017');

const db = mongoose.connection;
db.once('open', () => console.log('DB Connected!'));
db.on('error', (err) => console.log('Errors :', err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());
app.options('/', (req, res) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
	res.header(
		'Access-Control-Allow-Headers',
		'Content-Type, Authorization, Content-Length, X-Requested-With'
	);
	res.send();
});

app.use('/', postRouter);
app.use('/users', userRouter);

const port = 8080;

app.listen(port, (req, res) => {
	console.log(`Server is running on ${port}!`);
});
