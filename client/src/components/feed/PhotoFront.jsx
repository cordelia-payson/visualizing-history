import React, {
  useState, useEffect, useRef, useCallback,
} from 'react';
import styled from 'styled-components';

const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

function PhotoFront(props) {
  const { image, setHeight, setWidth } = props;

  const imageRef = useRef();

  const getImageSize = () => {
    setWidth(imageRef.current.clientWidth);
    setHeight(imageRef.current.clientHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', getImageSize);
  }, []);

  useEffect(() => {
    getImageSize();
  }, []);

  return (
    <div>
      <Image
        src={image.image}
        loading="lazy"
        ref={imageRef}
      />
    </div>
  );
}

export default PhotoFront;
