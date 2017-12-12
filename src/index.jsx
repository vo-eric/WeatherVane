import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './containers/search_bar';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, document.getElementById('root'));
});
