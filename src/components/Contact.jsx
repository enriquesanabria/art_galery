import { Container, Row, Col } from 'react-bootstrap';

import { contacto } from '../Layouts/ImageImporter';

import ComponentCarousel from '../Layouts/Carousel.jsx';
import Navegation from '../Layouts/Navegation';
import Footer from '../Layouts/Footer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';

const imagesSet1 = [contacto.cuadro1, contacto.cuadro2, contacto.cuadro3];

import style from '../styles/scss/contact.module.scss';

const ContactCarousel = () => {
	return (
		<div>
			<Navegation />
			<Container fluid className={style.main}>
				<Row>
					<Col xl={5} className='p-0'>
						<ComponentCarousel images={imagesSet1} />
					</Col>
					<Col
						xl={7}
						className='d-block d-flex d-xl-flex justify-content-center align-items-center p-0'
					>
						<ul className='lista-contacto'>
							<li className='mt-3'>
								<FontAwesomeIcon icon={faWhatsapp} />
								<p className='pt-1 px-1'>+54 9 1166315443</p>
							</li>
							<li className='mt-3'>
								<FontAwesomeIcon icon={faInstagram} />
								<p className='pt-1 px-1'>@tripoli.maria.laura</p>
								<a
									className='hipervinculo d-inline-block'
									href='https://www.instagram.com/tripoli.maria.laura/'
								>
									<p className='ms-sm-3 ms-2'>@tripoli.maria.laura</p>
								</a>
							</li>
							<li className='mt-3'>
								<a
									href='mailto:tripoli.arte@gmail.com?Subject=Cuadros%20de%20su%20página'
									id='correo'
								></a>
								<FontAwesomeIcon icon={faEnvelope} />
							</li>
						</ul>
					</Col>
				</Row>
			</Container>
			<Footer />
		</div>
	);
};

export default ContactCarousel;
