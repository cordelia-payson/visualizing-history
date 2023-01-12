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
  const [searchCountry, setSearchCountry] = useState('');

  useEffect(() => {
    if (searchDecade !== '' && searchCountry !== '') {
      getImages(searchDecade, searchCountry)
        .then((res) => {
          setImages(res);
        })
        .catch((err) => err);
    }
  }, [searchDecade, searchCountry]);

  return (
    <Container>

      <TopBar>
        <Title>Time Period Photos</Title>

        {/* liked photos */}

        <Search
          searchDecade={searchDecade}
          setSearchDecade={setSearchDecade}
          searchCountry={searchCountry}
          setSearchCountry={setSearchCountry}
        />
      </TopBar>

      {images ? <PhotoFeed images={images} /> : 'Pick a location and time period to see pictures!'}

    </Container>
  );
}

export default App;
