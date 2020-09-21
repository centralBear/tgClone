import React from "react";

export default function HeaderMainMenu() {
  return (
    <li className="header-list-item header-hamburger">
      <button type="button" className="header-hamburger-button header-button">
        <div className="header-hamburger-icon" />
        <img
          className="header-logo"
          src="img/Telegram.svg"
          width="62"
          height="14"
          alt="Telegram logo"
        />
      </button>
    </li>
  );
}
