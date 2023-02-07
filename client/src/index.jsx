import { createRoot } from 'react-dom/client';
import React from 'react';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import App from './components/App.jsx';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
  <HashRouter>
    <App />
  </HashRouter>,
);
require('react-dom');
