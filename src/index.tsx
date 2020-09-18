import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import axios from 'axios';
import * as serviceWorker from './serviceWorker';

import Main from './layout/Main';
import MainProvider from './providers/MainProvider';

axios.defaults.baseURL = process.env.REACT_APP_URL_SERVER;
axios.interceptors.request.use(request => request, error => Promise.reject(error));
axios.interceptors.response.use(response => response, error => Promise.reject(error));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MainProvider>
        <Main />
      </MainProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
