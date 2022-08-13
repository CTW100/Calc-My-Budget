import React, { useState, useEffect } from 'react';
const axios = require('axios');

const Slide = () => {
	const [result, setResult] = useState(null);

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const response = await axios.get(
					'https://budget-cal-api.run.goorm.io'
				);
				console.log(response.data);
				setResult(JSON.stringify(response.data));
			} catch (e) {
				console.log(e);
			}
		};

		fetchPosts();
	}, []);

	return <div>{result}</div>;
};

export default Slide;
