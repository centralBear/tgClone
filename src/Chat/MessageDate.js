import React from "react";
import PropTypes from "prop-types";

function MessageDate({ dateAndTime }) {
  const formatedDate = () => {
    return new Date(dateAndTime).toLocaleDateString(undefined, {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return <p className="chat-date">{formatedDate()}</p>;
}

MessageDate.propTypes = {
  dateAndTime: PropTypes.string.isRequired,
};

export default MessageDate;
