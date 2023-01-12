import React from 'react';
import styled from 'styled-components';
import Masonry from '@mui/lab/Masonry';
import Yith from '@yith/yith';
import StackGrid from 'react-stack-grid';
// import Masonry from 'react-masonry-css';
import Photo from './Photo.jsx';

const FeedContainer = styled.div`
`;

// const MasonryGrid = styled(Masonry)`
//   display: flex;
//   margin-left: -30px;
//   width: auto;
// `;

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
  //   <FeedContainer>
  //     <MasonryGrid>
  //       {images.map((image, index) => (
  //         <Photo image={image} key={index} />
  //       ))}
  //     </MasonryGrid>
  //   </FeedContainer>
  // );

  // return (
  //   <FeedContainer>
  //     <StackGrid columnWidth="25%">
  //       {images.map((image, index) => (
  //         <Photo image={image} key={index} />
  //       ))}
  //     </StackGrid>
  //   </FeedContainer>
  // );

  // return (
  //   <div>
  //     <Yith type="projection">
  //       <Yith.Manifest id="https://iiif.vam.ac.uk/collections/O593917/manifest.json" />
  //     </Yith>
  //   </div>

  // );
}

export default PhotoFeed;
