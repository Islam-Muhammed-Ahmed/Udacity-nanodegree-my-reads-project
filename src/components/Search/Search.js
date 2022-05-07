import React from "react";
import NavigateToHomeBtn from "./navigateToHomeBtn/NavigateToHomeBtn";
import SearchShelf from "./searchShelf/SearchShelf";

const Search = ({
  handleSearchQuery,
  searchQuery,
  searchBookQuery,
  handleUpdateShelf,
  loadSearchData,
  mergedBooks,
}) => {
  const noData = <div className="no_data">there's no data to show </div>;
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
        noData={noData}
        searchBookQuery={searchBookQuery}
        handleUpdateShelf={handleUpdateShelf}
      />
    </div>
  );
};

export default Search;
