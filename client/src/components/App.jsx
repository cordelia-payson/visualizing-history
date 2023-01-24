import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import Home from './home/Home.jsx';
import GlobalStyle from '../GlobalStyle.jsx';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Routes>
        <Route path="/" index element={<Home />} />
      </Routes>
    </div>

  );
}

export default App;
