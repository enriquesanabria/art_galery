import Navegation from '../Layouts/Navegation';
import Footer from '../Layouts/Footer';
import DescriptionAndImage from '../Layouts/DescriptionAndImage';
import img1 from '../assets/img/paintings/Aqua.jpg';

export default function Portfolio() {
	const parrafo1 = (
		<p className='text-sm-end text-start'>
			Painting allows me to express the <br className='d-none d-sm-block' />
			best version of myself. I started doing{' '}
			<br className='d-none d-sm-block' />
			it because I love it, it takes me on a{' '}
			<br className='d-none d-sm-block' />
			journey without time. Through art I <br className='d-none d-sm-block' />
			managed to connect with my most <br className='d-none d-sm-block' />
			intimate emotions.
		</p>
	);
	return (
		<div>
			<Navegation />
			<DescriptionAndImage
				flexRow='flex-sm-row-reverse'
				justifyContent='justify-content-sm-end'
				texto='ejemplo'
				imagenProp={img1}
				description={parrafo1}
			/>
			<Footer />
		</div>
	);
}
