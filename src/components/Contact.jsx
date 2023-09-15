import { Row, Col } from 'react-bootstrap';

import { contacto } from '../Layouts/ImageImporter';

import ComponentCarousel from '../Layouts/Carousel.jsx';
import Navegation from '../Layouts/Navegation';
import Footer from '../Layouts/Footer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import style from '../styles/scss/contact.module.scss';

const imagesSet1 = [contacto.cuadro1, contacto.cuadro2, contacto.cuadro3];

const ContactCarousel = () => {
	return (
		<div>
			<Navegation />
			<body>
				<Row>
					<Col xl={5}>
						<ComponentCarousel images={imagesSet1} />
					</Col>
					<Col
						xl={7}
						className={`d-block d-flex d-xl-flex justify-content-center align-items-center`}
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
									<p className={style.contact}>@tripoli.maria.laura</p>
								</a>
							</li>
							<li>
								<a
									href='mailto:tripoli.arte@gmail.com?Subject=Cuadros%20de%20su%20página'
									id='correo'
									className={`d-flex ${style.link}`}
								>
									<FontAwesomeIcon icon={faEnvelope} />
									<p className={style.contact}>tripoli.arte@gmail.com</p>
								</a>
							</li>
						</ul>
					</Col>
				</Row>
			</body>
			<Footer page={true} />
		</div>
	);
};

export default ContactCarousel;
