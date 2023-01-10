import React from 'react';
import styled from 'styled-components';

function Photo(props) {
  const { image } = props;

  return (
    <div>{image}</div>
  );
}

export default Photo;
