import React, { Component } from "react";
import { Link } from "react-router-dom";

class Error extends Component {
  render() {
    return (
      <div className="error-page">
        <div className="error-page--content">
          This page does not exist! Go back to your{" "}
          <Link to="/" className="bookshelf-link">
            {" "}
            Bookshelf
          </Link>
        </div>
      </div>
    );
  }
}

export default Error;
