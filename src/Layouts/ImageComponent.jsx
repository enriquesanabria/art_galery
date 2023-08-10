import { Image } from 'react-bootstrap';

// eslint-disable-next-line react/prop-types
const ImageComponent = ({ imageUrl, altText }) => {
	return <Image src={imageUrl} alt={altText} fluid />;
};
export default ImageComponent;
