import React, { Component } from 'react';
import './App.css';
// import { Route } from 'react-router-dom';
import MyReads from './MyReadsPage';
import * as BooksAPI from './BooksAPI';

class App extends Component {
  state = {
    books: []
  }

  // get books from BooksAPI and set state to list of books
  componentDidMount() {
      BooksAPI.getAll().then((books) => {
        this.setState({books})
      })
  }

  render() {
    const { books } = this.state;
    console.log(books)

    return (
      <div>
        <div className="bookshelf">
          <MyReads
            name="Currently Reading"
            books={books.filter(book => book.shelf === 'currentlyReading')}
          />
          <MyReads
            name="Want To Read"
            books={books.filter(book => book.shelf === 'wantToRead')}
          />
          <MyReads
            name="Read"
            books={books.filter(book => book.shelf === 'read')}
          />
        </div>
        <div className="search-page">
        </div>
      </div>
    );
  }
}

export default App;
