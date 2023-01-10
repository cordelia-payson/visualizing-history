import React from 'react';
import styled from 'styled-components';
import Search from './Search.jsx';
import PhotoFeed from './PhotoFeed.jsx';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`;

const TopBar = styled.div``;

const Title = styled.div``;

function App() {
  const three = 3;
  return (
    <Container>

      <TopBar>
        <Title>Time Period Photos</Title>

        {/* liked photos */}

        <Search />
      </TopBar>

      <PhotoFeed />

    </Container>
  );
}

export default App;
