import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

function CreateAccount() {
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

				<Form.Group className='mb-3' controlId='formBasicText'>
					<Form.Label>Name</Form.Label>
					<Form.Control type='text' placeholder='Name' />
				</Form.Group>

				<Form.Group className='mb-3' controlId='formBasicEmail'>
					<Form.Label>Email</Form.Label>
					<Form.Control type='text' placeholder='Enter Email' />
				</Form.Group>
				<Button variant='primary' type='submit'>
					Create Account
				</Button>
			</Form>
		</Container>
	);
}

export default CreateAccount;
