import React, { useState } from 'react';
import styled from 'styled-components';
import TimeMenu from './TimeMenu.jsx';

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const Place = styled.div``;

const Time = styled.div``;

const SearchButton = styled.button``;

function Search(props) {
  const { searchDecade, setSearchDecade } = props;
  const [time, setTime] = useState('');

  const handleSearch = () => {
    setSearchDecade(time);
  };

  return (
    <Container>

      <Place>England</Place>

      <TimeMenu time={time} setTime={setTime} />

      <SearchButton onClick={() => handleSearch()}>Search</SearchButton>
    </Container>
  );
}

export default Search;
