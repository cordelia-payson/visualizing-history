import React, { useRef, useCallback } from 'react';
import styled from 'styled-components';
import Masonry from 'react-masonry-css';
import Photo from './Photo.jsx';
import '../../app.css';

const FeedContainer = styled.div`
  margin: auto;
`;

function PhotoFeed(props) {
  const { images, loading, hasMore } = props;
  const { pageNumber, setPageNumber } = props;

  const observer = useRef();

  const lastImageElementRef = useCallback((node) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        setPageNumber((prevPageNumber) => prevPageNumber + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, [loading, hasMore]);

  const breakpointColumnsObject = {
    default: 4,
  };

  return (
    <FeedContainer>

      <Masonry
        breakpointCols={4}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((image, index) => {
          if (images.length === index + 1) {
            return <Photo image={image} key={index} ref={lastImageElementRef} className="my-masonry-grid_column_div" />;
          }
          return <Photo image={image} key={index} className="my-masonry-grid_column_div" />;
        })}
      </Masonry>

      {loading && images && 'Loading...'}
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
