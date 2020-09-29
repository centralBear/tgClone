import React from "react";

export default function HeaderMainMenu() {
  return (
    <button type="button" className="header-hamburger-button header-button">
      <div className="header-hamburger-icon" />
      <img
          className="header-logo"
          src="img/Telegram.svg"
          alt="Telegram logo"
        />
    </button>
  );
}
