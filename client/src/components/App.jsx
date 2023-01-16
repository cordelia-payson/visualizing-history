import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Search from './search/Search.jsx';
import PhotoFeed from './feed/PhotoFeed.jsx';
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
  const [sortOption, setSortOption] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(
    () => {
      setLoading(true);
      getImages(searchDecade, searchCountry, pageNumber)
        .then((res) => {
          setImages((images) => [...images, ...res]);
          setHasMore(res.length > 0);
          setLoading(false);
        })
        .catch((err) => err);
    },
    [searchDecade, searchCountry],
  );

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
          setPageNumber={setPageNumber}
          setImages={setImages}
        />
      </TopBar>

      {images
        ? (
          <PhotoFeed
            images={images}
            loading={loading}
            setPageNumber={setPageNumber}
            hasMore={hasMore}
          />
        )
        : 'Pick a location and time period to see pictures!'}

    </Container>
  );
}

export default App;
