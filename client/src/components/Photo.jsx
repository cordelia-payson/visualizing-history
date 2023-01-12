import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Yith from '@yith/yith';
import ReactCardFlip from 'react-card-flip';

const ImageContainer = styled.div`
  max-width: 25%;
  height: auto;
`;

const Card = styled.div`
  /* position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden; */
`;

const CardFront = styled(Card)`
 `;

const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

const CardBack = styled(Card)`
`;

function Photo(props) {
  const { image } = props;
  const [flipped, setFlipped] = useState(false);
  const [width, setWidth] = useState();
  const [heigth, setHeight] = useState();

  const handleClick = (evt) => {
    evt.preventDefault();
    setFlipped(!flipped);
  };

  const img = new Image();
  img.src = image.image;
  img.onLoad = () => {
    setWidth(img.width);
    setHeight(img.height);
  };

  return (
    <ImageContainer>
      <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
        <CardFront onClick={(evt) => handleClick(evt)}>
          <Image src={image.image} loading="lazy" />
        </CardFront>
        <CardBack isFlipped={flipped} onClick={(evt) => handleClick(evt)}>{width}</CardBack>
      </ReactCardFlip>

    </ImageContainer>
  );
}

export default Photo;
