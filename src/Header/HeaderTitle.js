import React from "react";
import PropTypes from "prop-types";

function HeaderTitle({ selectedUser }) {
  return (
    <li className="header-list-item contact-info">
      <button type="button" className="header-button contact-info-button">
        <span className="header-contact-name">{selectedUser.name}</span>
        <span className="online-status">
          last seen&nbsp;
          {selectedUser.lastVisit}
        </span>
      </button>
    </li>
  );
}

HeaderTitle.propTypes = {
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

export default HeaderTitle;
