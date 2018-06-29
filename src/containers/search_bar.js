import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
    // If you are passing around a callback, and that callback has a reference to "this", it needs to be bound.
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    console.log(e.target.value);
    this.setState({ term: e.target.value });
  }

  render() {
    return (
      <form className="input-group">
        <input
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button tye="submit" className="btn btn-secondary">
            Submit
          </button>
        </span>
      </form>
    );
  }
}

export default SearchBar;
