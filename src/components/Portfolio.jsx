import Navegation from '../Layouts/Navegation';
import Footer from '../Layouts/Footer';
import DescriptionAndImage from '../Layouts/DescriptionAndImage';

import cuadros from '../Layouts/ImageImporter';

export default function Portfolio() {
	const parrafo1 = <p>SOY UN CUADRO</p>;
	return (
		<div>
			<Navegation />
			<DescriptionAndImage imagenProp={cuadros.Aqua} description={parrafo1} />
			<DescriptionAndImage
				flexRow='flex-sm-row-reverse'
				justifyContent='justify-content-sm-end'
				texto='ejemplo'
				imagenProp={cuadros.Sky1}
				description={parrafo1}
			/>

			<Footer />
		</div>
	);
}
