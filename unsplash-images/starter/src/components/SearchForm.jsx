import React, { useState } from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const [input, setInput] = useState("");
  const { setSearchValue } = useGlobalContext();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSearchValue(input);
    setInput("");
  };
  return (
    <form className="search-form" onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="search"
        className="form-input search-input"
        placeholder="cat"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button type="submit" className="btn">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
