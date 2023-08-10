import Image from 'react-bootstrap/Image';
import Logo from '../assets/img/icons/logoTripoliA.svg';
import style from '../styles/layouts/imgLogo.module.css';

export default function imgLogo() {
	return <Image src={Logo} className={style.bannerLogo} fluid />;
}
