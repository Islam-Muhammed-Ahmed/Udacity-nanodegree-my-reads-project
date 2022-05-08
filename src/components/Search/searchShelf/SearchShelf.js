import React from "react";
import Book from "../../Home/Shelf/Book/Book";
import { PropTypes } from "prop-types";

const SearchShelf = ({ handleUpdateShelf, loadSearchData, mergedBooks }) => {
  const noData = <div className="no_data">there's no data to show </div>;
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {mergedBooks && loadSearchData
          ? mergedBooks.map((book) => {
              return (
                <Book
                  key={book.id}
                  book={book}
                  handleUpdateShelf={handleUpdateShelf}
                />
              );
            })
          : noData}
      </ol>
    </div>
  );
};

SearchShelf.propTypes = {
  handleUpdateShelf: PropTypes.func.isRequired,
  loadSearchData: PropTypes.bool.isRequired,
  mergedBooks: PropTypes.array.isRequired,
};
export default SearchShelf;
