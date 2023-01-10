import React from 'react';
import styled from 'styled-components';
import Masonry from '@mui/lab/Masonry';
import Photo from './Photo.jsx';

const FeedContainer = styled.div``;

function PhotoFeed() {
  const images = [1, 2, 3, 4, 5];
  return (
    <FeedContainer>
      <Masonry columns={4} spacing={2}>
        {images.map((image) => (
          <Photo image={image} />
        ))}
      </Masonry>
    </FeedContainer>
  );
}

export default PhotoFeed;
