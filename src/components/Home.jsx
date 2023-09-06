import Navegation from '../Layouts/Navegation';
import Carousel from '../Layouts/Carousel';

import { carrouselHome, carrouselArtistHome } from '../Layouts/ImageImporter';
import Footer from '../Layouts/Footer';

import BannerLogo from '../Layouts/ImgBanner';
import imgLogo from '../assets/img/icons/logoTripoliA.svg';
import style from '../styles/scss/home.module.scss';

const imagesSet1 = [
	carrouselHome.cover1,
	carrouselHome.cover2,
	carrouselHome.cover3,
	carrouselHome.cover4,
];
const imagesSet2 = [
	carrouselArtistHome.carroArtist1,
	carrouselArtistHome.carroArtist2,
	carrouselArtistHome.carroArtist3,
	carrouselArtistHome.carroArtist4,
]; // Define otro conjunto de imágenes

export default function Home() {
	return (
		<div className={style.home}>
			<Navegation />
			<Carousel images={imagesSet1} />
			<BannerLogo img={imgLogo} />
			<Carousel images={imagesSet2} />
			<Footer />
		</div>
	);
}
