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
				flexRow='text-start'
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
			<DescriptionAndImage
				flexRow='flex-sm-row-reverse'
				justifyContent='justify-content-sm-end'
				texto='x'
				imagenProp={cuadros.Fun}
				description={
					<div>
						{description.Fun.title}
						<br />
						{description.Fun.location}
						<br />
						{description.Fun.style}
						<br />
						{description.Fun.size}
						<br />
						{description.Fun.status}
					</div>
				}
			/>
			<DescriptionAndImage
				flexRow='text-start'
				texto='x'
				imagenProp={cuadros.Stripping}
				description={
					<div>
						{description.Stripping.title}
						<br />
						{description.Stripping.location}
						<br />
						{description.Stripping.style}
						<br />
						{description.Stripping.size}
						<br />
						{description.Stripping.status}
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
						{description.Naif.title}
						<br />
						{description.Naif.location}
						<br />
						{description.Naif.style}
						<br />
						{description.Naif.size}
						<br />
						{description.Fun.status}
					</div>
				}
			/>
			<DescriptionAndImage
				flexRow='text-start'
				texto='x'
				imagenProp={cuadros.Youth}
				description={
					<div>
						{description.Youth.title}
						<br />
						{description.Youth.location}
						<br />
						{description.Youth.style}
						<br />
						{description.Youth.size}
						<br />
						{description.Youth.status}
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
						{description.NYC.title}
						<br />
						{description.NYC.location}
						<br />
						{description.NYC.style}
						<br />
						{description.NYC.size}
						<br />
						{description.NYC.status}
					</div>
				}
			/>
			<DescriptionAndImage
				flexRow='text-start'
				texto='x'
				imagenProp={cuadros.Pantuss}
				description={
					<div>
						{description.Pantuss.title}
						<br />
						{description.Pantuss.location}
						<br />
						{description.Pantuss.style}
						<br />
						{description.Pantuss.size}
						<br />
						{description.Pantuss.status}
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
						{description.Drums.title}
						<br />
						{description.Drums.location}
						<br />
						{description.Drums.style}
						<br />
						{description.Drums.size}
						<br />
						{description.Drums.status}
					</div>
				}
			/>
			<DescriptionAndImage
				flexRow='text-start'
				texto='x'
				imagenProp={cuadros.Chaos}
				description={
					<div>
						{description.Chaos.title}
						<br />
						{description.Chaos.location}
						<br />
						{description.Chaos.style}
						<br />
						{description.Chaos.size}
						<br />
						{description.Chaos.status}
					</div>
				}
			/>
			<DescriptionAndImage
				flexRow='flex-sm-row-reverse'
				justifyContent='justify-content-sm-end'
				texto='x'
				imagenProp={cuadros.Duntless}
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
				flexRow='text-start'
				texto='x'
				imagenProp={cuadros.Makeup}
				description={
					<div>
						{description.MakeupCase.title}
						<br />
						{description.MakeupCase.location}
						<br />
						{description.MakeupCase.style}
						<br />
						{description.MakeupCase.size}
						<br />
						{description.MakeupCase.status}
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
				imagenProp={cuadros.Explosion1}
				description={
					<div>
						{description.ExplosionSeriesI.title}
						<br />
						{description.ExplosionSeriesI.location}
						<br />
						{description.ExplosionSeriesI.style}
						<br />
						{description.ExplosionSeriesI.size}
						<br />
						{description.ExplosionSeriesI.status}
					</div>
				}
			/>
			<DescriptionAndImage
				flexRow='text-start'
				texto='x'
				imagenProp={cuadros.Explosion2}
				description={
					<div>
						{description.ExplosionSeriesII.title}
						<br />
						{description.ExplosionSeriesII.location}
						<br />
						{description.ExplosionSeriesII.style}
						<br />
						{description.ExplosionSeriesII.size}
						<br />
						{description.ExplosionSeriesII.status}
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
						{description.Twilight.title}
						<br />
						{description.Twilight.location}
						<br />
						{description.Twilight.style}
						<br />
						{description.Twilight.size}
						<br />
						{description.Twilight.status}
					</div>
				}
			/>
			<DescriptionAndImage
				flexRow='text-start'
				texto='x'
				imagenProp={cuadros.Sunset}
				description={
					<div>
						{description.Sunset.title}
						<br />
						{description.Sunset.location}
						<br />
						{description.Sunset.style}
						<br />
						{description.Sunset.size}
						<br />
						{description.Sunset.status}
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
						{description.Beach1.title}
						<br />
						{description.Beach1.location}
						<br />
						{description.Beach1.style}
						<br />
						{description.Beach1.size}
						<br />
						{description.Beach1.status}
					</div>
				}
			/>
			<DescriptionAndImage
				flexRow='text-start'
				texto='x'
				imagenProp={cuadros.Beach2}
				description={
					<div>
						{description.Beach2.title}
						<br />
						{description.Beach2.location}
						<br />
						{description.Beach2.style}
						<br />
						{description.Beach2.size}
						<br />
						{description.Beach2.status}
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
						{description.BlackLane1.title}
						<br />
						{description.BlackLane1.location}
						<br />
						{description.BlackLane1.style}
						<br />
						{description.BlackLane1.size}
						<br />
						{description.BlackLane1.status}
					</div>
				}
			/>
			<DescriptionAndImage
				flexRow='text-start'
				texto='x'
				imagenProp={cuadros.BlackLan2}
				description={
					<div>
						{description.BlackLaneSeriesII.title}
						<br />
						{description.BlackLaneSeriesII.location}
						<br />
						{description.BlackLaneSeriesII.style}
						<br />
						{description.BlackLaneSeriesII.size}
						<br />
						{description.BlackLaneSeriesII.status}
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
						{description.TenerifeSea.title}
						<br />
						{description.TenerifeSea.location}
						<br />
						{description.TenerifeSea.style}
						<br />
						{description.TenerifeSea.size}
						<br />
						{description.TenerifeSea.status}
					</div>
				}
			/>
			<DescriptionAndImage
				flexRow='text-start'
				texto='x'
				imagenProp={cuadros.Sandstrom}
				description={
					<div>
						{description.Sandstrom.title}
						<br />
						{description.Sandstrom.location}
						<br />
						{description.Sandstrom.style}
						<br />
						{description.Sandstrom.size}
						<br />
						{description.Sandstrom.status}
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
						{description.AshSkySeriesI.title}
						<br />
						{description.AshSkySeriesI.location}
						<br />
						{description.AshSkySeriesI.style}
						<br />
						{description.AshSkySeriesI.size}
						<br />
						{description.AshSkySeriesI.status}
					</div>
				}
			/>
			<DescriptionAndImage
				flexRow='text-start'
				texto='x'
				imagenProp={cuadros.Sky2}
				description={
					<div>
						{description.AshSkySeriesII.title}
						<br />
						{description.AshSkySeriesII.location}
						<br />
						{description.AshSkySeriesII.style}
						<br />
						{description.AshSkySeriesII.size}
						<br />
						{description.AshSkySeriesII.status}
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
						{description.Laugh.title}
						<br />
						{description.Laugh.location}
						<br />
						{description.Laugh.style}
						<br />
						{description.Laugh.size}
						<br />
						{description.Laugh.status}
					</div>
				}
			/>
			<DescriptionAndImage
				flexRow='text-start'
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
				flexRow='flex-sm-row-reverse'
				justifyContent='justify-content-sm-end'
				texto='x'
				imagenProp={cuadros.Cloudy}
				description={
					<div>
						{description.Cloudy.title}
						<br />
						{description.Cloudy.location}
						<br />
						{description.Cloudy.style}
						<br />
						{description.Cloudy.size}
						<br />
						{description.Cloudy.status}
					</div>
				}
			/>
			<DescriptionAndImage
				flexRow='text-start'
				texto='x'
				imagenProp={cuadros.Gale}
				description={
					<div>
						{description.Gale.title}
						<br />
						{description.Gale.location}
						<br />
						{description.Gale.style}
						<br />
						{description.Gale.size}
						<br />
						{description.Gale.status}
					</div>
				}
			/>
			<Footer />
		</div>
	);
}
