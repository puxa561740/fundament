import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import ModalProvider from './ModalContext/ModalContext';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <ModalProvider>
       <App />
    </ModalProvider>
  </BrowserRouter>
  ,
  document.getElementById('root')
);
