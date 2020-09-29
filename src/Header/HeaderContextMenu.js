import React from "react";

export default function HeaderContextMenu() {
  return (
    <button type="button" className="header-button header-context-button">
      <img
          className="header-context-icon"
          src="img/dots.svg"
          alt="Context menu icon"
        />
    </button>
  );
}
