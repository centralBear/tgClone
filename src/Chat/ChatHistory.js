import React from "react";
import * as R from "ramda";
import PropTypes from "prop-types";
import Message from "./Message";
import FirstMessage from "./FirstMessage";
import MessageDate from "./MessageDate";
import useStyles from "./useStyles";

function ChatHistory({ user, authUser }) {
  const classes = useStyles();

  const defaultPreviousIndex = R.defaultTo(0);

  const getPreviousDate = (message) => {
    if (message.id === 0) {
      return message.dateAndTime;
    }
    return user.messages[
      defaultPreviousIndex(
        R.findIndex(R.propEq("id", message.id - 1))(user.messages)
      )
    ].dateAndTime;
  };

  const isRenderDate = (message) =>
    new Date(message.dateAndTime).toDateString() !==
      new Date(getPreviousDate(message)).toDateString() || message.id === 0;

  return (
    <div className={classes.chatHistory}>
      <div className={classes.chatHistoryGap} />
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
                <MessageDate
                  dateAndTime={message.dateAndTime}
                  key={`date_${message.id}`}
                />
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
              <MessageDate
                dateAndTime={message.dateAndTime}
                key={`date_${message.id}`}
              />
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
        dateAndTime: PropTypes.string,
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
