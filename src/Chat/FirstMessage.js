import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import useStyles from "./useStyles";

function FirstMessage({ message, avatarUrl }) {
  const classes = useStyles();

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
    <div className={classes.messageWrapper}>
      <div className={classes.contentMessageWrapper}>
        <button type="button" className={classes.profileButton}>
          <img
            src={avatarUrl}
            className={cn(classes.contactAvatar, classes.contactAvatarChat)}
            alt="User avatar"
          />
        </button>
        <div className="message-text-wrapper">
          <button type="button" className={classes.messageAuthorButton}>
            {message.author}
          </button>
          <p className={classes.messageText}>{message.text}</p>
        </div>
        <p className={classes.messageTime}>{formatedTime()}</p>
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
