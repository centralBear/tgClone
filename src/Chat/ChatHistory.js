import React from "react";
import * as R from "ramda";
import PropTypes from "prop-types";
import Message from "./Message";
import FirstMessage from "./FirstMessage";
import MessageDate from "./MessageDate";

function ChatHistory({ user, authUser }) {
  const getPreviousDate = (message) => {
    if (message.id === 0) {
      return message.date;
    }
    return user.messages[
      R.findIndex(R.propEq("id", message.id - 1))(user.messages)
    ].date;
  };

  const isRenderDate = (message) => {
    if (message.date !== getPreviousDate(message) || message.id === 0) {
      return true;
    }
    return false;
  };

  return (
    <div className="chat-history">
      <div className="chat-history-gap" />
      {user.messages.map((message) => {
        if (isRenderDate(message)) {
          if (message.author === authUser.name) {
            return (
              <React.Fragment key={`fragment_${message.id}`}>
                <FirstMessage
                  message={message}
                  avatarUrl={authUser.avatarUrl}
                  key={`message_${message.id}`}
                />
                <MessageDate date={message.date} key={`date_${message.id}`} />
              </React.Fragment>
            );
          }
          return (
            <React.Fragment key={`fragment_${message.id}`}>
              <FirstMessage
                message={message}
                avatarUrl={user.avatarUrl}
                key={`message ${message.id}`}
              />
              <MessageDate date={message.date} key={`date_${message.id}`} />
            </React.Fragment>
          );
        }
        if (message.isMessageFirst) {
          if (message.author === authUser.name) {
            return (
              <FirstMessage
                message={message}
                avatarUrl={authUser.avatarUrl}
                key={`message_${message.id}`}
              />
            );
          }
          return (
            <FirstMessage
              message={message}
              avatarUrl={user.avatarUrl}
              key={`message_${message.id}`}
            />
          );
        }
        return <Message message={message} key={`message_${message.id}`} />;
      })}
    </div>
  );
}

ChatHistory.propTypes = {
  user: PropTypes.exact({
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
};

export default ChatHistory;
