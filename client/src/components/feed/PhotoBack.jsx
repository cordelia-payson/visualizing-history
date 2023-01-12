import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: ${(props) => `${props.height}px`};
  width: ${(props) => `${props.height}px`};
  position: relative;
`;

const Title = styled.div``;

const Info = styled.div``;

const Museum = styled.div``;

function PhotoBack(props) {
  const { image, width, height } = props;
  return (
    <Container width={width} height={height}>
      <Title>{image.title || 'Untitled'}</Title>
      <Info>{image.artist || 'Unknown'}</Info>
      <Info>{image.date || 'Unknown'}</Info>
      <Info>{image.objectType || 'Unknown'}</Info>
      <Museum>
        Digital image curtesey of the
        {' '}
        {image.museum}
      </Museum>

    </Container>
  );
}

export default PhotoBack;
