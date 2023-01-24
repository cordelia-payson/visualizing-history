import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SearchBar from './search/SearchBar.jsx';
import PhotoFeed from './home/PhotoFeed.jsx';
import { getImages } from '../api.js';
import GlobalStyle from '../GlobalStyle.jsx';
import ScrollButton from './ScrollTopButton.jsx';
import Home from './home/Home.jsx';

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
  margin-top: 20px;
`;

const Default = styled.div`
  text-align: center;
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <Container>

        <TopBar>
          <Title>Visualizing History</Title>
        </TopBar>

        <Home />
        <ScrollButton />
      </Container>
    </div>
  );
}

export default App;
