import { useState } from "react";
import AuthorList from "./AuthorList";
import axios from "axios";

const FetchedAuthorList = () => {
  const [authors, setAuthors] = useState([]);

  function getAuthors() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const fetchedAuthors = response.data.map((user) => user.name);
        setAuthors(fetchedAuthors);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  return authors.length > 0 ? (
    <AuthorList authors={authors} listName={"Authors Fetched"} />
  ) : (
    <button
      type="submit"
      onClick={getAuthors}
      style={{ justifySelf: "stretch" }}
    >
      Fetch
    </button>
  );
};

export default FetchedAuthorList;
