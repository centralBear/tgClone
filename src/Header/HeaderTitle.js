import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import useStyles from "./useStyles";

function HeaderTitle({ selectedUser }) {
  const classes = useStyles();

  return (
    <div className={classes.contactInfoWrapper}>
      <button
        type="button"
        className={cn(classes.button, classes.contactInfoButton)}
      >
        <span className={classes.contactName}>{selectedUser.name}</span>
        <span className={classes.onlineStatus}>
          last seen&nbsp;
          {selectedUser.lastVisit}
        </span>
      </button>
    </div>
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
