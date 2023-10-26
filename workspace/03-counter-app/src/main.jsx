import React from 'react';
import ReactDOM from 'react-dom/client';

import CounterApp from './CounterApp';

import './styles.css';

ReactDOM.createRoot(document.getElementById('root'))
    .render(
        <React.StrictMode>
            <CounterApp valor={14578} />
        </React.StrictMode>
    );

