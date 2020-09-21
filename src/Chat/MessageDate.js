import React from "react";
import PropTypes from "prop-types";

function MessageDate({ date }) {
  return <p className="chat-date">{date}</p>;
}

MessageDate.propTypes = {
  date: PropTypes.string.isRequired,
};

export default MessageDate;
