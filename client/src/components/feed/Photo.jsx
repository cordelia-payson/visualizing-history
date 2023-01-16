import React, {
  useState, useEffect, useRef, useCallback,
} from 'react';
import styled from 'styled-components';
import ReactCardFlip from 'react-card-flip';
import PhotoBack from './PhotoBack.jsx';
import PhotoFront from './PhotoFront.jsx';

const ImageContainer = styled.div`
  /* max-width: 25%; */
  /* height: auto; */
`;

const Card = styled.div`
  /* height: ${(props) => `${props.height}px`};
  width: ${(props) => `${props.height}px`}; */
  margin: 30px;
`;

const CardFront = styled(Card)`
 `;

const Image = styled.img`
  /* margin: 30px; */
  height: auto;
  display: inline-block;
  width: 100%;
`;

const CardBack = styled(Card)`
  height: ${(props) => `${props.height}px`};
  width: ${(props) => `${props.height}px`};
  display: inline-block;
`;

const Photo = React.forwardRef((props, ref) => {
  const { image } = props;
  const [flipped, setFlipped] = useState(false);
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();

  const imageRef = useRef();

  const getImageSize = () => {
    setWidth(imageRef.current.clientWidth);
    setHeight(imageRef.current.clientHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', getImageSize);
  }, []);

  useEffect(() => {
    getImageSize();
  }, []);

  const handleClick = (evt) => {
    evt.preventDefault();
    setFlipped(!flipped);
  };

  return (
    <ImageContainer ref={ref}>
      <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
        <CardFront onClick={(evt) => handleClick(evt)}>
          <Image
            src={image.image}
            loading="lazy"
            ref={imageRef}
          />
        </CardFront>
        <CardBack
          isFlipped={flipped}
          width={width}
          height={height}
        >
          <PhotoBack
            image={image}
            width={width}
            height={height}
            handleClick={handleClick}
            flipped={flipped}
          />
        </CardBack>
      </ReactCardFlip>

    </ImageContainer>
  );
});

export default Photo;
