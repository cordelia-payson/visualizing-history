import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { TbArrowBack } from 'react-icons/tb';

const Container = styled.div`
  text-align: justify;
  position: relative;
  margin: none;
`;

const Title = styled.div``;

const Info = styled.div``;

const Museum = styled.div``;

const Link = styled.a`
  font-size: 14px;
`;

const Flip = styled.div`
  bottom: 0;
  right: 0;
`;

function PhotoBack(props) {
  const { image, width, height } = props;
  const { handleClick, flipped } = props;
  return (
    <Container width={width} height={height}>
      <Title>
        Title:
        {' '}
        {image.title || 'Untitled'}
      </Title>
      <Info>
        Artist:
        {' '}
        {image.artist || 'Unknown'}
      </Info>
      <Info>
        Date:
        {' '}
        {image.date || 'Unknown'}
      </Info>
      <Info>
        Object Type:
        {' '}
        {image.objectType || 'Object Type Unknown'}
      </Info>

      <Link href={image.manifest} target="_blank">Universal Viewer</Link>
      <br />
      <Link href={image.museumPage} target="_blank">{image.museum}</Link>
      {/* <Flip
        onClick={(evt) => handleClick(evt)}
        isFlipped={flipped}
      >
        <TbArrowBack size={40} />
      </Flip> */}

    </Container>
  );
}

export default PhotoBack;
