import { Container, Row, Col } from 'react-bootstrap';
import IconMeva from '../assets/img/icons/iconMeva.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
	return (
		<footer>
			<Container fluid>
				<Row className='d-flex align-items-center mx-sm-4'>
					<Col sm={8} className='d-sm-flex flex-item text-center mt-2'>
						<a
							href='mailto:tripoli.arte@gmail.com?Subject=Cuadros%20de%20su%20página'
							id='correo'
						>
							<FontAwesomeIcon icon={faEnvelope} />
							<p>tripoli.arte@gmail.com</p>
						</a>

						<a href='https://www.instagram.com/tripoli.maria.laura/'>
							<FontAwesomeIcon icon={faInstagram} />
							<p>@tripoli.maria.laura</p>
						</a>

						<a href='https://wa.me/111566315443?text=Hola!%20estoy%20interesad@%20en%20un%20cuadro'>
							<FontAwesomeIcon icon={faWhatsapp} />
							<p>+54 9 1166315443</p>
						</a>
					</Col>

					<hr className='w-100 clearfix d-md-none' />

					<Col sm={4} className='flex-item text-sm-end text-center'>
						<img src={IconMeva} alt='Logo Meva' width='auto' height='70px' />
					</Col>
				</Row>
			</Container>
		</footer>
	);
}
