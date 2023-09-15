import Navegation from '../Layouts/Navegation';
import Footer from '../Layouts/Footer';
import Banners from '../Layouts/ImgBanner';
import { expos } from '../Layouts/ImageImporter';

export default function Expo() {
	return (
		<div>
			<Navegation />
			<body>
				<Banners img={expos.mercedesGiachetti} />
				<Banners img={expos.expoCafira} />
				<Banners img={expos.laVoluntad} />
				<Banners img={expos.artWorld} />
				<Banners img={expos.florenceBiennale} />
			</body>
			<Footer />
		</div>
	);
}
