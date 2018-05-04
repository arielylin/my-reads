import React, { Component } from "react";

class SearchPage extends Component {
  state = {
    query: "",
    results: []
  };

  updateQuery = query => {
    this.setState(() => ({
      query: query.trim()
    }));
    // in the update query function above fire off API "search" request
    // add another method called Update Results and take query as the argument and using that get the results and update the state to be the array of results based on the query
  };

  render() {
    const { query } = this.state;

    return (
      <div className="search-page">
        <h1 className="search-page-heading">Search</h1>
        <input
          className="search-books"
          type="type"
          placeholder="Search Books"
          value={query}
          // add on change function
        />
      </div>
    );
  }
}

export default SearchPage;
