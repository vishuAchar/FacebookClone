import React from 'react';
import App from './App';
import GlobalContextProvider from './src/context/GlobalContext';

function Bootstrap() {
  return (
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  );
}

export default Bootstrap;
