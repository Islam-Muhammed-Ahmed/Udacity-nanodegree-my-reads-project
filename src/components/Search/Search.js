import React from "react";
import { NavLink } from "react-router-dom";

const Search = ({ handleSearchQuery, searchQuery, searchBookQuery }) => {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <NavLink to="/" className="close-search">
          Close
        </NavLink>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            value={searchQuery}
            placeholder="Search by title, author, or ISBN"
            onChange={handleSearchQuery}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchBookQuery.map((book) => (
            <span>{book.title}</span>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Search;
