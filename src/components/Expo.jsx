import Navegation from '../Layouts/Navegation';
import Footer from '../Layouts/Footer';
import Banner from '../Layouts/ImgBanner';

import expo1 from '../assets/img/expos/Expo1.jpg';
import expo2 from '../assets/img/expos/Expo2.jpg';
import expo3 from '../assets/img/expos/Expo3.jpg';
import expo4 from '../assets/img/expos/Expo4.jpeg';
import expo5 from '../assets/img/expos/Expo5.jpg';
export default function Expo() {
	return (
		<div>
			<Navegation />
			<Banner img={expo1} />
			<Banner img={expo2} />
			<Banner img={expo3} />
			<Banner img={expo4} />
			<Banner img={expo5} />
			<Footer />
		</div>
	);
}
