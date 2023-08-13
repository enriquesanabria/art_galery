import { Container, Row, Col } from 'react-bootstrap';
import IconMeva from '../assets/img/icons/iconMeva.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';

import style from '../styles/layouts/footer.module.scss';

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
							<p className='pt-1 px-2'>tripoli.arte@gmail.com</p>
							<FontAwesomeIcon icon={faEnvelope} className={style.icon} />
						</a>

						<a href='https://www.instagram.com/tripoli.maria.laura/'>
							<p className='pt-1 px-1'>@tripoli.maria.laura</p>
							<FontAwesomeIcon icon={faInstagram} className={style.icon} />
						</a>

						<a href='https://wa.me/111566315443?text=Hola!%20estoy%20interesad@%20en%20un%20cuadro'>
							<p className='pt-1 px-1'>+54 9 1166315443</p>
							<FontAwesomeIcon icon={faWhatsapp} className={style.icon} />
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
