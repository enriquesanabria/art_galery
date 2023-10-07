import Navegation from '../Layouts/Navegation';
import Footer from '../Layouts/Footer';

import { cuadros } from '../Layouts/ImageImporter';
import { DescriptionArt } from '../Layouts/TextImporter';

import DescriptionAndImage from '../Layouts/DescriptionAndImage';

import style from '../styles/scss/cuadros.module.scss';
import { Container } from 'react-bootstrap';

export default function Featured() {
	return (
		<Container fluid className='base'>
			<Navegation />
			<div>
				<DescriptionAndImage
					justifyContent='text-start'
					texto='x'
					imagenProp={cuadros.Hope}
					description={
						<div>
							<p className={style.name}> {DescriptionArt.Hope.title}</p>
							<div className={style.description}>
								{DescriptionArt.Hope.location}
								<br />
								{DescriptionArt.Hope.style}
								<br />
								{DescriptionArt.Hope.size}
								<br />
							</div>
							<p className={style.status}>{DescriptionArt.Hope.status}</p>
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='flex-sm-row-reverse'
					justifyContent='text-sm-end text-start'
					texto='x'
					imagenProp={cuadros.Land}
					description={
						<div>
							<p className={style.name}>{DescriptionArt.Land.title}</p>
							<div className={style.description}>
								{DescriptionArt.Land.location}
								<br />
								{DescriptionArt.Land.style}
								<br />
								{DescriptionArt.Land.size}
								<br />
							</div>
							<p className={style.status}>{DescriptionArt.Land.status}</p>
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='text-start'
					texto='x'
					imagenProp={cuadros.Blue}
					description={
						<div>
							<p className={style.name}> {DescriptionArt.Blue.title}</p>
							<div className={style.description}>
								{DescriptionArt.Blue.location}
								<br />
								{DescriptionArt.Blue.style}
								<br />
								{DescriptionArt.Blue.size}
								<br />
							</div>
							<p className={style.status}>{DescriptionArt.Blue.status}</p>
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='flex-sm-row-reverse'
					justifyContent='text-sm-end text-start'
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
					flexRow='text-start'
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
							</div>
							<br />
							<p className={style.status}>{DescriptionArt.Violet.status}</p>
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
							<p className={style.name}> {DescriptionArt.LetsFly.title}</p>
							<div className={style.description}>
								{DescriptionArt.LetsFly.location}
								<br />
								{DescriptionArt.LetsFly.style}
								<br />
								{DescriptionArt.LetsFly.size}
							</div>
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
							<p className={style.name}>{DescriptionArt.Begining.title}</p>
							<div className={style.description}>
								{DescriptionArt.Begining.location}
								<br />
								{DescriptionArt.Begining.style}
								<br />
								{DescriptionArt.Begining.size}
							</div>
							<br />
							<p className={style.status}>{DescriptionArt.Begining.status}</p>
						</div>
					}
				/>
			</div>
			<Footer />
		</Container>
	);
}
