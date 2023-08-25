import Navegation from '../Layouts/Navegation';
import Footer from '../Layouts/Footer';
import DescriptionAndImage from '../Layouts/DescriptionAndImage';
import { art } from '../Layouts/ImageImporter';
import style from '../styles/scss/artist.module.scss';
import { Container } from 'react-bootstrap';

export default function Artist() {
	return (
		<div>
			<Navegation />
			<Container fluid className={style.main}>
				<DescriptionAndImage
					flexRow='text-start'
					texto='x'
					imagenProp={art.artist1}
					description={<div>x</div>}
				/>
				<DescriptionAndImage
					flexRow='flex-sm-row-reverse'
					justifyContent='justify-content-sm-end'
					texto='x'
					imagenProp={art.artist2}
					description={<div>x</div>}
				/>
				<DescriptionAndImage
					flexRow='text-start'
					texto='x'
					imagenProp={art.artist3}
					description={<div>x</div>}
				/>
				<DescriptionAndImage
					flexRow='flex-sm-row-reverse'
					justifyContent='justify-content-sm-end'
					texto='x'
					imagenProp={art.artist4}
					description={<div>x</div>}
				/>
			</Container>
			<Footer />
		</div>
	);
}
