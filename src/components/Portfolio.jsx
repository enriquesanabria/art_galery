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
						<br />
						{description.RiverBank.size}
						<br />
						{description.RiverBank.status}
					</div>
				}
			/>
			<DescriptionAndImage
				justifyContent='text-start'
				texto='x'
				imagenProp={cuadros.Violet}
				description={
					<div>
						{description.Violet.title}
						<br />
						{description.Violet.location}
						<br />
						{description.Violet.style}
						<br />
						{description.Violet.size}
						<br />
						{description.Violet.status}
					</div>
				}
			/>
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
						<br />
						{description.RiverBank.size}
						<br />
						{description.RiverBank.status}
					</div>
				}
			/>
			<DescriptionAndImage
				justifyContent='text-start'
				texto='x'
				imagenProp={cuadros.Mousteire}
				description={
					<div>
						{description.Mousteire.title}
						<br />
						{description.Mousteire.location}
						<br />
						{description.Mousteire.style}
						<br />
						{description.Mousteire.size}
						<br />
						{description.Mousteire.status}
					</div>
				}
			/>
			<DescriptionAndImage
				flexRow='flex-sm-row-reverse'
				justifyContent='justify-content-sm-end'
				texto='x'
				imagenProp={cuadros.Curl}
				description={
					<div>
						{description.Curl.title}
						<br />
						{description.Curl.location}
						<br />
						{description.Curl.style}
						<br />
						{description.Curl.size}
						<br />
						{description.Curl.status}
					</div>
				}
			/>
			<DescriptionAndImage
				justifyContent='text-start'
				texto='x'
				imagenProp={cuadros.Gold}
				description={
					<div>
						{description.Gold.title}
						<br />
						{description.Gold.location}
						<br />
						{description.Gold.style}
						<br />
						{description.Gold.size}
						<br />
						{description.Gold.status}
					</div>
				}
			/>

			<Footer />
		</div>
	);
}
