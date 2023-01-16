import React, { useRef, useCallback } from 'react';
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
  const { images, loading, setPageNumber, hasMore } = props;

  const observer = useRef();

  const lastImageElementRef = useCallback((node) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        setPageNumber((prevPageNumber) => prevPageNumber + 1);
        console.log('visible')
      }
    });
    if (node) observer.current.observe(node);
  }, [loading, hasMore]);

  return (
    <FeedContainer>

      <Masonry columns={4} spacing={2}>
        {images.map((image, index) => {
          if (images.length === index + 1) {
            return <Photo image={image} key={index} ref={lastImageElementRef} />;
          }
          return <Photo image={image} key={index} />;
        })}
      </Masonry>

      {loading && 'Loading...'}
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
