import React from "react";
import Shelf from "./Shelf/Shelf";
import { PropTypes } from "prop-types";
import NavigateToSearchBtn from "./navigateToSearcBtn/NavigateToSearchBtn";

const Home = ({ booksData, handleUpdateShelf }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {/* shelves */}
          <Shelf
            handleUpdateShelf={handleUpdateShelf}
            booksData={booksData}
            TitleName="Currently Reading"
            shelf="currentlyReading"
          />
          <Shelf
            handleUpdateShelf={handleUpdateShelf}
            booksData={booksData}
            TitleName="Want To Read"
            shelf="wantToRead"
          />
          <Shelf
            handleUpdateShelf={handleUpdateShelf}
            booksData={booksData}
            TitleName="Read"
            shelf="read"
          />
        </div>
      </div>
      <NavigateToSearchBtn />
    </div>
  );
};
Home.propTypes = {
  booksData: PropTypes.array.isRequired,
  handleUpdateShelf: PropTypes.func.isRequired,
};

export default Home;
