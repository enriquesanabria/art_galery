import Navegation from '../Layouts/Navegation';
import Footer from '../Layouts/Footer';

import RiverBank from '../assets/img/paintings/River_Bank.jpg';
import Violet from '../assets/img/paintings/Violet.jpg';
import Duntless from '../assets/img/paintings/Duntless.jpg';
import Orchid from '../assets/img/paintings/Orchid.jpg';
import LetsFly from '../assets/img/paintings/Lets_fly.jpg';
import Begining from '../assets/img/paintings/Begining.jpg';
import Cement from '../assets/img/paintings/Cement.jpg';
import Aqua from '../assets/img/paintings/Aqua.jpg';
import Shining from '../assets/img/paintings/Shining.jpg';

import DescriptionAndImage from '../Layouts/DescriptionAndImage';

const descriptionRiverBank = (
	<div className='ms-sm-6 my-4 '>
		<h1 className='text-uppercase'>River Bank</h1>
		<p>
			Buenos Aires, 2022
			<br />
			Acrylic on canvas
			<br />
			1.30 x 0.90 mts
			<br />
		</p>
	</div>
);

const descriptionViolet = (
	<div className='ms-sm-6 my-4'>
		<h1 className='text-uppercase'>Violet</h1>
		<p>
			Buenos Aires, 2022
			<br />
			Acrylic on canvas
			<br />
			1.30 x 0.90 mts
			<br />
		</p>
	</div>
);

const descriptionDuntless = (
	<div className='me-sm-6 my-4'>
		<h1 className='text-uppercase '>Dauntless</h1>
		<p>
			Buenos Aires, 2021
			<br />
			Acrylic on canvas
			<br />
			1.40 x 1.40 mts
			<br />
		</p>
	</div>
);

const descriptionOrchid = (
	<div className='ms-sm-6 my-4'>
		<h1 className='text-uppercase '>Orchid</h1>
		<p>
			Buenos Aires, 2021
			<br />
			Acrylic on canvas
			<br />
			1.20 x 1.00 mts
			<br />
		</p>
	</div>
);

const descriptionLetsFly = (
	<div className='me-sm-6 my-4'>
		<h1 className='text-uppercase '>Let's Fly</h1>
		<p>
			Buenos Aires, 2021
			<br />
			Acrylic on canvas,
			<br />
			mixed technique
			<br />
			1.10 x 1.30 mts
			<br />
		</p>
	</div>
);

const descriptionBegining = (
	<div className='col-sm-8 d-flex flex-column justify-content-center'>
		<div className='ms-sm-6 my-4 texto-cuadro'>
			<h1 className='text-uppercase '>Begining</h1>
			<p>
				Buenos Aires, 2021
				<br />
				Acrylic on canvas
				<br />
				1.10 x 1.10 mts
				<br />
			</p>
		</div>
	</div>
);

const descriptionCement = (
	<div className='me-sm-6 my-4 texto-cuadro'>
		<h1 className='text-uppercase '>Cement</h1>
		<p>
			Buenos Aires, 2020
			<br />
			Acrylic on canvas
			<br />
			1.00 x 0.80 mts
			<br />
		</p>
	</div>
);

const descriptionAqua = (
	<div className='ms-sm-6 my-4 texto-cuadro'>
		<h1 className='text-uppercase '>Aqua</h1>
		<p>
			Buenos Aires, 2019
			<br />
			Acrylic on canvas
			<br />
			1.30 x 1.10 mts
			<br />
		</p>
	</div>
);

const descriptionShining = (
	<div className='me-sm-6 my-4 texto-cuadro '>
		<h1 className='text-uppercase '>Shining</h1>
		<p>
			Buenos Aires, 2019
			<br />
			Acrylic on canvas
			<br />
			1.10 x 1.10 mts
			<br />
		</p>
	</div>
);
export default function Featured() {
	return (
		<div>
			<Navegation />
			<DescriptionAndImage
				imagenProp={RiverBank}
				description={descriptionRiverBank}
			/>
			<DescriptionAndImage
				imagenProp={Violet}
				description={descriptionViolet}
				justifyContent='justify-content-sm-end'
				flexRow='flex-sm-row-reverse'
			/>
			<DescriptionAndImage
				imagenProp={Duntless}
				description={descriptionDuntless}
			/>
			<DescriptionAndImage
				imagenProp={Orchid}
				description={descriptionOrchid}
				justifyContent='justify-content-sm-end'
				flexRow='flex-sm-row-reverse'
			/>
			<DescriptionAndImage
				imagenProp={LetsFly}
				description={descriptionLetsFly}
			/>
			<DescriptionAndImage
				imagenProp={Begining}
				description={descriptionBegining}
				justifyContent='justify-content-sm-end'
				flexRow='flex-sm-row-reverse'
			/>
			<DescriptionAndImage
				imagenProp={Cement}
				description={descriptionCement}
			/>

			<DescriptionAndImage
				imagenProp={Aqua}
				description={descriptionAqua}
				justifyContent='justify-content-sm-end'
				flexRow='flex-sm-row-reverse'
			/>

			<DescriptionAndImage
				imagenProp={Shining}
				description={descriptionShining}
			/>
			<Footer />
		</div>
	);
}
