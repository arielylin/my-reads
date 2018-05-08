import React, { Component } from "react";
import Book from "./Book";
import PropTypes from "prop-types";
class SearchLibrary extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired
  };

  render() {
    const { onShelfChange, books } = this.props;
    return (
      <div className="search-library">
        <Book books={books} onShelfChange={onShelfChange} />
      </div>
    );
  }
}

export default SearchLibrary;
