<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom/client';

import { CounterApp } from './CounterApp';

import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value={10} />
    </React.StrictMode>
);
=======
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
>>>>>>> c32a58255c4c3b65fbd5646b231cbe052c117e6f
