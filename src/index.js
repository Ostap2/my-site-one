// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');
const reactRoot = createRoot(rootElement);
reactRoot.render(<App />);
