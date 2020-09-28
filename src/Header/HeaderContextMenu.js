import React from "react";

export default function HeaderContextMenu() {
  return (
    <li className="header-list-item header-context">
      <button type="button" className="header-button header-context-button">
        <img
          className="header-context-icon"
          src="img/dots.svg"
          alt="Context menu icon"
        />
      </button>
    </li>
  );
}
