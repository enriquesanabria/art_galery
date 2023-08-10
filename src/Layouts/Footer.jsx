import { Container, Row, Col } from 'react-bootstrap';
import IconMeva from '../assets/img/icons/iconMeva.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
	return (
		<div>
			<footer className='bg-white'>
				<Container fluid>
					<Row className='d-flex align-items-center mx-sm-4'>
						<Col sm={8} className='d-sm-flex flex-item text-center mt-2'>
							<a
								href='mailto:tripoli.arte@gmail.com?Subject=Cuadros%20de%20su%20página'
								id='correo'
							></a>
							<FontAwesomeIcon icon={faEnvelope} />
							<p className='pt-1 px-2'>tripoli.arte@gmail.com</p>
							<a
								href='https://www.instagram.com/tripoli.maria.laura/'
								className='text-dark mx-2'
							>
								instagram
							</a>
							<FontAwesomeIcon icon={faInstagram} />
							<p className='pt-1 px-1'>@tripoli.maria.laura</p>
							<a
								href='https://wa.me/111566315443?text=Hola!%20estoy%20interesad@%20en%20un%20cuadro'
								className='text-dark mx-2'
							>
								whatsapp
							</a>
							<FontAwesomeIcon icon={faWhatsapp} />
							<p className='pt-1 px-1'>+54 9 1166315443</p>
						</Col>

						<hr className='w-100 clearfix d-md-none' />

						<Col sm={4} className='flex-item text-sm-end text-center'>
							<img src={IconMeva} alt='Logo Meva' width='auto' height='70px' />
						</Col>
					</Row>
				</Container>
			</footer>
		</div>
	);
}
