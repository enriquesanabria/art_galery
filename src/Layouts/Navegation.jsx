import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import logoTripoli from '../assets/img/icons/logoTripoliA.svg';

const AppNavbar = () => {
	return (
		<Navbar fixed='top' expand='lg' bg='black' variant='dark'>
			<Container fluid>
				<Navbar.Brand as={Link} to='/'>
					<img src={logoTripoli} alt='Logo Laura Tripoli' height='50px' />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='navbarSupportedContent' />
				<Navbar.Collapse id='navbarSupportedContent'>
					<Nav className='ms-auto'>
						<Nav.Link as={Link} to='/artist'>
							Artist
						</Nav.Link>
						<Nav.Link as={Link} to='/featured'>
							Featured
						</Nav.Link>
						<Nav.Link as={Link} to='/portfolio'>
							Portfolio
						</Nav.Link>
						<Nav.Link as={Link} to='/expo'>
							Expos
						</Nav.Link>
						<Nav.Link as={Link} to='/contact'>
							Contact
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default AppNavbar;
