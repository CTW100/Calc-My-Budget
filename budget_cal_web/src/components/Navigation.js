import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
	return (
		<>
			<Navbar bg='primary' variant='dark'>
				<Container>
					<Navbar.Brand href='/'>Welcome</Navbar.Brand>
					<Nav className='me-auto'>
						<Nav.Link href='/home'>Home</Nav.Link>
						<Nav.Link href='/add-product'>Add Product</Nav.Link>
						<Nav.Link href='/users/new'>Create Account</Nav.Link>
						<Nav.Link href='/users/login'>Login</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</>
	);
}

export default Navigation;
