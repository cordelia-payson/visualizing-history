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

const SearchButton = styled.div`
  display: flex;
  height: auto;
  text-align: center;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
  margin: 5px;
  border: grey solid 1px;
  /* border-radius: 10px; */
  padding: 6px 10px;
  align-self: center;
  font-size: 20px;
  /* box-shadow: rgba(0, 0, 0, 0.35) 0px 2px 10px; */
  /* background: #ada2ff; */
  background: none;

  &:hover {
    /* transform: scale(1.1); */
    box-shadow: rgba(0, 0, 0, 0.35) 0px 2px 10px;
    background: #ada2ff;
  }
  &: active {
    background: #e0d6ff;
  }
`;

const ButtonText = styled.div`
  color: black;
`;

function SearchBar(props) {
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
        <ButtonText>Search</ButtonText>
      </SearchButton>
    </Container>
  );
}

export default SearchBar;
