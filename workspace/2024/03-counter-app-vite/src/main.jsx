import React from 'react';;
import ReactDOM from 'react-dom/client';

import { CounterApp } from './CounterApp';
import { FirstApp } from './FirstApp';

import './styles.css';

ReactDOM.createRoot(document.getElementById('root'))
    .render(
        <React.StrictMode>
            {/* <CounterApp value={1} /> */}
            <FirstApp title="Hola, Soy Vegeta" />

        </React.StrictMode>
    );