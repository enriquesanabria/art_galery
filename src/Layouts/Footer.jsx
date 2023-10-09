import { Row, Col, Container } from 'react-bootstrap';
import IconMeva from '../assets/img/Svgs/NoNameLogoWEB.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';

import style from '../styles/scss/footer.module.scss';

export default function Footer(props) {
	// eslint-disable-next-line react/prop-types
	if (props.page) {
		return (
			<div className={style.main}>
				<Container fluid className='d-flex justify-content-end'>
					<img src={IconMeva} alt='No Name' width='auto' height='70px' />
				</Container>
			</div>
		);
	} else {
		return (
			<Container fluid className={style.main}>
				<Row className={'align-items-center'}>
					<Col sm={8} className={'d-sm-flex text-center'}>
						<div className={'d-sm-flex ms-4 '}>
							<a
								href='mailto:tripoli.arte@gmail.com?Subject=Cuadros%20de%20su%20página'
								id='correo'
								className={style.a}
							>
								<FontAwesomeIcon icon={faEnvelope} className={style.icon} />
							</a>
							<p className='m-1'>tripoli.arte@gmail.com</p>
						</div>
						<div className={'d-sm-flex ms-3'}>
							<a
								href='https://www.instagram.com/tripoli.maria.laura/ '
								className={style.a}
							>
								<FontAwesomeIcon icon={faInstagram} className={style.icon} />
							</a>
							<p className='m-1'>@tripoli.maria.laura</p>
						</div>
						<div className={'d-sm-flex ms-3'}>
							<a
								href='https://wa.me/111566315443?text=Hola!%20estoy%20interesad@%20en%20un%20cuadro'
								className={style.a}
							>
								<FontAwesomeIcon icon={faWhatsapp} className={style.icon} />
							</a>
							<p className='m-1'>+54 9 1166315443</p>
						</div>
					</Col>

					<hr className='w-100 clearfix d-md-none' />

					<Col sm={4} className='flex-item text-sm-end text-center'>
						<img src={IconMeva} alt='No Name' width='auto' height='70px' />
					</Col>
				</Row>
			</Container>
		);
	}
}
