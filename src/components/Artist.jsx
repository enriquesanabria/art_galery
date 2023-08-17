import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import Navegation from '../Layouts/Navegation';
import Footer from '../Layouts/Footer';
import DescriptionAndImage from '../Layouts/DescriptionAndImage';

import img1 from '../assets/img/artist/Artist1.jpg';
import img2 from '../assets/img/artist/Artist2.jpg';
import img3 from '../assets/img/artist/Artist3.jpg';
import img4 from '../assets/img/artist/Artist4.jpg';
import style from '../styles/scss/artist.module.scss';

export default function Artist() {
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

	const parrafo2 = (
		<p className='text-start'>
			Each piece is the result of the ability
			<br className='d-none d-sm-block' />
			to interpret what the world offers me
			<br className='d-none d-sm-block' />
			and turn it into something beautiful.
			<br className='d-none d-sm-block' />
		</p>
	);

	const parrafo3 = (
		<Container>
			<Row className='d-block text-sm-end text-start art-estudios'>
				<Col>
					<h1>MARIA LAURA TRIPOLI</h1>
					<h2>ABSTRACT ARTIST</h2>
					<h3>EDUCATION</h3>
					<ul className='p-0'>
						<li>
							<strong>Degree in Tourism </strong>| USAL
						</li>
						<li>
							<strong>Postgraduate Degree in Business Administration </strong>|
							UBA
						</li>
						<li>
							<strong>University Teaching </strong>| USAL
						</li>
						<br />
						<li>
							<strong>Ceramic Course </strong>| School of Visual Arts
							<br className='d-sm-none' />
							Martin Malarro
						</li>
						<li>
							<strong>Ceramic Course </strong>| Casa de Madera
						</li>
						<li>
							<strong>Abstract Art Techniques </strong>| Atelier Nieves Legaspi
						</li>
					</ul>
				</Col>
				<Col>
					<ul className='p-0'>
						<h3>EXPERIENCE</h3>
						<li>
							<strong>University Teacher </strong>| USAL | 2000-Today
						</li>
						<li>
							<strong>Design Manager </strong>| Pantuss SRL | 2012-Today
						</li>
						<li>
							<strong>Abstract Artist </strong>| Tripoli | 2018-Today
						</li>
						<li>
							<strong>Art Consultant </strong>| Tripoli | 2021-Today
						</li>
					</ul>
				</Col>
			</Row>
		</Container>
	);

	const parrafo4 = (
		<Col sm={8}>
			<ListGroup>
				<ListGroup.Item>
					<h3>ART EXHIBITIONS</h3>
				</ListGroup.Item>
				<ListGroup.Item>
					<strong>Atelier Nieves Legaspi </strong>| Tigre | November 2019
				</ListGroup.Item>
				<ListGroup.Item>
					<strong>Obras Referenciales Cito </strong>| Tigre | December 2019
				</ListGroup.Item>
				<ListGroup.Item>
					<strong>Solo Art Exhibition </strong>| Tigre City Hall | April 2021
				</ListGroup.Item>
				<ListGroup.Item>
					<strong>Museum Night </strong>| Buenos Aires | October 2021
				</ListGroup.Item>
				<ListGroup.Item>
					<strong>Collective Art Exhibition </strong>| Barolo Palace | November
					2021
				</ListGroup.Item>
				<ListGroup.Item>
					<strong>CHAU Art Exhibition </strong>| Buenos Aires | December 2021
				</ListGroup.Item>
				<ListGroup.Item>
					<strong>Art Night </strong>| Tigre | October 2022
				</ListGroup.Item>
				<ListGroup.Item>
					<strong>Established & Emerging II </strong>| Audiovisual District of
					Colegiales | November 2022
				</ListGroup.Item>
				<ListGroup.Item>
					<strong>Mercedes Giachetti Gallery </strong>| San Telmo | March 2023
				</ListGroup.Item>
				<ListGroup.Item>
					<strong>Expo Cafira </strong>| Rural Society | March 2023
				</ListGroup.Item>
				<ListGroup.Item>
					<strong>XIV Florence Biennale </strong>| Florence | October 2023
				</ListGroup.Item>
			</ListGroup>
		</Col>
	);

	return (
		<div>
			<Navegation />
			<Container fluid className={style.artist}>
				<DescriptionAndImage
					flexRow='flex-sm-row-reverse'
					justifyContent='justify-content-sm-end'
					texto='ejemplo'
					imagenProp={img1}
					description={parrafo1}
				/>
				<DescriptionAndImage
					justifyContent='justify-content-sm-start'
					texto='ejemplo'
					imagenProp={img2}
					description={parrafo2}
				/>
				<DescriptionAndImage
					flexRow='flex-sm-row-reverse'
					justifyContent='justify-content-sm-start'
					texto='ejemplo'
					imagenProp={img3}
					description={parrafo3}
				/>
				<DescriptionAndImage
					justifyContent='justify-content-sm-start'
					texto='ejemplo'
					imagenProp={img4}
					description={parrafo4}
				/>
			</Container>
			<Footer />
		</div>
	);
}
