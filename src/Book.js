import React, { Component } from "react";
import PropTypes from "prop-types";

class Book extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired
  };

  handleAuthorElement = book => {
    if (!book.authors) return;

    // go through each current book's author
    return book.authors.map(author => {
      return <span key={book.id + author}>{author}</span>;
    });
  };

  handleImageElement = book => {
    if (!book.imageLinks)
      return (
        <img
          src="assets/no-img-found.jpg"
          alt="no images found"
          className="no-img-found"
        />
      );

    return (
      <div
        className="book-image"
        style={{ backgroundImage: `url(${book.imageLinks.thumbnail})` }}
      />
    );
  };

  render() {
    const { books, onShelfChange } = this.props;

    return (
      <div className="books-container">
        <ul className="list-books">
          {books.map(book => (
            <li className="book" key={book.id}>
              {this.handleImageElement(book)}
              <p className="book-title">{book.title}</p>
              <p className="book-author">{this.handleAuthorElement(book)}</p>
              <p className="previewLink">
                <a href={book.previewLink} target="_blank">
                  Preview
                </a>
              </p>
              <select
                name={book.id}
                value={book.shelf || "none"}
                onChange={event => {
                  onShelfChange(book, event.target.value);
                }}
              >
                <option disabled="true" value="move-to">
                  Move To...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Book;
