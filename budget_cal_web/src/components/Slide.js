import React from 'react';
import PostCard from '../components/PostCard';

const Slide = (props) => {
	const { name, price, goalDate, url, explain } = props;

	return (
		<div>
			<PostCard
				name={name}
				price={price}
				goalDate={goalDate}
				url={url}
				explain={explain}
			/>
		</div>
	);
};

export default Slide;
