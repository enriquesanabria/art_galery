import Navegation from '../Layouts/Navegation';
import Carousel from '../Layouts/Carousel';
import Footer from '../Layouts/Footer';
import cover1 from '../assets/img/carrousel/Covers/cover1.jpg';
import cover2 from '../assets/img/carrousel/Covers/cover2.jpg';
import cover3 from '../assets/img/carrousel/Covers/cover3.jpg';
import cover4 from '../assets/img/carrousel/Covers/cover4.jpg';

import coverArtist1 from '../assets/img/carrousel/Artist/CarrouselArtista1.jpg';
import coverArtist2 from '../assets/img/carrousel/Artist/CarrouselArtista2.jpg';
import coverArtist3 from '../assets/img/carrousel/Artist/CarrouselArtista3.jpg';
import coverArtist4 from '../assets/img/carrousel/Artist/CarrouselArtista4.jpg';

import ImgLogo from '../Layouts/ImgBannerLogo';

const imagesSet1 = [cover1, cover2, cover3, cover4];
const imagesSet2 = [coverArtist1, coverArtist2, coverArtist3, coverArtist4]; // Define otro conjunto de imágenes

export default function Home() {
	return (
		<div>
			<Navegation />
			<Carousel images={imagesSet1} />
			<ImgLogo />
			<Carousel images={imagesSet2} />
			<Footer />
		</div>
	);
}
