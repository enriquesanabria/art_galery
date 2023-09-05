import Navegation from '../Layouts/Navegation';
import Footer from '../Layouts/Footer';
import DescriptionAndImage from '../Layouts/DescriptionAndImage';

import { cuadros } from '../Layouts/ImageImporter';
import { DescriptionArt } from '../Layouts/TextImporter';
import { Container } from 'react-bootstrap';
import style from '../styles/scss/portfolio.module.scss';

export default function Portfolio() {
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
					justifyContent='justify-content-sm-end'
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
					imagenProp={cuadros.Mousteire}
					description={
						<div>
							{DescriptionArt.Mousteire.title}
							<br />
							{DescriptionArt.Mousteire.location}
							<br />
							{DescriptionArt.Mousteire.style}
							<br />
							{DescriptionArt.Mousteire.size}
							<br />
							{DescriptionArt.Mousteire.status}
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
							{DescriptionArt.Curl.title}
							<br />
							{DescriptionArt.Curl.location}
							<br />
							{DescriptionArt.Curl.style}
							<br />
							{DescriptionArt.Curl.size}
							<br />
							{DescriptionArt.Curl.status}
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='text-start'
					texto='x'
					imagenProp={cuadros.Gold}
					T
					description={
						<div>
							{DescriptionArt.Gold.title}
							<br />
							{DescriptionArt.Gold.location}
							<br />
							{DescriptionArt.Gold.style}
							<br />
							{DescriptionArt.Gold.size}
							<br />
							{DescriptionArt.Gold.status}
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='flex-sm-row-reverse'
					justifyContent='justify-content-sm-end'
					texto='x'
					imagenProp={cuadros.Fun}
					description={
						<div>
							{DescriptionArt.Fun.title}
							<br />
							{DescriptionArt.Fun.location}
							<br />
							{DescriptionArt.Fun.style}
							<br />
							{DescriptionArt.Fun.size}
							<br />
							{DescriptionArt.Fun.status}
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='text-start'
					texto='x'
					imagenProp={cuadros.Stripping}
					description={
						<div>
							{DescriptionArt.Stripping.title}
							<br />
							{DescriptionArt.Stripping.location}
							<br />
							{DescriptionArt.Stripping.style}
							<br />
							{DescriptionArt.Stripping.size}
							<br />
							{DescriptionArt.Stripping.status}
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='flex-sm-row-reverse'
					justifyContent='justify-content-sm-end'
					texto='x'
					imagenProp={cuadros.Naif}
					description={
						<div>
							{DescriptionArt.Naif.title}
							<br />
							{DescriptionArt.Naif.location}
							<br />
							{DescriptionArt.Naif.style}
							<br />
							{DescriptionArt.Naif.size}
							<br />
							{DescriptionArt.Fun.status}
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='text-start'
					texto='x'
					imagenProp={cuadros.Youth}
					description={
						<div>
							{DescriptionArt.Youth.title}
							<br />
							{DescriptionArt.Youth.location}
							<br />
							{DescriptionArt.Youth.style}
							<br />
							{DescriptionArt.Youth.size}
							<br />
							{DescriptionArt.Youth.status}
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='flex-sm-row-reverse'
					justifyContent='justify-content-sm-end'
					texto='x'
					imagenProp={cuadros.NYC}
					description={
						<div>
							{DescriptionArt.NYC.title}
							<br />
							{DescriptionArt.NYC.location}
							<br />
							{DescriptionArt.NYC.style}
							<br />
							{DescriptionArt.NYC.size}
							<br />
							{DescriptionArt.NYC.status}
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='text-start'
					texto='x'
					imagenProp={cuadros.Pantuss}
					description={
						<div>
							{DescriptionArt.Pantuss.title}
							<br />
							{DescriptionArt.Pantuss.location}
							<br />
							{DescriptionArt.Pantuss.style}
							<br />
							{DescriptionArt.Pantuss.size}
							<br />
							{DescriptionArt.Pantuss.status}
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='flex-sm-row-reverse'
					justifyContent='justify-content-sm-end'
					texto='x'
					imagenProp={cuadros.Drums}
					description={
						<div>
							{DescriptionArt.Drums.title}
							<br />
							{DescriptionArt.Drums.location}
							<br />
							{DescriptionArt.Drums.style}
							<br />
							{DescriptionArt.Drums.size}
							<br />
							{DescriptionArt.Drums.status}
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='text-start'
					texto='x'
					imagenProp={cuadros.Chaos}
					description={
						<div>
							{DescriptionArt.Chaos.title}
							<br />
							{DescriptionArt.Chaos.location}
							<br />
							{DescriptionArt.Chaos.style}
							<br />
							{DescriptionArt.Chaos.size}
							<br />
							{DescriptionArt.Chaos.status}
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='flex-sm-row-reverse'
					justifyContent='justify-content-sm-end'
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
					flexRow='text-start'
					texto='x'
					imagenProp={cuadros.Makeup}
					description={
						<div>
							{DescriptionArt.MakeupCase.title}
							<br />
							{DescriptionArt.MakeupCase.location}
							<br />
							{DescriptionArt.MakeupCase.style}
							<br />
							{DescriptionArt.MakeupCase.size}
							<br />
							{DescriptionArt.MakeupCase.status}
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
					justifyContent='justify-content-sm-end'
					texto='x'
					imagenProp={cuadros.Explosion1}
					description={
						<div>
							{DescriptionArt.ExplosionSeriesI.title}
							<br />
							{DescriptionArt.ExplosionSeriesI.location}
							<br />
							{DescriptionArt.ExplosionSeriesI.style}
							<br />
							{DescriptionArt.ExplosionSeriesI.size}
							<br />
							{DescriptionArt.ExplosionSeriesI.status}
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='text-start'
					texto='x'
					imagenProp={cuadros.Explosion2}
					description={
						<div>
							{DescriptionArt.ExplosionSeriesII.title}
							<br />
							{DescriptionArt.ExplosionSeriesII.location}
							<br />
							{DescriptionArt.ExplosionSeriesII.style}
							<br />
							{DescriptionArt.ExplosionSeriesII.size}
							<br />
							{DescriptionArt.ExplosionSeriesII.status}
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='flex-sm-row-reverse'
					justifyContent='justify-content-sm-end'
					texto='x'
					imagenProp={cuadros.Twilight}
					description={
						<div>
							{DescriptionArt.Twilight.title}
							<br />
							{DescriptionArt.Twilight.location}
							<br />
							{DescriptionArt.Twilight.style}
							<br />
							{DescriptionArt.Twilight.size}
							<br />
							{DescriptionArt.Twilight.status}
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='text-start'
					texto='x'
					imagenProp={cuadros.Sunset}
					description={
						<div>
							{DescriptionArt.Sunset.title}
							<br />
							{DescriptionArt.Sunset.location}
							<br />
							{DescriptionArt.Sunset.style}
							<br />
							{DescriptionArt.Sunset.size}
							<br />
							{DescriptionArt.Sunset.status}
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='flex-sm-row-reverse'
					justifyContent='justify-content-sm-end'
					texto='x'
					imagenProp={cuadros.Beach1}
					description={
						<div>
							{DescriptionArt.BeachSeriesI.title}
							<br />
							{DescriptionArt.BeachSeriesI.location}
							<br />
							{DescriptionArt.BeachSeriesI.style}
							<br />
							{DescriptionArt.BeachSeriesI.size}
							<br />
							{DescriptionArt.BeachSeriesI.status}
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='text-start'
					texto='x'
					imagenProp={cuadros.Beach2}
					description={
						<div>
							{DescriptionArt.BeachSeriesII.title}
							<br />
							{DescriptionArt.BeachSeriesII.location}
							<br />
							{DescriptionArt.BeachSeriesII.style}
							<br />
							{DescriptionArt.BeachSeriesII.size}
							<br />
							{DescriptionArt.BeachSeriesII.status}
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='flex-sm-row-reverse'
					justifyContent='justify-content-sm-end'
					texto='x'
					imagenProp={cuadros.BlackLane1}
					description={
						<div>
							{DescriptionArt.BlackLaneSeriesI.title}
							<br />
							{DescriptionArt.BlackLaneSeriesI.location}
							<br />
							{DescriptionArt.BlackLaneSeriesI.style}
							<br />
							{DescriptionArt.BlackLaneSeriesI.size}
							<br />
							{DescriptionArt.BlackLaneSeriesI.status}
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='text-start'
					texto='x'
					imagenProp={cuadros.BlackLan2}
					description={
						<div>
							{DescriptionArt.BlackLaneSeriesII.title}
							<br />
							{DescriptionArt.BlackLaneSeriesII.location}
							<br />
							{DescriptionArt.BlackLaneSeriesII.style}
							<br />
							{DescriptionArt.BlackLaneSeriesII.size}
							<br />
							{DescriptionArt.BlackLaneSeriesII.status}
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='flex-sm-row-reverse'
					justifyContent='justify-content-sm-end'
					texto='x'
					imagenProp={cuadros.Tenerife}
					description={
						<div>
							{DescriptionArt.TenerifeSea.title}
							<br />
							{DescriptionArt.TenerifeSea.location}
							<br />
							{DescriptionArt.TenerifeSea.style}
							<br />
							{DescriptionArt.TenerifeSea.size}
							<br />
							{DescriptionArt.TenerifeSea.status}
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='text-start'
					texto='x'
					imagenProp={cuadros.Sandstrom}
					description={
						<div>
							{DescriptionArt.Sandstrom.title}
							<br />
							{DescriptionArt.Sandstrom.location}
							<br />
							{DescriptionArt.Sandstrom.style}
							<br />
							{DescriptionArt.Sandstrom.size}
							<br />
							{DescriptionArt.Sandstrom.status}
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='flex-sm-row-reverse'
					justifyContent='justify-content-sm-end'
					texto='x'
					imagenProp={cuadros.Sky1}
					description={
						<div>
							{DescriptionArt.AshSkySeriesI.title}
							<br />
							{DescriptionArt.AshSkySeriesI.location}
							<br />
							{DescriptionArt.AshSkySeriesI.style}
							<br />
							{DescriptionArt.AshSkySeriesI.size}
							<br />
							{DescriptionArt.AshSkySeriesI.status}
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='text-start'
					texto='x'
					imagenProp={cuadros.Sky2}
					description={
						<div>
							{DescriptionArt.AshSkySeriesII.title}
							<br />
							{DescriptionArt.AshSkySeriesII.location}
							<br />
							{DescriptionArt.AshSkySeriesII.style}
							<br />
							{DescriptionArt.AshSkySeriesII.size}
							<br />
							{DescriptionArt.AshSkySeriesII.status}
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='flex-sm-row-reverse'
					justifyContent='justify-content-sm-end'
					texto='x'
					imagenProp={cuadros.Laugh}
					description={
						<div>
							{DescriptionArt.Laugh.title}
							<br />
							{DescriptionArt.Laugh.location}
							<br />
							{DescriptionArt.Laugh.style}
							<br />
							{DescriptionArt.Laugh.size}
							<br />
							{DescriptionArt.Laugh.status}
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='text-start'
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
					flexRow='flex-sm-row-reverse'
					justifyContent='justify-content-sm-end'
					texto='x'
					imagenProp={cuadros.Cloudy}
					description={
						<div>
							{DescriptionArt.CloudySunset.title}
							<br />
							{DescriptionArt.CloudySunset.location}
							<br />
							{DescriptionArt.CloudySunset.style}
							<br />
							{DescriptionArt.CloudySunset.size}
							<br />
							{DescriptionArt.CloudySunset.status}
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='text-start'
					texto='x'
					imagenProp={cuadros.Gale}
					description={
						<div>
							{DescriptionArt.Gale.title}
							<br />
							{DescriptionArt.Gale.location}
							<br />
							{DescriptionArt.Gale.style}
							<br />
							{DescriptionArt.Gale.size}
							<br />
							{DescriptionArt.Gale.status}
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='flex-sm-row-reverse'
					justifyContent='justify-content-sm-end'
					texto='x'
					imagenProp={cuadros.Calm}
					description={
						<div>
							{DescriptionArt.Calm.title}
							<br />
							{DescriptionArt.Calm.location}
							<br />
							{DescriptionArt.Calm.style}
							<br />
							{DescriptionArt.Calm.size}
							<br />
							{DescriptionArt.Calm.status}
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='text-start'
					texto='x'
					imagenProp={cuadros.Underworld}
					description={
						<div>
							{DescriptionArt.Underworld.title}
							<br />
							{DescriptionArt.Underworld.location}
							<br />
							{DescriptionArt.Underworld.style}
							<br />
							{DescriptionArt.Underworld.size}
							<br />
							{DescriptionArt.Underworld.status}
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='flex-sm-row-reverse'
					justifyContent='justify-content-sm-end'
					texto='x'
					imagenProp={cuadros.Vision}
					description={
						<div>
							{DescriptionArt.Vision.title}
							<br />
							{DescriptionArt.Vision.location}
							<br />
							{DescriptionArt.Vision.style}
							<br />
							{DescriptionArt.Vision.size}
							<br />
							{DescriptionArt.Vision.status}
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='text-start'
					texto='x'
					imagenProp={cuadros.Parrots}
					description={
						<div>
							{DescriptionArt.Parrots.title}
							<br />
							{DescriptionArt.Parrots.location}
							<br />
							{DescriptionArt.Parrots.style}
							<br />
							{DescriptionArt.Parrots.size}
							<br />
							{DescriptionArt.Parrots.status}
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='flex-sm-row-reverse'
					justifyContent='justify-content-sm-end'
					texto='x'
					imagenProp={cuadros.Palette}
					description={
						<div>
							{DescriptionArt.Palette.title}
							<br />
							{DescriptionArt.Palette.location}
							<br />
							{DescriptionArt.Palette.style}
							<br />
							{DescriptionArt.Palette.size}
							<br />
							{DescriptionArt.Palette.status}
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
					justifyContent='justify-content-sm-end'
					texto='x'
					imagenProp={cuadros.Cyan1}
					description={
						<div>
							{DescriptionArt.CyanSeriesI.title}
							<br />
							{DescriptionArt.CyanSeriesI.location}
							<br />
							{DescriptionArt.CyanSeriesI.style}
							<br />
							{DescriptionArt.CyanSeriesI.size}
							<br />
							{DescriptionArt.CyanSeriesI.status}
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='text-start'
					texto='x'
					imagenProp={cuadros.Cyan2}
					description={
						<div>
							{DescriptionArt.CyanSeriesII.title}
							<br />
							{DescriptionArt.CyanSeriesII.location}
							<br />
							{DescriptionArt.CyanSeriesII.style}
							<br />
							{DescriptionArt.CyanSeriesII.size}
							<br />
							{DescriptionArt.CyanSeriesII.status}
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='flex-sm-row-reverse'
					justifyContent='justify-content-sm-end'
					texto='x'
					imagenProp={cuadros.Colors}
					description={
						<div>
							{DescriptionArt.Colors.title}
							<br />
							{DescriptionArt.Colors.location}
							<br />
							{DescriptionArt.Colors.style}
							<br />
							{DescriptionArt.Colors.size}
							<br />
							{DescriptionArt.Colors.status}
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='text-start'
					texto='x'
					imagenProp={cuadros.Frida}
					description={
						<div>
							{DescriptionArt.Frida.title}
							<br />
							{DescriptionArt.Frida.location}
							<br />
							{DescriptionArt.Frida.style}
							<br />
							{DescriptionArt.Frida.size}
							<br />
							{DescriptionArt.Frida.status}
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
				<DescriptionAndImage
					flexRow='flex-sm-row-reverse'
					justifyContent='justify-content-sm-end'
					texto='x'
					imagenProp={cuadros.Birds}
					description={
						<div>
							{DescriptionArt.Birds.title}
							<br />
							{DescriptionArt.Birds.location}
							<br />
							{DescriptionArt.Birds.style}
							<br />
							{DescriptionArt.Birds.size}
							<br />
							{DescriptionArt.Birds.status}
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='text-start'
					texto='x'
					imagenProp={cuadros.Souls}
					description={
						<div>
							{DescriptionArt.Souls.title}
							<br />
							{DescriptionArt.Souls.location}
							<br />
							{DescriptionArt.Souls.style}
							<br />
							{DescriptionArt.Souls.size}
							<br />
							{DescriptionArt.Souls.status}
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='flex-sm-row-reverse'
					justifyContent='justify-content-sm-end'
					texto='x'
					imagenProp={cuadros.Rythm}
					description={
						<div>
							{DescriptionArt.Rhythm.title}
							<br />
							{DescriptionArt.Rhythm.location}
							<br />
							{DescriptionArt.Rhythm.style}
							<br />
							{DescriptionArt.Rhythm.size}
							<br />
							{DescriptionArt.Rhythm.status}
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='text-start'
					texto='x'
					imagenProp={cuadros.Moss}
					description={
						<div>
							{DescriptionArt.Moss.title}
							<br />
							{DescriptionArt.Moss.location}
							<br />
							{DescriptionArt.Moss.style}
							<br />
							{DescriptionArt.Moss.size}
							<br />
							{DescriptionArt.Moss.status}
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='flex-sm-row-reverse'
					justifyContent='justify-content-sm-end'
					texto='x'
					imagenProp={cuadros.Mosaic}
					description={
						<div>
							{DescriptionArt.Mosaic.title}
							<br />
							{DescriptionArt.Mosaiclocation}
							<br />
							{DescriptionArt.Mosaic.style}
							<br />
							{DescriptionArt.Mosaic.size}
							<br />
							{DescriptionArt.Mosaic.status}
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='text-start'
					texto='x'
					imagenProp={cuadros.Hole}
					description={
						<div>
							{DescriptionArt.Hole.title}
							<br />
							{DescriptionArt.Hole.location}
							<br />
							{DescriptionArt.Hole.style}
							<br />
							{DescriptionArt.Hole.size}
							<br />
							{DescriptionArt.Hole.status}
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='flex-sm-row-reverse'
					justifyContent='justify-content-sm-end'
					texto='x'
					imagenProp={cuadros.Beat}
					description={
						<div>
							{DescriptionArt.Beat.title}
							<br />
							{DescriptionArt.Beat.location}
							<br />
							{DescriptionArt.Beat.style}
							<br />
							{DescriptionArt.Beat.size}
							<br />
							{DescriptionArt.Beat.status}
						</div>
					}
				/>
			</Container>
			<Footer />
		</div>
	);
}
