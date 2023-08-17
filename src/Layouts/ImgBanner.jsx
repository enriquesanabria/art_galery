import Image from 'react-bootstrap/Image';

import { Container } from 'react-bootstrap';

import style from '../styles/scss/bannerLogo.module.scss';

function Banner(props) {
	return (
		<Container fluid className={style.container}>
			<Image src={props.img} fluid className={style.logo} />
		</Container>
	);
}

export default Banner;
