import Navegation from '../Layouts/Navegation';
import Footer from '../Layouts/Footer';
import DescriptionAndImage from '../Layouts/DescriptionAndImage';

import { cuadros } from '../Layouts/ImageImporter';
import { DescriptionArt } from '../Layouts/TextImporter';
import style from '../styles/scss/cuadros.module.scss';
import { Container } from 'react-bootstrap';

export default function Portfolio() {
	return (
		<Container fluid className='base'>
			<Navegation />
			<div className={style.main}>
				<DescriptionAndImage
					flexRow='text-start'
					texto='x'
					imagenProp={cuadros.RiverBank}
					description={
						<div>
							<p className={style.name}>{DescriptionArt.RiverBank.title}</p>
							<div className={style.description}>
								{DescriptionArt.RiverBank.location}
								<br />
								{DescriptionArt.RiverBank.style}
								<br />
								{DescriptionArt.RiverBank.size}
							</div>
							<br />
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
							<p className={style.name}> {DescriptionArt.Violet.title}</p>
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
					flexRow='text-start'
					texto='x'
					imagenProp={cuadros.Mousteire}
					description={
						<div>
							<p className={style.name}>{DescriptionArt.Mousteire.title}</p>
							<div className={style.description}>
								{DescriptionArt.Mousteire.location}
								<br />
								{DescriptionArt.Mousteire.style}
								<br />
								{DescriptionArt.Mousteire.size}
							</div>
							<br />
							<p className={style.status}>{DescriptionArt.Mousteire.status}</p>
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='flex-sm-row-reverse'
					justifyContent='text-sm-end text-start'
					texto='x'
					imagenProp={cuadros.Curl}
					description={
						<div>
							<p className={style.name}>{DescriptionArt.Curl.title}</p>
							<div className={style.description}>
								{DescriptionArt.Curl.location}
								<br />
								{DescriptionArt.Curl.style}
								<br />
								{DescriptionArt.Curl.size}
							</div>
							<br />
							<p className={style.status}>{DescriptionArt.Curl.status}</p>
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='text-start'
					texto='x'
					imagenProp={cuadros.Gold}
					description={
						<div>
							<p className={style.name}>{DescriptionArt.Gold.title}</p>
							<div className={style.description}>
								{DescriptionArt.Gold.location}
								<br />
								{DescriptionArt.Gold.style}
								<br />
								{DescriptionArt.Gold.size}
								<br />
							</div>
							<p className={style.status}>{DescriptionArt.Gold.status}</p>
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='flex-sm-row-reverse'
					justifyContent='text-sm-end text-start'
					texto='x'
					imagenProp={cuadros.Fun}
					description={
						<div>
							<p className={style.name}>{DescriptionArt.Fun.title}</p>
							<div className={style.description}>
								{DescriptionArt.Fun.location}
								<br />
								{DescriptionArt.Fun.style}
								<br />
								{DescriptionArt.Fun.size}
								<br />
							</div>
							<p className={style.status}>{DescriptionArt.Fun.status}</p>
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='text-start'
					texto='x'
					imagenProp={cuadros.Stripping}
					description={
						<div>
							<p className={style.name}>{DescriptionArt.Stripping.title}</p>
							<div className={style.description}>
								{DescriptionArt.Stripping.location}
								<br />
								{DescriptionArt.Stripping.style}
								<br />
								{DescriptionArt.Stripping.size}
								<br />
							</div>
							<p className={style.status}>{DescriptionArt.Stripping.status}</p>
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='flex-sm-row-reverse'
					justifyContent='text-sm-end text-start'
					texto='x'
					imagenProp={cuadros.Naif}
					description={
						<div>
							<p className={style.name}>{DescriptionArt.Naif.title}</p>
							<div className={style.description}>
								{DescriptionArt.Naif.location}
								<br />
								{DescriptionArt.Naif.style}
								<br />
								{DescriptionArt.Naif.size}
								<br />
							</div>
							<p className={style.status}>{DescriptionArt.Naif.status}</p>
						</div>
					}
				/>

				<DescriptionAndImage
					flexRow='text-start'
					texto='x'
					imagenProp={cuadros.Dauntless}
					description={
						<div>
							<p className={style.name}>{DescriptionArt.Dauntless.title}</p>
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
					imagenProp={cuadros.Makeup}
					description={
						<div>
							<p className={style.name}>{DescriptionArt.MakeupCase.title}</p>
							<div className={style.description}>
								{DescriptionArt.MakeupCase.location}
								<br />
								{DescriptionArt.MakeupCase.style}
								<br />
								{DescriptionArt.MakeupCase.size}
								<br />
							</div>
							<p className={style.status}>{DescriptionArt.MakeupCase.status}</p>
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='text-start'
					texto='x'
					imagenProp={cuadros.Orchid}
					description={
						<div>
							<p className={style.name}>{DescriptionArt.Orchid.title}</p>
							<div className={style.description}>
								{DescriptionArt.Orchid.location}
								<br />
								{DescriptionArt.Orchid.style}
								<br />
								{DescriptionArt.Orchid.size}
								<br />
							</div>
							<p className={style.status}> {DescriptionArt.Orchid.status}</p>
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='flex-sm-row-reverse'
					justifyContent='text-sm-end text-start'
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
								<br />
							</div>
							<p className={style.status}> </p>
							{DescriptionArt.LetsFly.status}
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='text-start'
					texto='x'
					imagenProp={cuadros.Explosion1}
					description={
						<div>
							<p className={style.name}>
								{DescriptionArt.ExplosionSeriesI.title}
							</p>
							<div className={style.description}>
								{DescriptionArt.ExplosionSeriesI.location}
								<br />
								{DescriptionArt.ExplosionSeriesI.style}
								<br />
								{DescriptionArt.ExplosionSeriesI.size}
								<br />
							</div>
							<p className={style.status}>
								{DescriptionArt.ExplosionSeriesI.status}
							</p>
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='flex-sm-row-reverse'
					justifyContent='text-sm-end text-start'
					texto='x'
					imagenProp={cuadros.Explosion2}
					description={
						<div>
							<p className={style.name}>
								{DescriptionArt.ExplosionSeriesII.title}
							</p>
							<div className={style.description}>
								{DescriptionArt.ExplosionSeriesII.location}
								<br />
								{DescriptionArt.ExplosionSeriesII.style}
								<br />
								{DescriptionArt.ExplosionSeriesII.size}
								<br />
							</div>
							<p className={style.status}>
								{DescriptionArt.ExplosionSeriesII.status}
							</p>
						</div>
					}
				/>
				<DescriptionAndImage
					justifyContent='text-start'
					texto='x'
					imagenProp={cuadros.Twilight}
					description={
						<div>
							<p className={style.name}>{DescriptionArt.Twilight.title}</p>
							<div className={style.description}>
								{DescriptionArt.Twilight.location}
								<br />
								{DescriptionArt.Twilight.style}
								<br />
								{DescriptionArt.Twilight.size}
								<br />
							</div>
							<p className={style.status}>{DescriptionArt.Twilight.status}</p>
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='flex-sm-row-reverse'
					justifyContent='text-sm-end text-start'
					texto='x'
					imagenProp={cuadros.Sunset}
					description={
						<div>
							<p className={style.name}>{DescriptionArt.Sunset.title}</p>
							<div className={style.description}>
								{DescriptionArt.Sunset.location}
								<br />
								{DescriptionArt.Sunset.style}
								<br />
								{DescriptionArt.Sunset.size}
								<br />
							</div>
							<p className={style.status}>{DescriptionArt.Sunset.status}</p>
						</div>
					}
				/>
				<DescriptionAndImage
					justifyContent='text-start'
					texto='x'
					imagenProp={cuadros.Beach1}
					description={
						<div>
							<p className={style.name}>{DescriptionArt.BeachSeriesI.title}</p>
							<div className={style.description}>
								{DescriptionArt.BeachSeriesI.location}
								<br />
								{DescriptionArt.BeachSeriesI.style}
								<br />
								{DescriptionArt.BeachSeriesI.size}
								<br />
							</div>
							<p className={style.status}>
								{DescriptionArt.BeachSeriesI.status}
							</p>
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='flex-sm-row-reverse'
					justifyContent='text-sm-end text-start'
					texto='x'
					imagenProp={cuadros.Beach2}
					description={
						<div>
							<p className={style.name}>{DescriptionArt.BeachSeriesII.title}</p>
							<div className={style.description}>
								{DescriptionArt.BeachSeriesII.location}
								<br />
								{DescriptionArt.BeachSeriesII.style}
								<br />
								{DescriptionArt.BeachSeriesII.size}
								<br />
							</div>
							<p className={style.status}>
								{DescriptionArt.BeachSeriesII.status}
							</p>
						</div>
					}
				/>
				<DescriptionAndImage
					justifyContent='text-start'
					texto='x'
					imagenProp={cuadros.BlackLane1}
					description={
						<div>
							<p className={style.name}>
								{DescriptionArt.BlackLaneSeriesI.title}
							</p>
							<div className={style.description}>
								{DescriptionArt.BlackLaneSeriesI.location}
								<br />
								{DescriptionArt.BlackLaneSeriesI.style}
								<br />
								{DescriptionArt.BlackLaneSeriesI.size}
								<br />
							</div>
							<p className={style.status}>
								{DescriptionArt.BlackLaneSeriesI.status}
							</p>
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='flex-sm-row-reverse'
					justifyContent='text-sm-end text-start'
					texto='x'
					imagenProp={cuadros.BlackLan2}
					description={
						<div>
							<p className={style.name}>
								{DescriptionArt.BlackLaneSeriesII.title}
							</p>
							<div className={style.description}>
								{DescriptionArt.BlackLaneSeriesII.location}
								<br />
								{DescriptionArt.BlackLaneSeriesII.style}
								<br />
								{DescriptionArt.BlackLaneSeriesII.size}
								<br />
							</div>
							<p className={style.status}>
								{DescriptionArt.BlackLaneSeriesII.status}
							</p>
						</div>
					}
				/>
				<DescriptionAndImage
					justifyContent='text-start'
					texto='x'
					imagenProp={cuadros.Tenerife}
					description={
						<div>
							<p className={style.name}>{DescriptionArt.TenerifeSea.title}</p>
							<div className={style.description}>
								{DescriptionArt.TenerifeSea.location}
								<br />
								{DescriptionArt.TenerifeSea.style}
								<br />
								{DescriptionArt.TenerifeSea.size}
								<br />
							</div>
							<p className={style.status}>
								{DescriptionArt.TenerifeSea.status}
							</p>
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='flex-sm-row-reverse'
					justifyContent='text-sm-end text-start'
					texto='x'
					imagenProp={cuadros.Sandstrom}
					description={
						<div>
							<p className={style.name}>{DescriptionArt.Sandstrom.title}</p>
							<div className={style.description}>
								{DescriptionArt.Sandstrom.location}
								<br />
								{DescriptionArt.Sandstrom.style}
								<br />
								{DescriptionArt.Sandstrom.size}
								<br />
							</div>
							<p className={style.status}>{DescriptionArt.Sandstrom.status}</p>
						</div>
					}
				/>
				<DescriptionAndImage
					justifyContent='text-start'
					texto='x'
					imagenProp={cuadros.Sky1}
					description={
						<div>
							<p className={style.name}>{DescriptionArt.AshSkySeriesI.title}</p>
							<div className={style.description}>
								{DescriptionArt.AshSkySeriesI.location}
								<br />
								{DescriptionArt.AshSkySeriesI.style}
								<br />
								{DescriptionArt.AshSkySeriesI.size}
								<br />
							</div>
							<p className={style.status}>
								{DescriptionArt.AshSkySeriesI.status}
							</p>
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='flex-sm-row-reverse'
					justifyContent='text-sm-end text-start'
					texto='x'
					imagenProp={cuadros.Sky2}
					description={
						<div>
							<p className={style.name}>
								{DescriptionArt.AshSkySeriesII.title}
							</p>
							<div className={style.description}>
								{DescriptionArt.AshSkySeriesII.location}
								<br />
								{DescriptionArt.AshSkySeriesII.style}
								<br />
								{DescriptionArt.AshSkySeriesII.size}
								<br />
							</div>
							<p className={style.status}>
								{DescriptionArt.AshSkySeriesII.status}
							</p>
						</div>
					}
				/>

				<DescriptionAndImage
					flexRow='text-start'
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
								<br />
							</div>
							<p className={style.status}>{DescriptionArt.Begining.status}</p>
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='flex-sm-row-reverse'
					justifyContent='text-sm-end text-start'
					texto='x'
					imagenProp={cuadros.Cloudy}
					description={
						<div>
							<p className={style.name}>{DescriptionArt.CloudySunset.title}</p>
							<div className={style.description}>
								{DescriptionArt.CloudySunset.location}
								<br />
								{DescriptionArt.CloudySunset.style}
								<br />
								{DescriptionArt.CloudySunset.size}
								<br />
							</div>
							<p className={style.status}>
								{DescriptionArt.CloudySunset.status}
							</p>
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='text-start'
					texto='x'
					imagenProp={cuadros.Gale}
					description={
						<div>
							<p className={style.name}>{DescriptionArt.Gale.title}</p>
							<div className={style.description}>
								{DescriptionArt.Gale.location}
								<br />
								{DescriptionArt.Gale.style}
								<br />
								{DescriptionArt.Gale.size}
								<br />
							</div>
							<p className={style.status}>{DescriptionArt.Gale.status}</p>
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='flex-sm-row-reverse'
					justifyContent='text-sm-end text-start'
					texto='x'
					imagenProp={cuadros.Calm}
					description={
						<div>
							<p className={style.name}>{DescriptionArt.Calm.title}</p>
							<div className={style.description}>
								{DescriptionArt.Calm.location}
								<br />
								{DescriptionArt.Calm.style}
								<br />
								{DescriptionArt.Calm.size}
								<br />
							</div>
							<p className={style.status}> {DescriptionArt.Calm.status}</p>
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='text-start'
					texto='x'
					imagenProp={cuadros.Underworld}
					description={
						<div>
							<p className={style.name}>{DescriptionArt.Underworld.title}</p>
							<div className={style.description}>
								{DescriptionArt.Underworld.location}
								<br />
								{DescriptionArt.Underworld.style}
								<br />
								{DescriptionArt.Underworld.size}
								<br />
							</div>
							<p className={style.status}>{DescriptionArt.Underworld.status}</p>
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='flex-sm-row-reverse'
					justifyContent='text-sm-end text-start'
					texto='x'
					imagenProp={cuadros.Vision}
					description={
						<div>
							<p className={style.name}>{DescriptionArt.Vision.title}</p>
							<div className={style.description}>
								{DescriptionArt.Vision.location}
								<br />
								{DescriptionArt.Vision.style}
								<br />
								{DescriptionArt.Vision.size}
								<br />
							</div>
							<p className={style.status}>{DescriptionArt.Vision.status}</p>
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='text-start'
					texto='x'
					imagenProp={cuadros.Parrots}
					description={
						<div>
							<p className={style.name}>{DescriptionArt.Parrots.title}</p>
							<div className={style.description}>
								{DescriptionArt.Parrots.location}
								<br />
								{DescriptionArt.Parrots.style}
								<br />
								{DescriptionArt.Parrots.size}
								<br />
							</div>
							<p className={style.status}>{DescriptionArt.Parrots.status}</p>
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='flex-sm-row-reverse'
					justifyContent='text-sm-end text-start'
					texto='x'
					imagenProp={cuadros.Palette}
					description={
						<div>
							<p className={style.name}>{DescriptionArt.Palette.title}</p>
							<div className={style.description}>
								{DescriptionArt.Palette.location}
								<br />
								{DescriptionArt.Palette.style}
								<br />
								{DescriptionArt.Palette.size}
								<br />
							</div>
							<p className={style.status}>{DescriptionArt.Palette.status}</p>
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='text-start'
					texto='x'
					imagenProp={cuadros.Cement}
					description={
						<div>
							<p className={style.name}>{DescriptionArt.Cement.title}</p>
							<div className={style.description}>
								{DescriptionArt.Cement.location}
								<br />
								{DescriptionArt.Cement.style}
								<br />
								{DescriptionArt.Cement.size}
								<br />
							</div>
							<p className={style.status}>{DescriptionArt.Cement.status}</p>
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='flex-sm-row-reverse'
					justifyContent='text-sm-end text-start'
					texto='x'
					imagenProp={cuadros.Cyan1}
					description={
						<div>
							<p className={style.name}>{DescriptionArt.CyanSeriesI.title}</p>
							<div className={style.description}>
								{DescriptionArt.CyanSeriesI.location}
								<br />
								{DescriptionArt.CyanSeriesI.style}
								<br />
								{DescriptionArt.CyanSeriesI.size}
								<br />
							</div>
							<p className={style.status}>
								{DescriptionArt.CyanSeriesI.status}
							</p>
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='text-start'
					texto='x'
					imagenProp={cuadros.Cyan2}
					description={
						<div>
							<p className={style.name}>{DescriptionArt.CyanSeriesII.title}</p>
							<div className={style.description}>
								{DescriptionArt.CyanSeriesII.location}
								<br />
								{DescriptionArt.CyanSeriesII.style}
								<br />
								{DescriptionArt.CyanSeriesII.size}
								<br />
							</div>
							<p className={style.status}>
								{DescriptionArt.CyanSeriesII.status}
							</p>
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='flex-sm-row-reverse'
					justifyContent='text-sm-end text-start'
					texto='x'
					imagenProp={cuadros.Colors}
					description={
						<div>
							<p className={style.name}>{DescriptionArt.Colors.title}</p>
							<div className={style.description}>
								{DescriptionArt.Colors.location}
								<br />
								{DescriptionArt.Colors.style}
								<br />
								{DescriptionArt.Colors.size}
								<br />
							</div>
							<p className={style.status}>{DescriptionArt.Colors.status}</p>
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='text-start'
					texto='x'
					imagenProp={cuadros.Frida}
					description={
						<div>
							<p className={style.name}>{DescriptionArt.Frida.title}</p>
							<div className={style.description}>
								{DescriptionArt.Frida.location}
								<br />
								{DescriptionArt.Frida.style}
								<br />
								{DescriptionArt.Frida.size}
								<br />
							</div>
							<p className={style.status}>{DescriptionArt.Frida.status}</p>
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
								<br />
							</div>
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
				<DescriptionAndImage
					flexRow='flex-sm-row-reverse'
					justifyContent='text-sm-end text-start'
					texto='x'
					imagenProp={cuadros.Birds}
					description={
						<div>
							<p className={style.name}> {DescriptionArt.Birds.title}</p>
							<div className={style.description}>
								{DescriptionArt.Birds.location}
								<br />
								{DescriptionArt.Birds.style}
								<br />
								{DescriptionArt.Birds.size}
								<br />
							</div>
							<p className={style.status}>{DescriptionArt.Birds.status}</p>
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='text-start'
					texto='x'
					imagenProp={cuadros.Souls}
					description={
						<div>
							<p className={style.name}>{DescriptionArt.Souls.title}</p>
							<div className={style.description}>
								{DescriptionArt.Souls.location}
								<br />
								{DescriptionArt.Souls.style}
								<br />
								{DescriptionArt.Souls.size}
								<br />
							</div>
							<p className={style.status}>{DescriptionArt.Souls.status}</p>
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='flex-sm-row-reverse'
					justifyContent='text-sm-end text-start'
					texto='x'
					imagenProp={cuadros.Rythm}
					description={
						<div>
							<p className={style.name}>{DescriptionArt.Rhythm.title}</p>
							<div className={style.description}>
								{DescriptionArt.Rhythm.location}
								<br />
								{DescriptionArt.Rhythm.style}
								<br />
								{DescriptionArt.Rhythm.size}
								<br />
							</div>
							<p className={style.status}>{DescriptionArt.Rhythm.status}</p>
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='text-start'
					texto='x'
					imagenProp={cuadros.Moss}
					description={
						<div>
							<p className={style.name}>{DescriptionArt.Moss.title}</p>
							<div className={style.description}>
								{DescriptionArt.Moss.location}
								<br />
								{DescriptionArt.Moss.style}
								<br />
								{DescriptionArt.Moss.size}
								<br />
							</div>
							<p className={style.status}>{DescriptionArt.Moss.status}</p>
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='flex-sm-row-reverse'
					justifyContent='text-sm-end text-start'
					texto='x'
					imagenProp={cuadros.Mosaic}
					description={
						<div>
							<p className={style.name}>{DescriptionArt.Mosaic.title}</p>
							<div className={style.description}>
								{DescriptionArt.Mosaic.location}
								<br />
								{DescriptionArt.Mosaic.style}
								<br />
								{DescriptionArt.Mosaic.size}
								<br />
							</div>
							<p className={style.status}>{DescriptionArt.Mosaic.status}</p>
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='text-start'
					texto='x'
					imagenProp={cuadros.Hole}
					description={
						<div>
							<p className={style.name}>{DescriptionArt.Hole.title}</p>
							<div className={style.description}>
								{DescriptionArt.Hole.location}
								<br />
								{DescriptionArt.Hole.style}
								<br />
								{DescriptionArt.Hole.size}
								<br />
							</div>
							<p className={style.status}> {DescriptionArt.Hole.status}</p>
						</div>
					}
				/>

				<DescriptionAndImage
					flexRow='flex-sm-row-reverse'
					justifyContent='text-sm-end text-start'
					texto='x'
					imagenProp={cuadros.Hope}
					description={
						<div>
							<p className={style.name}>{DescriptionArt.Hope.title}</p>
							<div className={style.description}>
								{DescriptionArt.Hope.location}
								<br />
								{DescriptionArt.Hope.style}
								<br />
								{DescriptionArt.Hope.size}
								<br />
							</div>
							<p className={style.status}> {DescriptionArt.Hope.status}</p>
						</div>
					}
				/>
				<DescriptionAndImage
					justifyContent='text-start'
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
					flexRow='flex-sm-row-reverse'
					justifyContent='text-sm-end text-start'
					texto='x'
					imagenProp={cuadros.Blue}
					description={
						<div>
							<p className={style.name}>{DescriptionArt.Blue.title}</p>
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
					justifyContent='text-start'
					texto='x'
					imagenProp={cuadros.NoName}
					description={
						<div>
							<p className={style.name}>{DescriptionArt.NoName.title}</p>
							<div className={style.description}>
								{DescriptionArt.NoName.location}
								<br />
								{DescriptionArt.NoName.style}
								<br />
								{DescriptionArt.NoName.size}
								<br />
							</div>
							<p className={style.status}>{DescriptionArt.NoName.status}</p>
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='flex-sm-row-reverse'
					justifyContent='text-sm-end text-start'
					texto='x'
					imagenProp={cuadros.Strokes}
					description={
						<div>
							<p className={style.name}>{DescriptionArt.Strokes.title}</p>
							<div className={style.description}>
								{DescriptionArt.Strokes.location}
								<br />
								{DescriptionArt.Strokes.style}
								<br />
								{DescriptionArt.Strokes.size}
								<br />
							</div>
							<p className={style.status}>{DescriptionArt.Strokes.status}</p>
						</div>
					}
				/>
				<DescriptionAndImage
					justifyContent='text-start'
					texto='x'
					imagenProp={cuadros.PurpleExplosion}
					description={
						<div>
							<p className={style.name}>
								{DescriptionArt.PurpleExplotion.title}
							</p>
							<div className={style.description}>
								{DescriptionArt.PurpleExplotion.location}
								<br />
								{DescriptionArt.PurpleExplotion.style}
								<br />
								{DescriptionArt.PurpleExplotion.size}
								<br />
							</div>
							<p className={style.status}>
								{DescriptionArt.PurpleExplotion.status}
							</p>
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='flex-sm-row-reverse'
					justifyContent='text-sm-end text-start'
					texto='x'
					imagenProp={cuadros.Clay}
					description={
						<div>
							<p className={style.name}>{DescriptionArt.Clay.title}</p>
							<div className={style.description}>
								{DescriptionArt.Clay.location}
								<br />
								{DescriptionArt.Clay.style}
								<br />
								{DescriptionArt.Clay.size}
								<br />
							</div>
							<p className={style.status}>{DescriptionArt.Clay.status}</p>
						</div>
					}
				/>
				<DescriptionAndImage
					justifyContent='text-start'
					texto='x'
					imagenProp={cuadros.YouAndMe}
					description={
						<div>
							<p className={style.name}>{DescriptionArt.YouAndMe.title}</p>
							<div className={style.description}>
								{DescriptionArt.YouAndMe.location}
								<br />
								{DescriptionArt.YouAndMe.style}
								<br />
								{DescriptionArt.YouAndMe.size}
								<br />
							</div>
							<p className={style.status}>{DescriptionArt.YouAndMe.status}</p>
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='flex-sm-row-reverse'
					justifyContent='text-sm-end text-start'
					texto='x'
					imagenProp={cuadros.Breeze}
					description={
						<div>
							<p className={style.name}>{DescriptionArt.Breeze.title}</p>
							<div className={style.description}>
								{DescriptionArt.Breeze.location}
								<br />
								{DescriptionArt.Breeze.style}
								<br />
								{DescriptionArt.Breeze.size}
								<br />
							</div>
							<p className={style.status}>{DescriptionArt.Breeze.status}</p>
						</div>
					}
				/>
				<DescriptionAndImage
					justifyContent='text-start'
					texto='x'
					imagenProp={cuadros.PontoII}
					description={
						<div>
							<p className={style.name}>{DescriptionArt.PontoII.title}</p>
							<div className={style.description}>
								{DescriptionArt.PontoII.location}
								<br />
								{DescriptionArt.PontoII.style}
								<br />
								{DescriptionArt.PontoII.size}
								<br />
							</div>
							<p className={style.status}>{DescriptionArt.PontoII.status}</p>
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='flex-sm-row-reverse'
					justifyContent='text-sm-end text-start'
					texto='x'
					imagenProp={cuadros.VainishingPoint}
					description={
						<div>
							<p className={style.name}>
								{DescriptionArt.VainishingPoint.title}
							</p>
							<div className={style.description}>
								{DescriptionArt.VainishingPoint.location}
								<br />
								{DescriptionArt.VainishingPoint.style}
								<br />
								{DescriptionArt.VainishingPoint.size}
								<br />
							</div>
							<p className={style.status}>
								{DescriptionArt.VainishingPoint.status}
							</p>
						</div>
					}
				/>
				<DescriptionAndImage
					justifyContent='text-start'
					texto='x'
					imagenProp={cuadros.DarkRain}
					description={
						<div>
							<p className={style.name}>{DescriptionArt.DarkRain.title}</p>
							<div className={style.description}>
								{DescriptionArt.DarkRain.location}
								<br />
								{DescriptionArt.DarkRain.style}
								<br />
								{DescriptionArt.DarkRain.size}
								<br />
							</div>
							<p className={style.status}>{DescriptionArt.DarkRain.status}</p>
						</div>
					}
				/>
				<DescriptionAndImage
					flexRow='flex-sm-row-reverse'
					justifyContent='text-sm-end text-start'
					texto='x'
					imagenProp={cuadros.Geometric}
					description={
						<div>
							<p className={style.name}>{DescriptionArt.Geometric.title}</p>
							<div className={style.description}>
								{DescriptionArt.Geometric.location}
								<br />
								{DescriptionArt.Geometric.style}
								<br />
								{DescriptionArt.Geometric.size}
								<br />
							</div>
							<p className={style.status}>{DescriptionArt.Geometric.status}</p>
						</div>
					}
				/>
			</div>
			<Footer />
		</Container>
	);
}
