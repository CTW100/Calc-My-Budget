const express = require('express');
const app = express();

app.use('/', (req, res) => {
	res.json({ result: 'Good' });
});

const port = 8000;

app.listen(port, (req, res) => {
	console.log(`Server is running on ${port}!`);
});
