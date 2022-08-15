import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

function Login() {
	return (
		<Container>
			<Form>
				<Form.Group className='mb-3' controlId='formBasicText'>
					<Form.Label>Username</Form.Label>
					<Form.Control
						type='text'
						name='username'
						placeholder='Enter username'
					/>
				</Form.Group>

				<Form.Group className='mb-3' controlId='formBasicText'>
					<Form.Label>Password</Form.Label>
					<Form.Control type='password' placeholder='Password' />
				</Form.Group>

				<Button variant='primary' type='submit'>
					Login
				</Button>
			</Form>
		</Container>
	);
}

export default Login;
