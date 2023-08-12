import { Container, Row, Col, Image } from 'react-bootstrap';

function MiComponente(props) {
	return (
		<Container fluid>
			<Row className={`d-flex align-items-center ${props.flexRow}`}>
				<Col
					sm={4}
					className={`d-flex justify-content-center p-0 ${props.justifyContent}`}
				>
					<Image
						loading='lazy'
						src={props.imagenProp}
						alt='Foto artista 1'
						fluid
					/>
				</Col>

				<Col
					sm={8}
					className={`d-flex justify-content-center p-0 ${props.justifyContent}`}
				>
					{props.description}
				</Col>
			</Row>
		</Container>
	);
}

export default MiComponente;
