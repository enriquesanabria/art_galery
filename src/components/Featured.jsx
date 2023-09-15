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
							<p className={style.name}> {DescriptionArt.RiverBank.title}</p>
							<div className={style.description}>
								{DescriptionArt.RiverBank.location}
								<br />
								{DescriptionArt.RiverBank.style}
								<br />
								{DescriptionArt.RiverBank.size}
								<br />
							</div>
							<p className={style.status}>{DescriptionArt.RiverBank.status}</p>
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
							<p className={style.name}>{DescriptionArt.Violet.title}</p>
							<div className={style.description}>
								{DescriptionArt.Violet.location}
								<br />
								{DescriptionArt.Violet.style}
								<br />
								{DescriptionArt.Violet.size}
								<br />
							</div>
							<p className={style.status}>{DescriptionArt.Violet.status}</p>
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='text-start'
					texto='x'
					imagenProp={cuadros.Dauntless}
					description={
						<div>
							<p className={style.name}> {DescriptionArt.Dauntless.title}</p>
							<div className={style.description}>
								{DescriptionArt.Dauntless.location}
								<br />
								{DescriptionArt.Dauntless.style}
								<br />
								{DescriptionArt.Dauntless.size}
								<br />
							</div>
							<p className={style.status}>{DescriptionArt.Dauntless.status}</p>
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='flex-sm-row-reverse'
					justifyContent='text-sm-end text-start'
					texto='x'
					imagenProp={cuadros.Orchid}
					description={
						<div>
							<p className={style.name}> {DescriptionArt.Orchid.title}</p>
							<div className={style.description}>
								{DescriptionArt.Orchid.location}
								<br />
								{DescriptionArt.Orchid.style}
								<br />
								{DescriptionArt.Orchid.size}
								<br />
							</div>
							<p className={style.status}>{DescriptionArt.Orchid.status}</p>
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='text-start'
					texto='x'
					imagenProp={cuadros.LetsFly}
					description={
						<div>
							<p className={style.name}>{DescriptionArt.LetsFly.title}</p>
							<div className={style.description}>
								{DescriptionArt.LetsFly.location}
								<br />
								{DescriptionArt.LetsFly.style}
								<br />
								{DescriptionArt.LetsFly.size}
							</div>
							<br />
							<p className={style.status}>{DescriptionArt.LetsFly.status}</p>
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
							<p className={style.name}> {DescriptionArt.Begining.title}</p>
							<div className={style.description}>
								{DescriptionArt.Begining.location}
								<br />
								{DescriptionArt.Begining.style}
								<br />
								{DescriptionArt.Begining.size}
							</div>
							<p className={style.status}>{DescriptionArt.Begining.status}</p>
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='text-start'
					texto='x'
					imagenProp={cuadros.Cement}
					description={
						<div>
							<p className={style.name}> {DescriptionArt.Cement.title}</p>
							<div className={style.description}>
								{DescriptionArt.Cement.location}
								<br />
								{DescriptionArt.Cement.style}
								<br />
								{DescriptionArt.Cement.size}
							</div>
							<p className={style.status}>{DescriptionArt.Cement.status}</p>
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
							<p className={style.name}>{DescriptionArt.Aqua.title}</p>
							<div className={style.description}>
								{DescriptionArt.Aqua.location}
								<br />
								{DescriptionArt.Aqua.style}
								<br />
								{DescriptionArt.Aqua.size}
							</div>
							<br />
							<p className={style.status}>{DescriptionArt.Aqua.status}</p>
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='text-start'
					texto='x'
					imagenProp={cuadros.Shining}
					description={
						<div>
							<p className={style.name}>{DescriptionArt.Shining.title}</p>
							<div className={style.description}>
								{DescriptionArt.Shining.location}
								<br />
								{DescriptionArt.Shining.style}
								<br />
								{DescriptionArt.Shining.size}
								<br />
							</div>
							<p className={style.status}>{DescriptionArt.Shining.status}</p>
						</div>
					}
				/>
			</Container>
			<Footer />
		</div>
	);
}
