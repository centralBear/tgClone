import React from "react";
import PropTypes from "prop-types";
import HeaderMainMenu from "./HeaderMainMenu";
import HeaderTitle from "./HeaderTitle";
import HeaderSearch from "./HeaderSearch";
import HeaderContextMenu from "./HeaderContextMenu";

function Header({ selectedUser }) {
  return (
    <header className="header">
      <ul className="header-list">
        <HeaderMainMenu />
        <HeaderTitle selectedUser={selectedUser} />
        <HeaderSearch />
        <HeaderContextMenu />
      </ul>
    </header>
  );
}

Header.propTypes = {
  selectedUser: PropTypes.exact({
    id: PropTypes.number,
    name: PropTypes.string,
    lastVisit: PropTypes.string,
    avatarUrl: PropTypes.string,
    messages: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.number,
        author: PropTypes.string,
        text: PropTypes.string,
        date: PropTypes.string,
        time: PropTypes.string,
        isMessageFirst: PropTypes.bool,
      })
    ),
  }).isRequired,
};

export default Header;
