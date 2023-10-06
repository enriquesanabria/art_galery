import { Row, Col, Container, Nav } from 'react-bootstrap';

import { contacto } from '../Layouts/ImageImporter';

import ComponentCarousel from '../Layouts/Carousel.jsx';
import Navegation from '../Layouts/Navegation';
import Footer from '../Layouts/Footer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import style from '../styles/scss/contact.module.scss';

const imagesSet1 = [contacto.cuadro1, contacto.cuadro2, contacto.cuadro3];

const ContactCarousel = () => {
	return (
		<Container fluid className='base'>
			<Navegation />
			<Row>
				<Col md={6}>
					<ComponentCarousel images={imagesSet1} />
				</Col>
				<Col
					md={6}
					className='d-flex justify-content-center align-items-center'
				>
					<ul>
						<li>
							<a
								href='https://wa.me/111566315443?text=Hola!%20estoy%20interesad@%20en%20un%20cuadro'
								className={`d-flex ${style.link}`}
							>
								<FontAwesomeIcon icon={faWhatsapp} />
								<p className={style.contact}>+54 9 1166315443</p>
							</a>
						</li>
						<li>
							<a
								href='https://www.instagram.com/tripoli.maria.laura/'
								className={`d-flex ${style.link}`}
							>
								<FontAwesomeIcon icon={faInstagram} />
								<p className={style.contact}>tripoli.maria.laura</p>
							</a>
						</li>
						<li>
							<a
								href='https://wa.me/111566315443?text=Hola!%20estoy%20interesad@%20en%20un%20cuadro'
								className={`d-flex ${style.link}`}
							>
								<FontAwesomeIcon icon={faEnvelope} />
								<p className={style.contact}>+54 9 1166315443</p>
							</a>
						</li>
					</ul>
				</Col>
				<Footer page={true} />
			</Row>
		</Container>
	);
};

export default ContactCarousel;
