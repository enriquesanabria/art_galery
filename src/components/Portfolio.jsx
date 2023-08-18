import Navegation from '../Layouts/Navegation';
import Footer from '../Layouts/Footer';
import DescriptionAndImage from '../Layouts/DescriptionAndImage';

import cuadros from '../Layouts/ImageImporter';
import description from '../Layouts/Textimporter';

export default function Portfolio() {
	return (
		<div>
			<Navegation />
			<DescriptionAndImage
				flexRow='flex-sm-row-reverse'
				justifyContent='justify-content-sm-end'
				texto='x'
				imagenProp={cuadros.RiverBank}
				description={
					<div>
						{description.RiverBank.title}
						<br />
						{description.RiverBank.location}
						<br />
						{description.RiverBank.style}
						{description.RiverBank.content}
					</div>
				}
			/>

			<Footer />
		</div>
	);
}
