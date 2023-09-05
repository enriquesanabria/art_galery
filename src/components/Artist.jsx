import Navegation from '../Layouts/Navegation';
import Footer from '../Layouts/Footer';
import DescriptionAndImage from '../Layouts/DescriptionAndImage';
import { ImgArtist } from '../Layouts/ImageImporter';
import { DescriptionArtist } from '../Layouts/TextImporter';
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
					imagenProp={ImgArtist.artist1}
					description={DescriptionArtist.text1.p}
				/>
				<DescriptionAndImage
					flexRow='flex-sm-row-reverse'
					justifyContent='justify-content-sm-end'
					texto='x'
					imagenProp={ImgArtist.artist2}
					description={DescriptionArtist.text2.p}
				/>
				<DescriptionAndImage
					flexRow='text-start'
					texto='x'
					imagenProp={ImgArtist.artist3}
					description={DescriptionArtist.text3.p}
				/>
				<DescriptionAndImage
					flexRow='flex-sm-row-reverse'
					justifyContent='justify-content-sm-end'
					texto='x'
					imagenProp={ImgArtist.artist4}
					description={DescriptionArtist.text4.p}
				/>
			</Container>
			<Footer />
		</div>
	);
}
