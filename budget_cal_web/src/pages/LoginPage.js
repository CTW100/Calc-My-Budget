import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
const axios = require('axios');

function Login() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const onUsernameHandler = (e) => {
		setUsername(e.target.value);
	};

	const onPasswordHandler = (e) => {
		setPassword(e.target.value);
	};

	const onSubmitHandler = (e) => {
		e.preventDefault();

		let body = {
			username: username,
			password: password,
		};

		axios
			.post('https://budget-cal-api.run.goorm.io/users/login', body)
			.then((results) => {
				console.log(results);
			});
	};

	return (
		<Container>
			<Form onSubmit={onSubmitHandler}>
				<Form.Group className='mb-3' controlId='formBasicText'>
					<Form.Label>Username</Form.Label>
					<Form.Control
						type='text'
						name='username'
						placeholder='Enter username'
						onChange={onUsernameHandler}
					/>
				</Form.Group>

				<Form.Group className='mb-3' controlId='formBasicText'>
					<Form.Label>Password</Form.Label>
					<Form.Control
						type='password'
						placeholder='Password'
						onChange={onPasswordHandler}
					/>
				</Form.Group>

				<Button variant='primary' type='submit'>
					Login
				</Button>
			</Form>
		</Container>
	);
}

export default Login;
