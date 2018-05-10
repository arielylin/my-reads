import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import SearchLibrary from "./SearchLib";
import { Link } from "react-router-dom";
import { DebounceInput } from "react-debounce-input";

class SearchPage extends Component {
  state = {
    query: "",
    results: []
  };

  // set state to user's input
  updateQuery = query => {
    this.setState(() => ({
      query: query
    }));
    this.getBooks(query);
  };

  getBooks = query => {
    // if empty query set state to empty array
    if (!query) {
      this.setState({ results: [] });
      return;
    }

    BooksAPI.search(query).then(results => {
      // if the item you search for doesnt exist set state to empty array
      if (results.error) {
        this.setState({
          results: []
        });
      } else {
        // go through each results find the matching book
        // should just have one book , set that result to have a shelf that matches the book's shelf
        results.forEach(result => {
          const matching = this.props.books.find(book => book.id === result.id);
          if (matching) {
            result.shelf = matching.shelf;
          }
        });

        this.setState({ results: results });
      }
    });
  };

  handleChangeShelf = (book, shelf) => {
    const results = this.state.results.map(currentBook => {
      if (currentBook.id === book.id) {
        currentBook.shelf = shelf;
      }
      return currentBook;
    });
    // set the state to re-render
    this.setState({
      results
    });

    this.props.onShelfChange(book, shelf);
  };

  render() {
    const { query, results } = this.state;

    return (
      <div className="search-page">
        <h1 className="search-page-heading">Search</h1>
        <DebounceInput
          debounceTimeout={300}
          className="search-books"
          type="type"
          placeholder="Search Books"
          value={query}
          onChange={event => this.updateQuery(event.target.value)}
        />
        <Link to="/" className="bookshelf-link">
          Go to My Bookshelf
        </Link>
        <div className="list-of-books">
          <SearchLibrary
            books={results}
            onShelfChange={this.handleChangeShelf}
          />
        </div>
        {!results.length && (
          <div className="search-error">
            No Books Listed. Try searching for books!
          </div>
        )}
      </div>
    );
  }
}

export default SearchPage;
