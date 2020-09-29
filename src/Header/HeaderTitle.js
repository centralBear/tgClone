import React from "react";
import PropTypes from "prop-types";

function HeaderTitle({ selectedUser }) {
  return (
    <button type="button" className="header-button contact-info-button">
      <span className="header-contact-name">{selectedUser.name}</span>
      <span className="online-status">
        last seen&nbsp;
        {selectedUser.lastVisit}
      </span>
    </button>
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
        dateAndTime: PropTypes.string,
        isMessageFirst: PropTypes.bool,
      })
    ),
  }).isRequired,
};

export default HeaderTitle;
