import React from "react";
import { PropTypes } from "prop-types";
import BookShelfSelector from "./bookShelfSelectoe/BookShelfSelector";

const Book = ({ book, handleUpdateShelf }) => {
  //  TODO: building fuc to handle the change of the value of the book shelf
  const handleUpdateBookShelf = (e) => {
    const value = e.target.value;
    handleUpdateShelf(book, value);
  };

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks.thumbnail})`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <BookShelfSelector handleUpdateBookShelf={handleUpdateBookShelf} book={book} />
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors[0]}</div>
      </div>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  handleUpdateShelf: PropTypes.func.isRequired,
};
export default Book;
