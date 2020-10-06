import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import useStyles from "./useStyles";

function ContactListItem({
  contactItem,
  onClick,
  authUserName,
  currentContactId,
}) {
  const classes = useStyles();

  const lastMessage = contactItem.messages[0];

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
    const d = new Date(lastMessage.dateAndTime);
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
    <li className={classes.contactItem}>
      <button
        type="button"
        onClick={onToggle}
        className={cn(
          classes.contactButton,
          contactItem.id === currentContactId
            ? classes.contactButtonActive
            : false
        )}
      >
        <img
          src={contactItem.avatarUrl}
          alt="User avatar"
          className={classes.contactAvatar}
        />
        <div className={classes.contactWrapper}>
          <p className={classes.contactName}>{contactItem.name}</p>
          <p className={classes.lastMessage}>
            {lastMessage.author === authUserName
              ? `You: ${lastMessage.text}`
              : lastMessage.text}
          </p>
        </div>
        <div>
          <p className={classes.lastMessageTime}>{formatedDateOrTime()}</p>
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
