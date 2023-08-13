import Image from 'react-bootstrap/Image';
import style from '../styles/layouts/imgLogo.module.scss';

function Banner(props) {
	return (
		<div className={style.banner}>
			<Image src={props.img} fluid />
		</div>
	);
}

export default Banner;
