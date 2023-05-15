import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { MemoHock } from './06-memos/MemoHook';
import { CallbackHook } from './06-memos/CallbackHook';


ReactDOM.createRoot(document.getElementById('root'))
  .render(
    <CallbackHook />
  )
