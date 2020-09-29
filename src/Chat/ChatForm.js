import React, { useState } from "react";
import PropTypes from "prop-types";

function ChatForm({ user, authUser, onSend }) {
  const [value, setValue] = useState("");

  const submitkHandler = (event) => {
    event.preventDefault();
    if (value.trim()) {
      onSend(value);
    }
    setValue("");
  };

  const onClick = (event) => {
    event.preventDefault();
    if (value.trim()) {
      onSend(value);
    }
    setValue("");
  };

  const onEnterPress = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      submitkHandler(event);
    }
  };


  const onChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <form className="chat-form" onSubmit={submitHandler}>

      <button
        className="chat-profile-button chat-profile-button--left"
        type="button"
      >
        <img
          src={authUser.avatarUrl}
          alt="Your avatar"
          className="message-form-avatar"
        />
      </button>
      <div className="chat-form-wrapper">
        <textarea
          value={value}
          onChange={onChange}
          className="message-field"
          placeholder="Write a message..."
          onKeyPress={onEnterPress}
        />
        <div className="message-controls">
          <label htmlFor="file-input" className="message-attach-label">
            <input type="file" className="message-attach" id="file-input" />
            <svg className="message-attach-icon" viewBox="0 0 24 24">
              <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
            </svg>
          </label>
          <button className="chat-send-button" type="submit">
            Send
          </button>
        </div>
      </div>
      <button
        className="chat-profile-button chat-profile-button--right"
        type="button"
      >
        <img
          src={user.avatarUrl}
          alt="Interlocutor avatar"
          className="message-form-avatar"
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
