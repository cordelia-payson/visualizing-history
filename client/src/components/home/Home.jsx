import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Yith from '@yith/yith';
import SearchBar from '../search/SearchBar.jsx';
import { getImages } from '../../api.js';
import PhotoFeed from './PhotoFeed.jsx';
import ScrollButton from '../shared/ScrollTopButton.jsx';
import Title from '../shared/Title.jsx';

const TopBar = styled.div`
  display: flex;
  flex-direction: row;
  display: flex;
  margin: 15px;
  justify-content: center;
`;

const Middle = styled.div``;

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
    <div>
      <TopBar>

        <Middle>
          <Title />

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
        </Middle>
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
        : <Default>Choose a location and time to get a glimpse of the past</Default>}

      <ScrollButton />

    </div>

  );
}

export default Home;
