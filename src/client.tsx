import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import { Provider } from 'react-redux';
import store from "./redux/store"

hydrate(
  <BrowserRouter>
        <Provider store={store}>
<App/>
</Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
