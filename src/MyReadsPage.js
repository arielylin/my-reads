import React, { Component } from "react";
import Book from "./Book";

class MyReads extends Component {
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
            There are no books in this shelf - why don't you try adding some?
          </div>
        </div>
      );
    }
  }
}

export default MyReads;
