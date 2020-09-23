import React from "react";

export default function HeaderContextMenu() {
  return (
    <li className="header-list-item header-context">
      <button type="button" className="header-button header-context-button">
        <img
          src="img/dots.svg"
          width="30"
          height="30"
          alt="Context menu icon"
        />
      </button>
    </li>
  );
}
