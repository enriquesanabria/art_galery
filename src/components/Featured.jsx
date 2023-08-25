import Navegation from '../Layouts/Navegation';
import Footer from '../Layouts/Footer';

import { cuadros } from '../Layouts/ImageImporter';
import { description } from '../Layouts/Textimporter';
import { Container } from 'react-bootstrap';

import DescriptionAndImage from '../Layouts/DescriptionAndImage';

import style from '../styles/scss/featured.module.scss';

export default function Featured() {
	return (
		<div>
			<Navegation />
			<Container fluid className={style.main}>
				<DescriptionAndImage
					flexRow='text-start'
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
					flexRow='flex-sm-row-reverse'
					justifyContent='justify-content-sm-end'
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
					flexRow='text-start'
					texto='x'
					imagenProp={cuadros.Dauntless}
					description={
						<div>
							{description.Dauntless.title}
							<br />
							{description.Dauntless.location}
							<br />
							{description.Dauntless.style}
							<br />
							{description.Dauntless.size}
							<br />
							{description.Dauntless.status}
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='flex-sm-row-reverse'
					justifyContent='justify-content-sm-end'
					texto='x'
					imagenProp={cuadros.Orchid}
					description={
						<div>
							{description.Orchid.title}
							<br />
							{description.Orchid.location}
							<br />
							{description.Orchid.style}
							<br />
							{description.Orchid.size}
							<br />
							{description.Orchid.status}
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='text-start'
					texto='x'
					imagenProp={cuadros.LetsFly}
					description={
						<div>
							{description.LetsFly.title}
							<br />
							{description.LetsFly.location}
							<br />
							{description.LetsFly.style}
							<br />
							{description.LetsFly.size}
							<br />
							{description.LetsFly.status}
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='flex-sm-row-reverse'
					justifyContent='justify-content-sm-end'
					texto='x'
					imagenProp={cuadros.Begining}
					description={
						<div>
							{description.Begining.title}
							<br />
							{description.Begining.location}
							<br />
							{description.Begining.style}
							<br />
							{description.Begining.size}
							<br />
							{description.Begining.status}
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='text-start'
					texto='x'
					imagenProp={cuadros.Cement}
					description={
						<div>
							{description.Cement.title}
							<br />
							{description.Cement.location}
							<br />
							{description.Cement.style}
							<br />
							{description.Cement.size}
							<br />
							{description.Cement.status}
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='flex-sm-row-reverse'
					justifyContent='justify-content-sm-end'
					texto='x'
					imagenProp={cuadros.Aqua}
					description={
						<div>
							{description.Aqua.title}
							<br />
							{description.Aqua.location}
							<br />
							{description.Aqua.style}
							<br />
							{description.Aqua.size}
							<br />
							{description.Aqua.status}
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='text-start'
					texto='x'
					imagenProp={cuadros.Shining}
					description={
						<div>
							{description.Shining.title}
							<br />
							{description.Shining.location}
							<br />
							{description.Shining.style}
							<br />
							{description.Shining.size}
							<br />
							{description.Shining.status}
						</div>
					}
				/>
			</Container>
			<Footer />
		</div>
	);
}
