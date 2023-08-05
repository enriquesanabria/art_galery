import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';

export default function Navegation() {
	return (
		<Navbar collapseOnSelect expand='lg' bg='dark' data-bs-theme='dark'>
			<Container fluid>
				<Navbar.Brand as={Link} to='/'>
					<img
						src='/src/assets/img/icons/Tripoli Logo.svg'
						width='50'
						height='30'
						className='d-inline-block align-top'
						alt='React Bootstrap logo'
					/>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='me-auto'>
						<Nav.Link as={Link} to='/'>
							Home
						</Nav.Link>
						<Nav.Link as={Link} to='/Artist'>
							Artist
						</Nav.Link>
						<Nav.Link as={Link} to='/Contact'>
							Contact
						</Nav.Link>
						<Nav.Link as={Link} to='/Expo'>
							Expo
						</Nav.Link>
						<Nav.Link as={Link} to='/Featured'>
							Featured
						</Nav.Link>
						<Nav.Link as={Link} to='/Portfolio'>
							Portfolio
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}