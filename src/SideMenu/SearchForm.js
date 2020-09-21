import React from "react";

export default function SearchForm() {
  return (
    <form className="search-form">
      <input
        className="search-input"
        type="text"
        name="search"
        placeholder="Search"
        autoComplete="off"
        id="search"
      />
    </form>
  );
}
