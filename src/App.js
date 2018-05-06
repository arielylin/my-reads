import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import SearchPage from "./Search";
import BookShelf from "./Bookshelf";

class App extends Component {
  render() {
    return (
      <div>
        <Route
          exact
          path="/"
          render={() => {
            return <BookShelf />;
          }}
        />
        <Route
          path="/search"
          render={() => (
            <div className="search-page">
              <SearchPage />
            </div>
          )}
        />
      </div>
    );
  }
}

export default App;
