import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logoTripoli from '../assets/img/svgs/logoTripoliB.svg';
import style from '../styles/scss/navbar.module.scss';

function NavComponent() {
	return (
		<Navbar
			fixed='top'
			expand='lg'
			bg='black'
			variant='dark'
			collapseOnSelect
			className={style.navbarStyle}
		>
			<Container fluid>
				<Navbar.Brand as={Link} to='/'>
					<img
						src={logoTripoli}
						alt='Logo Laura Tripoli'
						className={style.logo}
					/>
				</Navbar.Brand>
				<Navbar.Toggle className={style.toggleButtonStyle} />
				<Navbar.Collapse className='justify-content-end'>
					<Nav>
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
}

export default NavComponent;
