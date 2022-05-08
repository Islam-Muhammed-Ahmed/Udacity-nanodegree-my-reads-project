import React from "react";
import NavigateToHomeBtn from "./navigateToHomeBtn/NavigateToHomeBtn";
import SearchShelf from "./searchShelf/SearchShelf";
import { PropTypes } from "prop-types";

const Search = ({
  handleSearchQuery,
  searchQuery,
  handleUpdateShelf,
  loadSearchData,
  mergedBooks,
}) => {
  return (
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
