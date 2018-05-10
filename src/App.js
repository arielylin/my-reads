import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import SearchPage from "./Search";
import BookShelf from "./Bookshelf";
import * as BooksAPI from "./BooksAPI";
import Error from "./404";

class App extends Component {
  // set state in App.js because Search.js needs to know about this state
  state = {
    books: null
  };

  // get books from BooksAPI and set state to list of books
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books: books });
    });
  }

  handleChangeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      const books = this.state.books.map(currentBook => {
        if (currentBook.id === book.id) currentBook.shelf = shelf;
        return currentBook;
      });
      // set the state to re-render
      this.setState({
        books
      });
    });
  };

  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <BookShelf
                  books={this.state.books}
                  onShelfChange={this.handleChangeShelf}
                />
              );
            }}
          />
          <Route
            path="/search"
            render={() => (
              <div className="search-page">
                <SearchPage
                  books={this.state.books}
                  onShelfChange={this.handleChangeShelf}
                />
              </div>
            )}
          />
          <Route component={Error} />
        </Switch>
      </div>
    );
  }
}

export default App;
