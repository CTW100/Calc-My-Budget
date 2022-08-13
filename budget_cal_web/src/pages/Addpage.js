import React from 'react';

const Addpage = () => {
	return (
		<div>
			<form action='/' method='GET'>
				<div>
					<label for='name'>항목이름</label>
					<input type='text' id='name' name='name' />
				</div>
				<div>
					<label for='price'>가격</label>
					<input type='number' id='price' name='price' />
				</div>
				<div>
					<label for='date'>목표기간</label>
					<input type='date' id='date' name='date' />
				</div>
				<div>
					<label for='url'>URL</label>
					<input type='text' id='url' name='url' />
				</div>
				<div>
					<label for='explain'>설명</label>
					<textarea
						type='text'
						id='explain'
						name='explain'
					></textarea>
				</div>

				<input type='submit' value='Sumbit' />
			</form>
		</div>
	);
};

export default Addpage;
