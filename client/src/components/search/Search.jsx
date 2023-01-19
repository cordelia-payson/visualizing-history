import React, { useState } from 'react';
import styled from 'styled-components';
import TimeMenu from './TimeMenu.jsx';
import PlaceMenu from './PlaceMenu.jsx';
import SortBy from './SortBy.jsx';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Time = styled.div``;

const SearchButton = styled.button`
  width: 75px;
  height: auto;
`;

function Search(props) {
  const { searchDecade, setSearchDecade } = props;
  const { searchCountry, setSearchCountry } = props;
  const { sortOption, setSortOption } = props;
  const { setPageNumber, setImages } = props;
  const [time, setTime] = useState('');
  const [place, setPlace] = useState('');
  const [sort, setSort] = useState('');

  const handleSearch = () => {
    setImages([]);
    setSearchCountry(place);
    setSearchDecade(time);
    setPageNumber(1);
    // setSortOption(sort);
  };

  return (
    <Container>

      <PlaceMenu place={place} setPlace={setPlace} />
      <TimeMenu time={time} setTime={setTime} />
      <SortBy sort={sort} setSort={setSort} />

      <SearchButton onClick={() => handleSearch()}>Search</SearchButton>
    </Container>
  );
}

export default Search;
