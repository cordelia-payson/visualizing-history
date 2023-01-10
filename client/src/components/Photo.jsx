import React from 'react';
import styled from 'styled-components';
import Masonry from '@mui/lab/Masonry';

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

function Photo(props) {
  const { image } = props;

  return (
    <ImageContainer>
      <ImageFront>
        <Image src={image} />
      </ImageFront>
    </ImageContainer>
  );
}

export default Photo;
