import React, { Component } from "react";
import Book from "./Book";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
class MyReads extends Component {
  static propTypes = {
    onShelfChange: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired
  };
  render() {
    const { books, name, onShelfChange } = this.props;
    if (books.length > 0) {
      return (
        <div className="book-category">
          <div className="category-title">{name}</div>
          <Book books={books} onShelfChange={onShelfChange} />
        </div>
      );
    } else {
      return (
        <div className="book-category">
          <div className="category-title">{name}</div>
          <div className="no-books">
            There are no books in this shelf - why don't you try{" "}
            <Link to="/search"> adding some? </Link>
          </div>
        </div>
      );
    }
  }
}

export default MyReads;
