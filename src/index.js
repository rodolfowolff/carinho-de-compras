import React from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';

import './index.css';

import ProductsContextProvider from './contexts/ProductsContext';

import Rooutes from './routes';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <HelmetProvider>
    <ProductsContextProvider>
      <Rooutes />
    </ProductsContextProvider>
  </HelmetProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorker.unregister();
