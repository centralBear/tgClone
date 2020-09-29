import React from "react";
import PropTypes from "prop-types";

function FirstMessage({ message, avatarUrl }) {
  const formatedTime = () => {
    const d = new Date(message.dateAndTime);
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours %= 12;
    hours = hours || 12;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    const time = `${hours}:${minutes}:${seconds} ${ampm}`;
    return time;
  };

  return (
    <div className="message-wrapper">
      <div className="content-message-wrapper">
        <button type="button" className="profile-button">
          <img
            src={avatarUrl}
            className="contact-avatar contact-avatar--chat"
            alt="User avatar"
          />
        </button>
        <div className="message-text-wrapper">
          <button type="button" className="message-author-button">
            {message.author}
          </button>
          <p className="message-text">{message.text}</p>
        </div>
        <p className="message-time message-time--first">{formatedTime()}</p>
      </div>
    </div>
  );
}

FirstMessage.propTypes = {
  message: PropTypes.exact({
    id: PropTypes.number,
    author: PropTypes.string,
    text: PropTypes.string,
    dateAndTime: PropTypes.string,
    isMessageFirst: PropTypes.bool,
  }).isRequired,
  avatarUrl: PropTypes.string.isRequired,
};

export default FirstMessage;
