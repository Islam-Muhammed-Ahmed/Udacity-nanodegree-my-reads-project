import "./css/App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import * as BooksAPI from "./utils/BooksAPI";
import Home from "./components/Home/Home";
import Search from "./components/Search/Search";
import Error from "./common/Error/Error";
import { useDebounce } from "use-debounce";

function App() {
  /* TODO: importing all functions from the BooksAPI as BooksAPI
            storing the data from Api in variable name booksData in array
  */
  const [booksData, setBooksData] = useState([]);
  // TODO: variable to handle Search state
  const [searchQuery, setSearchQuery] = useState("");
  const [valueSearch] = useDebounce(searchQuery, 500);
  const [searchBookQuery, setSearchBookQuery] = useState([]);
  const [loadSearchData, setLoadSearchData] = useState(false);
  //TODO: creating variables to add property shelf to the new selected book to the shelf
  const [mergedBooks, setMergedBooks] = useState([]);
  const [mapOfIdBooks, setMapOfIdBooks] = useState(new Map());
  // TODO: async func to grab the data from the Api
  const getAllBooksData = async () => {
    await BooksAPI.getAll().then((res) => {
      setBooksData(res);
      setMapOfIdBooks(createMapOfBooks(res));
    });
  };
  // TODO: importing update func  from bookAPI and call getAllBooksData to update the state
  const handleUpdateShelf = async (book, shelf) => {
    await BooksAPI.update(book, shelf);
    await getAllBooksData();
  };
  // TODO: building func to keep track for search input val
  const handleBookSearchQuery = async () => {
    await BooksAPI.search(valueSearch).then((data) => {
      if (data && !data.error) {
        setSearchBookQuery(data);
        setLoadSearchData(true);
      } else {
        setSearchBookQuery([]);
        setLoadSearchData(false);
      }
    });
  };
  const handleSearchQuery = async (e) => {
    let inputValue = e.target.value;
    setSearchQuery(inputValue);
    await handleBookSearchQuery(valueSearch);
  };
  /* TODO: create new map of books to get the new data updated
  with the new shelf you choose 1. map 2. create constant to check 
  if the data that return from the api has the same id if it's get it and start update
*/
  const createMapOfBooks = (books) => {
    const map = new Map();
    books.map((book) => map.set(book.id, book));
    return map;
  };
  const combiningBooksShelf = searchBookQuery.map((book) => {
    if (mapOfIdBooks.has(book.id)) {
      return mapOfIdBooks.get(book.id);
    } else {
      return book;
    }
  });

  // TODO: testing the data fetched successfully or n't and search Input
  // console.log(booksData, valueSearch, searchBookQuery, mergedBooks);
  // TODO: fire functions in the useEffect to render in the first time app run and this is the lifecycle
  useEffect(() => {
    getAllBooksData();
    handleBookSearchQuery();
    setMergedBooks(combiningBooksShelf);
  }, [valueSearch]);

  return (
    <div className="app">
      <Routes>
        <Route
          path="/search"
          element={
            <Search
              mergedBooks={mergedBooks}
              loadSearchData={loadSearchData}
              searchBookQuery={searchBookQuery}
              searchQuery={searchQuery}
              handleSearchQuery={handleSearchQuery}
              handleUpdateShelf={handleUpdateShelf}
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
