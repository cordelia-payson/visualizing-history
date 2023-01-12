import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Yith from '@yith/yith';

const ImageContainer = styled.div`
  max-width: 25%;
  height: auto;
`;

const ImageFront = styled.div`
`;

const Image = styled.img`
  display: block;
  width: 100%;
`;

const ImageBack = styled.div``;

function Photo(props) {
  const { image } = props;
  const [front, setFront] = useState(true);
  const [back, setBack] = useState(false);

  const handleClick = () => (front
    ? setFront(false) && setBack(true)
    : setFront(true) && setBack(false));

  useEffect(() => {

  }, [side]);

  return (
    <ImageContainer>
      <ImageFront onClick={(evt) => handleClick()}>
        <Image src={image.image} loading="lazy" />
      </ImageFront>
      <ImageBack onClick={(evt) => handleClick()}>info</ImageBack>
    </ImageContainer>
  );
}

export default Photo;
