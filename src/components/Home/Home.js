import React from "react";
import Shelf from "./Shelf/Shelf";
import { PropTypes } from "prop-types";
import NavigateToSearchBtn from "./navigateToSearcBtn/NavigateToSearchBtn";
import { Helmet } from "react-helmet-async";
const Home = ({ booksData, handleUpdateShelf }) => {
  return (
    <>
      <Helmet>
        <title>Udacity Nanodegree MyReads Project</title>
        <link rel="canonical" href="/" />
        <meta
          name="description"
          content="react js (navigation happens without the need to refresh pages), MyReads lets you manage your digital bookshelf"
        />
      </Helmet>
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
              titleName="Currently Reading"
              shelf="currentlyReading"
            />
            <Shelf
              handleUpdateShelf={handleUpdateShelf}
              booksData={booksData}
              titleName="Want To Read"
              shelf="wantToRead"
            />
            <Shelf
              handleUpdateShelf={handleUpdateShelf}
              booksData={booksData}
              titleName="Read"
              shelf="read"
            />
          </div>
        </div>
        <NavigateToSearchBtn />
      </div>
    </>
  );
};
Home.propTypes = {
  booksData: PropTypes.array.isRequired,
  handleUpdateShelf: PropTypes.func.isRequired,
};

export default Home;
