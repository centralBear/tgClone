import React from "react";
import PropTypes from "prop-types";

function Message({ message }) {
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
        <p className="message-text message-text--without-photo">
          {message.text}
        </p>
        <p className="message-time">{formatedTime()}</p>
      </div>
    </div>
  );
}

Message.propTypes = {
  message: PropTypes.exact({
    id: PropTypes.number,
    author: PropTypes.string,
    text: PropTypes.string,
    dateAndTime: PropTypes.string,
    isMessageFirst: PropTypes.bool,
  }).isRequired,
};

export default Message;
