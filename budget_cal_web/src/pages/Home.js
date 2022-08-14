import React, { useState, useEffect } from 'react';
import Slide from '../components/Slide';
const axios = require('axios');

const Home = () => {
	const [results, setResults] = useState([]);

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const response = await axios.get(
					'https://budget-cal-api.run.goorm.io'
				);
				console.log(response.data);
				setResults(response.data);
			} catch (e) {
				console.log(e);
			}
		};

		fetchPosts();
	}, []);

	return (
		<div>
			{results.map((result, idx) => {
				return (
					<Slide
						key={idx}
						name={result.name}
						price={result.price}
						goalDate={result.goalDate}
						url={result.url}
						explain={result.explain}
					/>
				);
			})}
		</div>
	);
};

export default Home;
