import { Container, Row, Col, Image } from 'react-bootstrap';

function MiComponente(props) {
	return (
		<Container fluid className='border'>
			<Row className={`align-items-center ${props.flexRow}`}>
				<Col sm={4} className={`p-0 ${props.justifyContent}`}>
					<Image
						loading='lazy'
						src={props.imagenProp}
						alt='Foto artista 1'
						fluid
					/>
				</Col>

				<Col sm={8} className={`p-0 ${props.justifyContent}`}>
					{props.description}
				</Col>
			</Row>
		</Container>
	);
}

export default MiComponente;
