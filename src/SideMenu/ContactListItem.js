import React from "react";
import PropTypes from "prop-types";

const classNames = require("classnames");

function ContactListItem({
  contactItem,
  onClick,
  authUserName,
  currentContactId,
}) {
  const isContactActive = () => {
    if (contactItem.id === currentContactId) {
      return "contact-button-active";
    }
    return false;
  };

  const lastMessage = () => {
    return contactItem.messages[0];
  };

  const onToggle = () => {
    onClick(contactItem.id);
  };

  const formatedTime = (date) => {
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours %= 12;
    hours = hours || 12;
    const time = `${hours}:${minutes} ${ampm}`;
    return time;
  };

  const formatedWeekDay = (date) => {
    return date.toLocaleDateString(undefined, { weekday: "short" });
  };

  const formatedDate = (date) => {
    return [date.getDate(), date.getMonth() + 1, date.getFullYear()]
      .map((n) => `${n}`)
      .join("/");
  };

  const formatedDateOrTime = () => {
    const d = new Date(lastMessage().dateAndTime);
    const now = new Date().getTime();
    if (d.getTime() + 86400000 > now) {
      return formatedTime(d);
    }
    if (d.getTime() + 604800000 > now) {
      return formatedWeekDay(d);
    }
    return formatedDate(d);
  };

  return (
    <li className="contact-item">
      <button
        type="button"
        className={classNames("contact-button", isContactActive())}
        onClick={onToggle}
      >
        <img
          src={contactItem.avatarUrl}
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
          <p className="last-message-time">{formatedDateOrTime()}</p>
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
        dateAndTime: PropTypes.string,
        isMessageFirst: PropTypes.bool,
      })
    ),
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  authUserName: PropTypes.string.isRequired,
  currentContactId: PropTypes.number.isRequired,
};

export default ContactListItem;
