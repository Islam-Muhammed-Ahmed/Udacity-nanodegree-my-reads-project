import React from "react";
import Book from "./Book/Book";
import { PropTypes } from "prop-types";

const Shelf = ({ titleName, booksData, shelf, handleUpdateShelf }) => {
  /* TODO: 
    before passing data to the book component we have to make filtration to the data,
    data must be passed depends om it's state as currently reading, want to read or read
    this depends on our selection which passe from shelf
  */
  const bookShelf = booksData.filter((book) => book.shelf === shelf);

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{titleName}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {bookShelf.map((book) => (
            <div key={book.id}>
              <Book book={book} handleUpdateShelf={handleUpdateShelf} />
            </div>
          ))}
        </ol>
      </div>
    </div>
  );
};

Shelf.propTypes = {
  titleName: PropTypes.string.isRequired,
  booksData: PropTypes.array.isRequired,
  handleUpdateShelf: PropTypes.func.isRequired,
  shelf: PropTypes.string.isRequired,
};
export default Shelf;
