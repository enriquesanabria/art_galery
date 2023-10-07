import Navegation from '../Layouts/Navegation';
import Footer from '../Layouts/Footer';
import Banners from '../Layouts/ImgBanner';
import { expos } from '../Layouts/ImageImporter';
import { Container } from 'react-bootstrap';

export default function Expo() {
	return (
		<Container fluid className='base'>
			<Navegation />
			<div>
				<Banners img={expos.mercedesGiachetti} />
				<Banners img={expos.expoCafira} />
				<Banners img={expos.laVoluntad} />
				<Banners img={expos.artWorld} />
				<Banners img={expos.florenceBiennale} />
			</div>
			<Footer />
		</Container>
	);
}
