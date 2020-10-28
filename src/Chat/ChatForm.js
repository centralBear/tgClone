import React, { useState } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import useStyles from "./useStyles";

function ChatForm({ user, authUser, onSend }) {
  const classes = useStyles();

  const [value, setValue] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    if (value.trim()) {
      onSend(value);
    }
    setValue("");
  };

  const onEnterPress = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      submitHandler(event);
    }
  };

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <form className={classes.chatForm} onSubmit={submitHandler}>
      <button
        className={cn(classes.chatProfileButton, classes.chatProfileButtonLeft)}
        type="button"
      >
        <img
          src={authUser.avatarUrl}
          alt="Your avatar"
          className={classes.messageFormAvatar}
        />
      </button>
      <div className={classes.chatFormWrapper}>
        <textarea
          value={value}
          onChange={onChange}
          className={classes.messageField}
          placeholder="Write a message..."
          onKeyPress={onEnterPress}
        />
        <div className={classes.messageControls}>
          <label htmlFor="file-input" className={classes.messageAttachLabel}>
            <input
              type="file"
              className={classes.messageAttach}
              id="file-input"
            />
            <svg className={classes.messageAttachIcon} viewBox="0 0 24 24">
              <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
            </svg>
          </label>
          <button className={classes.sendButton} type="submit">
            Send
          </button>
        </div>
      </div>
      <button
        className={cn(
          classes.chatProfileButton,
          classes.chatProfileButtonRight
        )}
        type="button"
      >
        <img
          src={user.avatarUrl}
          alt="Interlocutor avatar"
          className={classes.messageFormAvatar}
        />
      </button>
    </form>
  );
}

ChatForm.propTypes = {
  user: PropTypes.PropTypes.exact({
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
  authUser: PropTypes.exact({
    name: PropTypes.string,
    avatarUrl: PropTypes.string,
  }).isRequired,
  onSend: PropTypes.func.isRequired,
};

export default ChatForm;
