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
        this.setState({books: books})
      })
  }

  // move book on option change
  handleChangeShelf = (books) => {
    console.log(books)
      this.setState(prevState => {
        
      })
  }


  render() {
    const { books } = this.state;
    console.log(books)
    
    return (
      <div>
        <div className="bookshelf">
          <h1 className="bookshelf-heading">
            My Reads
          </h1>
          <MyReads
            name="Currently Reading"
            books={books.filter(book => book.shelf === 'currentlyReading')}
            onShelfChange={this.handleChangeShelf}
          />
          <MyReads
            name="Want To Read"
            books={books.filter(book => book.shelf === 'wantToRead')}
            onShelfChange={this.handleChangeShelf}
          />
          <MyReads
            name="Read"
            books={books.filter(book => book.shelf === 'read')}
            onShelfChange={this.handleChangeShelf}
          />
        </div>
        <div className="search-page">
        </div>
      </div>
    );
  }
}

export default App;
