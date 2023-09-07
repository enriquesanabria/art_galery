/* eslint-disable react/prop-types */
import Image from 'react-bootstrap/Image';

import style from '../styles/scss/banner.module.scss';
import { Container } from 'react-bootstrap';

function Banner(props) {
	const bannerClass = props.isSVG ? style.svgBanner : style.imgBanner; //
	return (
		<Container className={style.containerBanner} fluid>
			<Image src={props.img} className={bannerClass} />
		</Container>
	);
}

export default Banner;
