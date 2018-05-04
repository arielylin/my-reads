import React, { Component } from "react";

class Book extends Component {
  handleAuthorElement = book => {
    // go through each current book's author
    return book.authors.map(author => {
      return <span key={book.id + author}>{author}</span>;
    });
  };

  render() {
    const { books, onShelfChange } = this.props;

    return (
      <div className="books-container">
        <ul className="list-books">
          {books.map(book => (
            <li className="book" key={book.id}>
              <div
                className="book-image"
                style={{ backgroundImage: `url(${book.imageLinks.thumbnail})` }}
              />
              <p className="book-title">{book.title}</p>
              <p className="book-author">{this.handleAuthorElement(book)}</p>
              <select
                name={book.id}
                defaultValue={book.shelf}
                onChange={event => {
                  onShelfChange(book, event.target.value);
                }}
              >
                <option disabled="true" value="none">
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
