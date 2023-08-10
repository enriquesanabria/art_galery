/* eslint-disable react/prop-types */
import Carousel from 'react-bootstrap/Carousel';

function CarouselFade({ images }) {
	return (
		<Carousel fade>
			{images.map((image, home) => (
				<Carousel.Item key={home}>
					<img
						className='d-block w-100'
						src={image}
						alt={`Slide ${home + 1}`}
					/>
				</Carousel.Item>
			))}
		</Carousel>
	);
}

export default CarouselFade;
