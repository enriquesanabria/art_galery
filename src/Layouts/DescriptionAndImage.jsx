import { Container, Row, Col, Image } from 'react-bootstrap';

function MiComponente(props) {
	return (
		<Container fluid>
			<Row className={`align-items-center ${props.flexRow}`}>
				<Col sm={4} className={`${props.justifyContent}`}>
					<Image
						loading='lazy'
						src={props.imagenProp}
						alt='Foto artista 1'
						fluid
					/>
				</Col>

				<Col sm={8} className={`${props.justifyContent} `}>
					{props.description}
				</Col>
			</Row>
		</Container>
	);
}

export default MiComponente;
