import Image from 'react-bootstrap/Image';

import { Container } from 'react-bootstrap';

function Banner(props) {
	return (
		<Container fluid>
			<Image src={props.img} fluid />
		</Container>
	);
}

export default Banner;
