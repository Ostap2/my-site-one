import React from 'react';
import App from './components/App';
import { createRoot } from 'react-dom/client';
import Text from './i18n';
import { I18nextProvider } from 'react-i18next';

import 'index.css'

const rootElement = document.getElementById('root');
const reactRoot = createRoot(rootElement);

reactRoot.render(<I18nextProvider i18n={Text}><App /></I18nextProvider>);
