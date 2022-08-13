const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const postRouter = require('./routers/postRouter');
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017');

const db = mongoose.connection;
db.once('open', () => console.log('DB Connected!'));
db.on('error', (err) => console.log('Errors :', err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', postRouter);

const port = 8080;

app.listen(port, (req, res) => {
	console.log(`Server is running on ${port}!`);
});
