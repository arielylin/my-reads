import React, { Component } from "react";
import MyReads from "./MyReadsPage";
import LoadingImg from "./Loading";
import { Link } from "react-router-dom";
class BookShelf extends Component {
  render() {
    const { books, onShelfChange } = this.props;
    if (books === null) {
      return <LoadingImg />;
    }
    return (
      <div className="bookshelf">
        <h1 className="bookshelf-heading">My Reads</h1>
        <div className="search-link-container">
          <Link to="/search" className="search-link">
            Search Books
          </Link>
        </div>
        <MyReads
          name="Currently Reading"
          books={books.filter(book => book.shelf === "currentlyReading")}
          onShelfChange={onShelfChange}
        />
        <MyReads
          name="Want To Read"
          books={books.filter(book => book.shelf === "wantToRead")}
          onShelfChange={onShelfChange}
        />
        <MyReads
          name="Read"
          books={books.filter(book => book.shelf === "read")}
          onShelfChange={onShelfChange}
        />
      </div>
    );
  }
}

export default BookShelf;
