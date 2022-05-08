import React from "react";
import NavigateToHomeBtn from "./navigateToHomeBtn/NavigateToHomeBtn";
import SearchShelf from "./searchShelf/SearchShelf";
import { PropTypes } from "prop-types";
import { Helmet } from "react-helmet-async";

const Search = ({
  handleSearchQuery,
  searchQuery,
  handleUpdateShelf,
  loadSearchData,
  mergedBooks,
}) => {
  return (
    <>
      <Helmet>
        <title>MyRead SearchPage</title>
        <link rel="canonical" href="/search" />
        <meta
          name="description"
          content="My Reads React SPA(provide search component navigate between shelves without reload page),it represents virtual bookcase to store your books and track what you're reading"
        />
        {/* this meta to prevent robots of searches to reach search page */}
        {/* <meta name="robots" content="noindex"/> */}
      </Helmet>
      <div className="search-books">
        <div className="search-books-bar">
          <NavigateToHomeBtn />
          <div className="search-books-input-wrapper">
            <input
              type="text"
              value={searchQuery}
              placeholder="Search by title, author, or ISBN"
              onChange={handleSearchQuery}
            />
          </div>
        </div>
        {/* Search Shelf */}
        <SearchShelf
          mergedBooks={mergedBooks}
          loadSearchData={loadSearchData}
          handleUpdateShelf={handleUpdateShelf}
        />
      </div>
    </>
  );
};

Search.propTypes = {
  handleSearchQuery: PropTypes.func.isRequired,
  searchQuery: PropTypes.string.isRequired,
  handleUpdateShelf: PropTypes.func.isRequired,
  loadSearchData: PropTypes.bool.isRequired,
  mergedBooks: PropTypes.array.isRequired,
};
export default Search;
