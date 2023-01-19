import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Search from './search/Search.jsx';
import PhotoFeed from './feed/PhotoFeed.jsx';
import { getImages } from '../api.js';
import GlobalStyle from '../GlobalStyle.jsx';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const TopBar = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px;
  align-items: center;
`;

const Title = styled.div`
  font-size: 2.5em;
  text-align: center;
  margin: 20px;
`;

const Default = styled.div`
  text-align: center;
`;

function App() {
  const [images, setImages] = useState([]);
  const [searchDecade, setSearchDecade] = useState('');
  const [searchCountry, setSearchCountry] = useState('');
  const [sortOption, setSortOption] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(
    () => {
      setLoading(true);
      getImages(searchDecade, searchCountry, pageNumber, sortOption)
        .then((res) => {
          setImages([...images, ...res]);
          setHasMore(res.length > 0);
          setLoading(false);
        })
        .catch((err) => err);
    },

    [searchDecade, searchCountry, pageNumber, sortOption],
  );

  return (
    <div>
      <GlobalStyle />
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

        {images.length > 0
          ? (
            <PhotoFeed
              images={images}
              loading={loading}
              pageNumber={pageNumber}
              setPageNumber={setPageNumber}
              hasMore={hasMore}
            />
          )
          : <Default>Pick a location and time period to see pictures!</Default>}

      </Container>
    </div>
  );
}

export default App;
