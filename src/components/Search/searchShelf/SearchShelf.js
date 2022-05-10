import React, { useDeferredValue } from "react";
import Book from "../../Home/Shelf/Book/Book";
import { PropTypes } from "prop-types";

const SearchShelf = ({ handleUpdateShelf, searchQuery, mergedBooks }) => {
  const noData = <div className="no_data">there's no data to show </div>;

  // TODO: trying to filter data that come from merged box to check if the array has the value which type by user
  //note: but it failed :(
  // const filtrationDataQuery =
  //   !searchQuery && mergedBooks
  //     ? mergedBooks.filter(
  //         (book) =>
  //           book.title.includes(searchQuery) ||
  //           book.authors.includes(searchQuery)
  //       )
  //     : mergedBooks;
  // TODO: trying to use the new hook useDeferredValue
  /*from react docs:
  Returns a deferred version of the value that may “lag behind” it.
  This is commonly used to keep the interface responsive when you have something that renders immediately 
  based on user input and something that needs to wait for a data fetch. 
  */

  const deferredMergedBooks = useDeferredValue(mergedBooks);
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {deferredMergedBooks && searchQuery
          ? deferredMergedBooks.map((book) => {
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
  mergedBooks: PropTypes.array.isRequired,
  searchQuery: PropTypes.string,
};
export default SearchShelf;
