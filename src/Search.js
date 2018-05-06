import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";

class SearchPage extends Component {
  state = {
    query: "",
    results: []
  };

  updateQuery = query => {
    this.setState(() => ({
      query: query
    }));
    this.getBooks(query)
  };
  
  getBooks = query => {
      BooksAPI.search(query).then(results => {
      this.setState({results: results});
      console.log(query)
      console.log(this.state.results)
    });
  }


  // add another method called Update Results and take query as the argument and using that get the results and update the state to be the array of results based on the query

  
  render() {

    const { query, results } = this.state;
    

    return (
      <div className="search-page">
        <h1 className="search-page-heading">Search</h1>
        <input
          className="search-books"
          type="type"
          placeholder="Search Books"
          value={query}
          onChange={event => this.updateQuery(event.target.value)}
        />
      </div>
    );
  }
}

export default SearchPage;
