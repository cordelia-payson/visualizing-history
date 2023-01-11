import React from 'react';
import styled from 'styled-components';
import Masonry from '@mui/lab/Masonry';
import Yith from '@yith/yith';
import Photo from './Photo.jsx';

const FeedContainer = styled.div`
`;

function PhotoFeed(props) {
  const { images } = props;

  return (
    <FeedContainer>
      <Masonry columns={4} spacing={2}>
        {images.map((image, index) => (
          <Photo image={image} key={index} />
        ))}
      </Masonry>
    </FeedContainer>
  );

  // return (
  //   <div>
  //     <Yith type="projection">
  //       <Yith.Manifest id="https://iiif.vam.ac.uk/collections/O593917/manifest.json" />
  //     </Yith>
  //   </div>

  // );
}

export default PhotoFeed;
