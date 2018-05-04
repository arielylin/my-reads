import React, { Component } from "react";
import MyReads from "./MyReadsPage";
import * as BooksAPI from "./BooksAPI";
import LoadingImg from "./Loading";
import { Link } from "react-router-dom";

class BookShelf extends Component {
  state = {
    books: null
  };

  // get books from BooksAPI and set state to list of books
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books: books });
    });
  }

  // move book on option change
  handleChangeShelf = (book, shelf) => {
    //go through books in array and if the book you're mapping through's id matches the current book you've clicked on, then change the mapped book shelf to the current shelf (target's value) and return it.
    const books = this.state.books.map(currentBook => {
      if (currentBook.id === book.id) currentBook.shelf = shelf;
      return currentBook;
    });
    // set the state to re-render
    this.setState({
      books
    });
  };

  render() {
    const { books } = this.state;
    if (books === null) {
      return <LoadingImg />;
    }
    return (
      <div className="bookshelf">
        <h1 className="bookshelf-heading">My Reads</h1>
        <Link to="/search" className="search-link">
          Search Books
        </Link>
        <MyReads
          name="Currently Reading"
          books={books.filter(book => book.shelf === "currentlyReading")}
          onShelfChange={this.handleChangeShelf}
        />
        <MyReads
          name="Want To Read"
          books={books.filter(book => book.shelf === "wantToRead")}
          onShelfChange={this.handleChangeShelf}
        />
        <MyReads
          name="Read"
          books={books.filter(book => book.shelf === "read")}
          onShelfChange={this.handleChangeShelf}
        />
      </div>
    );
  }
}

export default BookShelf;
