import React, { useState } from 'react';
import styled from 'styled-components';
import TimeMenu from './TimeMenu.jsx';

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const Place = styled.div``;

const Time = styled.div``;

const SearchButton = styled.div``;

function Search() {
  const [time, setTime] = useState('');

  return (
    <Container>

      <Place>England</Place>

      <TimeMenu time={time} setTime={setTime} />

      <SearchButton>Search</SearchButton>
    </Container>
  );
};

export default Search;
