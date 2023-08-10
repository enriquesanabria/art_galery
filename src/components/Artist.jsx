import Navegation from '../Layouts/Navegation';
import Footer from '../Layouts/Footer';
import ImageComponent from '../Layouts/ImageComponent';

import artist1 from '../assets/img/artist/Artist1.jpg';
import artist2 from '../assets/img/artist/Artist2.jpg';
import artist3 from '../assets/img/artist/Artist3.jpg';
import artist4 from '../assets/img/artist/Artist4.jpg';

import { Container } from 'react-bootstrap';

export default function Artist() {
	return (
		<div>
			<Navegation />
			<Container fluid>
				<ImageComponent
					imageUrl={artist1}
					altText='Descripción de la imagen 1'
				/>
				<ImageComponent
					imageUrl={artist2}
					altText='Descripción de la imagen 2'
				/>
				<ImageComponent
					imageUrl={artist3}
					altText='Descripción de la imagen 3'
				/>
				<ImageComponent
					imageUrl={artist4}
					altText='Descripción de la imagen 4'
				/>
			</Container>
			<Footer />
		</div>
	);
}
