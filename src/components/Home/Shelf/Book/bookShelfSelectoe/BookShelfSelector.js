import React from "react";
import { PropTypes } from "prop-types";

const BookShelfSelector = ({ handleUpdateBookShelf, book }) => {
  return (
    <select
      onChange={handleUpdateBookShelf}
      value={book.shelf ? book.shelf : "none"}
    >
      <option value="none" disabled>
        Move to...
      </option>
      <option value="currentlyReading">Currently Reading</option>
      <option value="wantToRead">Want to Read</option>
      <option value="read">Read</option>
      <option value="none">None</option>
    </select>
  );
};

BookShelfSelector.propTypes = {
  book: PropTypes.object.isRequired,
  handleUpdateBookShelf: PropTypes.func.isRequired,
};
export default BookShelfSelector;
