import React from 'react';
import ReactDOM from 'react-dom/client';

import './scss/styles.scss';

import App from './App.jsx';
import EditorContextProvider from './components/EditorContext.jsx';




ReactDOM.createRoot( document.getElementById( 'root' ) ).render(
  <React.StrictMode>
    <EditorContextProvider>
      <App />
    </EditorContextProvider>
  </React.StrictMode>,
);
