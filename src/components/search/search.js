import React from "react";
import { Form } from "react-bootstrap";

import "./search.css";

const Search = ({ title, setTitle }) => {
  const handleChangeSearch = (e) => {
    setTitle(e.target.value);
  };
  return (
    <div>
      <Form.Control
        type="text"
        className="search"
        onChange={handleChangeSearch}
        value={title}
        placeholder="Readonly input here..."
      />
    </div>
  );
};

export default Search;
