import React from "react";
import PropTypes from "prop-types";

function ContactListItem({
  contactItem,
  onClick,
  authUserName,
  currentContactId,
}) {
  const classes = [];

  if (contactItem.id === currentContactId) {
    classes.push("contact-button-active");
  }

  const onToggle = (id) => {
    onClick(id);
  };

  const lastMessage = () => {
    return contactItem.messages[0];
  };

  return (
    <li className="contact-item">
      <button
        type="button"
        className={`${classes.join(" ")} contact-button`}
        onClick={() => onToggle(contactItem.id)}
      >
        <img
          src={contactItem.avatarUrl}
          width="48"
          height="48"
          alt="User avatar"
          className="contact-avatar"
        />
        <div className="contact-wrapper">
          <p className="contact-name">{contactItem.name}</p>
          <p className="last-message">
            {lastMessage().author === authUserName
              ? `You: ${lastMessage().text}`
              : lastMessage().text}
          </p>
        </div>
        <div className="messages-info-wrapper">
          <p className="last-message-time">{lastMessage().time}</p>
        </div>
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  contactItem: PropTypes.exact({
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
  onClick: PropTypes.func.isRequired,
  authUserName: PropTypes.string.isRequired,
  currentContactId: PropTypes.number.isRequired,
};

export default ContactListItem;
