import React, { useState } from "react";
import AuthorList from "./AuthorList";

const AuthorForm = () => {
  const [authorName, setAuthorName] = useState("");
  const [authors, setAuthors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAuthors([...authors, authorName]);
    setAuthorName("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div
          style={{
            padding: "10px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignContent: "center",
          }}
        >
          <label
            htmlFor="authorName"
            style={{
              alignSelf: "center",
            }}
          >
            Author Name:
          </label>
          <input
            type="text"
            placeholder="Enter author name"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {authors.length > 0 ? (
        <AuthorList authors={authors} listName={"Authors Submitted"} />
      ) : null}
    </div>
  );
};

export default AuthorForm;
