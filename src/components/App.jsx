// src/components/App.js
import React from 'react';
import { useTranslation, I18nextProvider } from 'react-i18next';
import i18n from '../i18n';
import LanguageSwitcher from './LanguageSwitcher/LanguageSwitcher';

function App() {
  const { t } = useTranslation();

  return (
    <I18nextProvider i18n={i18n}>
      <div>
        <LanguageSwitcher />
        <h1>{t('common.hello')}</h1>
        <p>{t('common.intro')}</p>
      </div>
    </I18nextProvider>
  );
}

export default App;
