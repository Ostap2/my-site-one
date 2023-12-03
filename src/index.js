import React from 'react';
import App from './components/App';
import { createRoot } from 'react-dom/client';


import 'index.css'

const rootElement = document.getElementById('root');
const reactRoot = createRoot(rootElement);

reactRoot.render(<App />);
