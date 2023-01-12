import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Yith from '@yith/yith';
import ReactCardFlip from 'react-card-flip';
import PhotoBack from './PhotoBack.jsx';

const ImageContainer = styled.div`
  max-width: 25%;
  height: auto;
`;

const Card = styled.div`
`;

const CardFront = styled(Card)`
 `;

const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

const CardBack = styled(Card)`
  height: ${(props) => `${props.height}px`};
  width: ${(props) => `${props.height}px`};
`;

function Photo(props) {
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
    <ImageContainer>
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
          onClick={(evt) => handleClick(evt)}
          width={width}
          height={height}
        >
          <PhotoBack image={image} />
        </CardBack>
      </ReactCardFlip>

    </ImageContainer>
  );
}

export default Photo;
