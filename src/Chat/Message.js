import React from "react";
import PropTypes from "prop-types";

function Message({ message }) {
  return (
    <div className="message-wrapper">
      <div className="content-message-wrapper">
        <p className="message-text message-text--without-photo">
          {message.text}
        </p>
        <p className="message-time">{message.time}</p>
      </div>
    </div>
  );
}

Message.propTypes = {
  message: PropTypes.exact({
    id: PropTypes.number,
    author: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
    time: PropTypes.string,
    isMessageFirst: PropTypes.bool,
  }).isRequired,
};

export default Message;
