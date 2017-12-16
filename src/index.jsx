import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './containers/search_bar';

import App from './components/app';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, document.getElementById('root'));
});
