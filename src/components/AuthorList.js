import React from "react";

const AuthorList = ({ authors, listName }) => {
  return (
    <div>
      <ul>
        <h2>{listName}</h2>
        {authors.map((author, index) => (
          <li key={index}>{author}</li>
        ))}
      </ul>
    </div>
  );
};

export default AuthorList;
