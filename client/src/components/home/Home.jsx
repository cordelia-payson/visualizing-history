import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SearchBar from '../search/SearchBar.jsx';
import { getImages } from '../../api.js';
import PhotoFeed from './PhotoFeed.jsx';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  display: flex;
  flex-direction: column;
  margin: 15px;
  align-items: center;
`;
const TopBar = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px;
  align-items: center;
`;
const Default = styled.div`
  text-align: center;
`;

function Home() {
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
    <Container>
      <SearchBar
        searchDecade={searchDecade}
        setSearchDecade={setSearchDecade}
        searchCountry={searchCountry}
        setSearchCountry={setSearchCountry}
        setPageNumber={setPageNumber}
        setImages={setImages}
        sortOption={sortOption}
        setSortOption={setSortOption}
      />

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
        : <Default>Choose a location and time to get a glimpse of the past</Default>}

    </Container>
  );
}

export default Home;
