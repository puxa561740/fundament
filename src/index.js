import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import ModalProvider from './ModalContext/ModalContext';
import App from './App';

ReactDOM.render(
  <HashRouter>
    <ModalProvider>
       <App />
    </ModalProvider>
  </HashRouter>
  ,
  document.getElementById('root')
);
