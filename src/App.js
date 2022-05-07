import "./css/App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getAll, update, search } from "./utils/BooksAPI";
import Home from "./components/Home/Home";
import Search from "./components/Search/Search";
import Error from "./common/Error/Error";

function App() {
  /* TODO: importing all functions from the BooksAPI as BooksAPI
            storing the data from Api in variable name booksData in array
  */
  const [booksData, setBooksData] = useState([]);
  // TODO: variable to handle Search state
  const [searchQuery, setSearchQuery] = useState("react");
  const [searchBookQuery, setSearchBookQuery] = useState([]);
  // TODO: async func to grab the data from the Api
  const getAllBooksData = async () => {
    await getAll().then((res) => setBooksData(res));
  };
  // TODO: importing update func  from bookAPI and call getAllBooksData to update the state
  const handleUpdateShelf = async (book, shelf) => {
    await update(book, shelf);
    await getAllBooksData();
  };
  // TODO: building func to keep track for search input val
  const handleBookSearchQuery = async (query, maxResults) => {
    await search(query, maxResults).then((res) => console.log(res));
  };
  const handleSearchQuery = async (e) => {
    let inputValue = e.target.value;
    setSearchQuery(inputValue);
    await handleBookSearchQuery(searchQuery);
  };
  
  // TODO: testing the data fetched successfully or n't and search Input
  console.log(booksData, searchQuery, searchBookQuery);
  // TODO: fire functions in the useEffect to render in the first time app run and this is the lifecycle
  useEffect(() => {
    getAllBooksData();
  }, []);
  return (
    <div className="app">
      <Routes>
        <Route
          path="/search"
          element={
            <Search
              searchBookQuery={searchBookQuery}
              searchQuery={searchQuery}
              handleSearchQuery={handleSearchQuery}
            />
          }
        />
        <Route
          path="/"
          element={
            <Home booksData={booksData} handleUpdateShelf={handleUpdateShelf} />
          }
        />
        {/* error component this will redirect any one who writes wrong url to an error page  */}
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
