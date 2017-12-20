import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';

import SearchBar from './containers/search_bar';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleWare(ReduxPromise)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, document.getElementById('root'));
});
