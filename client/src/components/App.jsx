import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Search from './Search.jsx';
import PhotoFeed from './PhotoFeed.jsx';
import { getImages } from '../api.js';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`;

const TopBar = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div``;

function App() {
  const [images, setImages] = useState();
  const [searchDecade, setSearchDecade] = useState('');

  useEffect(() => {
    if (searchDecade !== '') {
      getImages(searchDecade);
    }
  }, [searchDecade]);

  return (
    <Container>

      <TopBar>
        <Title>Time Period Photos</Title>

        {/* liked photos */}

        <Search searchDecade={searchDecade} setSearchDecade={setSearchDecade} />
      </TopBar>
      {/* if images === '' show something like 'pick a decade' */}
      <PhotoFeed />

    </Container>
  );
}

export default App;
