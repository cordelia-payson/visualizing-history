import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div``;

const Info = styled.div``;

function PhotoBack(props) {
  const { image } = props;
  return (
    <Container>
      <Title>{image.title || 'Untitled'}</Title>
      <Info>{image.artist || 'Unknown'}</Info>
      <Info>{image.date || 'Unknown'}</Info>

    </Container>
  );
}

export default PhotoBack;
