import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import TimeMenu from './TimeMenu.jsx';
import PlaceMenu from './PlaceMenu.jsx';
import SortBy from './SortBy.jsx';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Time = styled.div``;

const SearchButton = styled.div`
  display: flex;
  width: auto;
  text-align: center;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
  margin: 5px;
  border: 1px black solid;
  border-radius: 5px;
  padding: 4px;
  background: none;

  &:hover {
    background: ;
  }
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
    setSortOption(sort);
  };

  return (
    <Container>

      <PlaceMenu place={place} setPlace={setPlace} />
      <TimeMenu time={time} setTime={setTime} />
      <SortBy sort={sort} setSort={setSort} />

      <SearchButton onClick={() => handleSearch()}>
        <div>Search</div>
      </SearchButton>
      {/* <Button variant="outlined" size="small" onClick={() => handleSearch()}>Search</Button> */}
    </Container>
  );
}

export default Search;
