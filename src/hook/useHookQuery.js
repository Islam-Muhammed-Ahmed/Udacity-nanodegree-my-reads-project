import { useState, useEffect } from "react";
import { search } from "../utils/BooksAPI";
import { useDebounce } from "use-debounce";

const useHookQuery = (searchQuery) => {
  const [searchBookQuery, setSearchBookQuery] = useState([]);
  const [valueSearch] = useDebounce(searchQuery, 500);
  // TODO: building func to keep track for search input val
  useEffect(() => {
    let isActive = true;
    if (valueSearch) {
      search(valueSearch).then((data) => {
        if (data.error) {
          setSearchBookQuery([]);
        } else {
          if (isActive) {
            setSearchBookQuery(data);
          }
        }
      });
    }
    return () => {
      isActive = false;
      setSearchBookQuery([]);
    };
  }, [valueSearch]);
  return [searchBookQuery, setSearchBookQuery];
};

export default useHookQuery;
