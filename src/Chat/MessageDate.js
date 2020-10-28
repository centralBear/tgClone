import React from "react";
import PropTypes from "prop-types";
import useStyles from "./useStyles";

function MessageDate({ dateAndTime }) {
  const classes = useStyles();

  const formatedDate = () => {
    return new Date(dateAndTime).toLocaleDateString(undefined, {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return <p className={classes.date}>{formatedDate()}</p>;
}

MessageDate.propTypes = {
  dateAndTime: PropTypes.string.isRequired,
};

export default MessageDate;
