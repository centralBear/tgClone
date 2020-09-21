import React from "react";
import PropTypes from "prop-types";

function FirstMessage({ message, avatarUrl }) {
  return (
    <div className="message-wrapper">
      <div className="content-message-wrapper">
        <button type="button" className="profile-button">
          <img
            src={avatarUrl}
            className="contact-avatar contact-avatar--chat"
            width="42"
            height="42"
            alt="User avatar"
          />
        </button>
        <div className="message-text-wrapper">
          <button type="button" className="message-author-button">
            {message.author}
          </button>
          <p className="message-text">{message.text}</p>
        </div>
        <p className="message-time message-time--first">{message.time}</p>
      </div>
    </div>
  );
}

FirstMessage.propTypes = {
  message: PropTypes.exact({
    id: PropTypes.number,
    author: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
    time: PropTypes.string,
    isMessageFirst: PropTypes.bool,
  }).isRequired,
  avatarUrl: PropTypes.string.isRequired,
};

export default FirstMessage;
