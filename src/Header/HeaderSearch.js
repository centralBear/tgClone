import React from "react";

export default function HeaderSearch() {
  return (
    <li className="header-list-item header-search">
      <button type="button" className="header-button header-search-button">
        <img
          className="header-search-icon"
          src="img/search_white.svg"
          alt="Search icon"
        />
      </button>
    </li>
  );
}
