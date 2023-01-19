import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { TbArrowBack } from 'react-icons/tb';

const Container = styled.div`
  /* display: flex;
  flex-direction: column; */
  /* height: ${(props) => `${props.height}px`};
  width: ${(props) => `${props.height}px`}; */
  /* position: relative; */
  /* margin: 30px; */
  text-align: justify;
  position: relative;
  /* border: 1px black solid; */
  /* padding: 5px; */
  margin: none;
  /* border-radius: 15px; */
`;

const Title = styled.div``;

const Info = styled.div``;

const Museum = styled.div``;

const Link = styled.a`
  font-size: 14px;
`;

const Flip = styled.div`
  /* position: absolute; */
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
        {image.artist || 'Artist Unknown'}
      </Info>
      <Info>
        Date:
        {' '}
        {image.date || 'Date Unknown'}
      </Info>
      {/* <Info>{image.objectType || 'Object Type Unknown'}</Info> */}
      {/* <Museum>
        Digital image courtesey of the
        {' '}
        {image.museum}
      </Museum> */}
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
