import React from "react";
import PropTypes from "prop-types";
import ChatHistory from "./ChatHistory";
import ChatForm from "./ChatForm";

function Chat({ selectedUser, authUser, onSend }) {
  return (
    <div className="chat">
      <ChatHistory user={selectedUser} authUser={authUser} />
      <ChatForm user={selectedUser} authUser={authUser} onSend={onSend} />
    </div>
  );
}

Chat.propTypes = {
  selectedUser: PropTypes.exact({
    id: PropTypes.number,
    name: PropTypes.string,
    lastVisit: PropTypes.string,
    avatarUrl: PropTypes.string,
    messages: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.number,
        author: PropTypes.string,
        text: PropTypes.string,
        date: PropTypes.string,
        time: PropTypes.string,
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

export default Chat;
