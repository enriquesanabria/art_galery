import Navegation from '../Layouts/Navegation';
import Footer from '../Layouts/Footer';

import { cuadros } from '../Layouts/ImageImporter';
import { Container } from 'react-bootstrap';
import { DescriptionArt } from '../Layouts/TextImporter';

import DescriptionAndImage from '../Layouts/DescriptionAndImage';

import style from '../styles/scss/featured.module.scss';

export default function Featured() {
	return (
		<div>
			<Navegation />
			<Container fluid className={style.main}>
				<DescriptionAndImage
					justifyContent='text-start'
					texto='x'
					imagenProp={cuadros.RiverBank}
					description={
						<div>
							{DescriptionArt.RiverBank.title}
							<br />
							{DescriptionArt.RiverBank.location}
							<br />
							{DescriptionArt.RiverBank.style}
							<br />
							{DescriptionArt.RiverBank.size}
							<br />
							{DescriptionArt.RiverBank.status}
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='flex-sm-row-reverse'
					justifyContent='text-sm-end text-start'
					texto='x'
					imagenProp={cuadros.Violet}
					description={
						<div>
							{DescriptionArt.Violet.title}
							<br />
							{DescriptionArt.Violet.location}
							<br />
							{DescriptionArt.Violet.style}
							<br />
							{DescriptionArt.Violet.size}
							<br />
							{DescriptionArt.Violet.status}
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='text-start'
					texto='x'
					imagenProp={cuadros.Dauntless}
					description={
						<div>
							{DescriptionArt.Dauntless.title}
							<br />
							{DescriptionArt.Dauntless.location}
							<br />
							{DescriptionArt.Dauntless.style}
							<br />
							{DescriptionArt.Dauntless.size}
							<br />
							{DescriptionArt.Dauntless.status}
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='flex-sm-row-reverse'
					jjustifyContent='text-sm-end text-start'
					texto='x'
					imagenProp={cuadros.Orchid}
					description={
						<div>
							{DescriptionArt.Orchid.title}
							<br />
							{DescriptionArt.Orchid.location}
							<br />
							{DescriptionArt.Orchid.style}
							<br />
							{DescriptionArt.Orchid.size}
							<br />
							{DescriptionArt.Orchid.status}
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='text-start'
					texto='x'
					imagenProp={cuadros.LetsFly}
					description={
						<div>
							{DescriptionArt.LetsFly.title}
							<br />
							{DescriptionArt.LetsFly.location}
							<br />
							{DescriptionArt.LetsFly.style}
							<br />
							{DescriptionArt.LetsFly.size}
							<br />
							{DescriptionArt.LetsFly.status}
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='flex-sm-row-reverse'
					justifyContent='text-sm-end text-start'
					texto='x'
					imagenProp={cuadros.Begining}
					description={
						<div>
							{DescriptionArt.Begining.title}
							<br />
							{DescriptionArt.Begining.location}
							<br />
							{DescriptionArt.Begining.style}
							<br />
							{DescriptionArt.Begining.size}
							<br />
							{DescriptionArt.Begining.status}
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='text-start'
					texto='x'
					imagenProp={cuadros.Cement}
					description={
						<div>
							{DescriptionArt.Cement.title}
							<br />
							{DescriptionArt.Cement.location}
							<br />
							{DescriptionArt.Cement.style}
							<br />
							{DescriptionArt.Cement.size}
							<br />
							{DescriptionArt.Cement.status}
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='flex-sm-row-reverse'
					justifyContent='text-sm-end text-start'
					texto='x'
					imagenProp={cuadros.Aqua}
					description={
						<div>
							{DescriptionArt.Aqua.title}
							<br />
							{DescriptionArt.Aqua.location}
							<br />
							{DescriptionArt.Aqua.style}
							<br />
							{DescriptionArt.Aqua.size}
							<br />
							{DescriptionArt.Aqua.status}
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='text-start'
					texto='x'
					imagenProp={cuadros.Shining}
					description={
						<div>
							{DescriptionArt.Shining.title}
							<br />
							{DescriptionArt.Shining.location}
							<br />
							{DescriptionArt.Shining.style}
							<br />
							{DescriptionArt.Shining.size}
							<br />
							{DescriptionArt.Shining.status}
						</div>
					}
				/>
			</Container>
			<Footer />
		</div>
	);
}
