import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../_actions/userAction';

function CreateAccount(props) {
	const dispatch = useDispatch();

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');

	const onUsernameHandler = (e) => {
		setUsername(e.target.value);
	};

	const onPasswordHandler = (e) => {
		setPassword(e.target.value);
	};

	const onNameHandler = (e) => {
		setName(e.target.value);
	};

	const onEmailHandler = (e) => {
		setEmail(e.target.value);
	};

	const onSubmitHandler = async (e) => {
		e.preventDefault();

		let body = {
			username: username,
			password: password,
			name: name,
			email: email,
		};

		dispatch(registerUser(body));

		alert('가입이 정상적으로 완료되었습니다.');
		props.history.push('/users/login');
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

				<Form.Group className='mb-3' controlId='formBasicText'>
					<Form.Label>Name</Form.Label>
					<Form.Control
						type='text'
						placeholder='Name'
						onChange={onNameHandler}
					/>
				</Form.Group>

				<Form.Group className='mb-3' controlId='formBasicEmail'>
					<Form.Label>Email</Form.Label>
					<Form.Control
						type='text'
						placeholder='Enter Email'
						onChange={onEmailHandler}
					/>
				</Form.Group>
				<Button variant='primary' type='submit'>
					Create Account
				</Button>
			</Form>
		</Container>
	);
}

export default CreateAccount;
