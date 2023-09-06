import { Container, Row, Col } from 'react-bootstrap';
import IconMeva from '../assets/img/icons/iconMeva.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';

import style from '../styles/scss/footer.module.scss';

export default function Footer() {
	return (
		<footer>
			<Container fluid>
				<Row>
					<Col sm={8} className={`d-block d-sm-flex text-start ${style.col}`}>
						<div>
							<a
								href='mailto:tripoli.arte@gmail.com?Subject=Cuadros%20de%20su%20página'
								id='correo'
								className={`${style.a}`}
							>
								<FontAwesomeIcon icon={faEnvelope} className={style.icon} />
								<p className={style.inline_text}>tripoli.arte@gmail.com</p>
							</a>
						</div>
						<div>
							<a
								href='https://www.instagram.com/tripoli.maria.laura/ '
								className={`${style.a}`}
							>
								<FontAwesomeIcon icon={faInstagram} className={style.icon} />
								<p className={style.inline_text}>@tripoli.maria.laura</p>
							</a>
						</div>
						<div>
							<a
								href='https://wa.me/111566315443?text=Hola!%20estoy%20interesad@%20en%20un%20cuadro'
								className={`${style.a}`}
							>
								<FontAwesomeIcon icon={faWhatsapp} className={style.icon} />
								<p className={style.inline_text}>+54 9 1166315443</p>
							</a>
						</div>
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
