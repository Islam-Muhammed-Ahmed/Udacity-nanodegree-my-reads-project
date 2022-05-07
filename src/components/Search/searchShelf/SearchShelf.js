import React from "react";
import Book from "../../Home/Shelf/Book/Book";

const SearchShelf = ({
  searchBookQuery,
  handleUpdateShelf,
  noData,
  loadSearchData,
  mergedBooks,
}) => {
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {mergedBooks && loadSearchData
          ? mergedBooks.map((book) => {
              return (
                <>
                  <Book
                    key={book.id}
                    book={book}
                    handleUpdateShelf={handleUpdateShelf}
                  />
                </>
              );
            })
          : noData}
      </ol>
    </div>
  );
};

export default SearchShelf;
