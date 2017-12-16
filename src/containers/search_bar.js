import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.setState({ term: '' });

  }
  render () {
    return (
      <form className="city-input">
        <input
          placeholder="Enter a city to get a five day forecast"
          className="city-form"
          value={this.state.term}
          onChange={this.onInputChange}
        />
      <span className="input-submit">
        <button
          type="submit"
          className="submit-button">
          Submit
        </button>
        </span>
      </form>
    );
  }
}
