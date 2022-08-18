import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import { withRouter } from 'react-router-dom';
const axios = require('axios');

function AddProduct() {
	const [name, setName] = useState('');
	const [price, setPrice] = useState('');
	const [date, setDate] = useState('');
	const [url, setUrl] = useState('');
	const [explain, setExplain] = useState('');

	const onSubmitHandler = (e) => {
		e.preventDefault();

		axios.post('https://budget-cal-api.run.goorm.io', {
			name: name,
			price: price,
			goalDate: date,
			url: url,
			explain: explain,
		});
	};

	return (
		<Container>
			<Form onSubmit={onSubmitHandler}>
				<Form.Group className='mb-3' controlId='formBasicEmail'>
					<Form.Label>Name</Form.Label>
					<Form.Control
						type='text'
						name='name'
						placeholder='Enter name'
						onChange={(e) => {
							setName(e.target.value);
						}}
					/>
				</Form.Group>

				<Form.Group className='mb-3' controlId='formBasicText'>
					<Form.Label>Price</Form.Label>
					<Form.Control
						type='number'
						placeholder='Price'
						onChange={(e) => {
							setPrice(e.target.value);
						}}
					/>
				</Form.Group>

				<Form.Group className='mb-3' controlId='formBasicText'>
					<Form.Label>Date</Form.Label>
					<Form.Control
						type='date'
						placeholder='Date'
						onChange={(e) => {
							setDate(e.target.value);
						}}
					/>
				</Form.Group>

				<Form.Group className='mb-3' controlId='formBasicEmail'>
					<Form.Label>URL</Form.Label>
					<Form.Control
						type='text'
						placeholder='Enter URL'
						onChange={(e) => {
							setUrl(e.target.value);
						}}
					/>
				</Form.Group>

				<Form.Group
					className='mb-3'
					controlId='exampleForm.ControlTextarea1'
				>
					<Form.Label>Explain</Form.Label>
					<Form.Control
						as='textarea'
						rows={3}
						onChange={(e) => {
							setExplain(e.target.value);
						}}
					/>
				</Form.Group>

				<Form.Group controlId='formFileSm' className='mb-3'>
					<Form.Label>Picture You want</Form.Label>
					<Form.Control type='file' size='sm' />
				</Form.Group>

				<Button variant='primary' type='submit'>
					Submit
				</Button>
			</Form>
		</Container>
	);
}

export default withRouter(AddProduct);
