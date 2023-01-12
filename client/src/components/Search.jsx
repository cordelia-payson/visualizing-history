import React, { useState } from 'react';
import styled from 'styled-components';
import TimeMenu from './TimeMenu.jsx';
import PlaceMenu from './PlaceMenu.jsx';

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const Time = styled.div``;

const SearchButton = styled.button``;

function Search(props) {
  const { searchDecade, setSearchDecade } = props;
  const { searchCountry, setSearchCountry } = props;
  const [time, setTime] = useState('');
  const [place, setPlace] = useState('');

  const handleSearch = () => {
    setSearchCountry(place);
    setSearchDecade(time);
  };

  return (
    <Container>

      <PlaceMenu place={place} setPlace={setPlace} />
      <TimeMenu time={time} setTime={setTime} />

      <SearchButton onClick={() => handleSearch()}>Search</SearchButton>
    </Container>
  );
}

export default Search;
