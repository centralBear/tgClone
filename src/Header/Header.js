import React from "react";
import PropTypes from "prop-types";
import HeaderMainMenu from "./HeaderMainMenu";
import HeaderTitle from "./HeaderTitle";
import HeaderSearch from "./HeaderSearch";
import HeaderContextMenu from "./HeaderContextMenu";
import useStyles from "./useStyles";

function Header({ selectedUser }) {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <HeaderMainMenu />
      <HeaderTitle selectedUser={selectedUser} />
      <HeaderSearch />
      <HeaderContextMenu />
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
        dateAndTime: PropTypes.string,
        isMessageFirst: PropTypes.bool,
      })
    ),
  }).isRequired,
};

export default Header;
