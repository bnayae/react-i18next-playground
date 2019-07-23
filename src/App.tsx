// https://github.com/i18next/react-i18next
// https://react.i18next.com/
// Blog: https://itnext.io/ultimate-localization-of-react-mobx-app-with-i18next-efab77712149
// Backend (from File): https://github.com/i18next/i18next-node-fs-backend
// Hooks: https://react.i18next.com/latest/using-with-hooks
// API: https://www.i18next.com/overview/api

import React, { Suspense } from 'react';
import './App.css';
import Loader from './components/Loader';
import { HooksTranslation } from './components/HooksTranslation';
import { HooksLanguageSwitcher } from './components/HooksLanguageSwitcher';

// @withNamespaces()
const App: React.FC = () => {

  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <HooksLanguageSwitcher />
        <HooksTranslation />
      </Suspense>
    </div>
  );
}

export default App;
