import React from "react";

export default function HeaderSearch() {
  return (
    <li className="header-list-item header-search">
      <button type="button" className="header-button header-search-button">
        <img
          src="img/search_white.svg"
          width="30"
          height="30"
          alt="Search icon"
        />
      </button>
    </li>
  );
}
