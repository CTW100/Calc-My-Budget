import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
	return (
		<>
			<Navbar bg='primary' variant='dark'>
				<Container>
					<Navbar.Brand href='/'>Navbar</Navbar.Brand>
					<Nav className='me-auto'>
						<Nav.Link href='/'>Home</Nav.Link>
						<Nav.Link href='/add-product'>Add Product</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</>
	);
}

export default Navigation;
