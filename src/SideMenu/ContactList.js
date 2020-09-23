import React from "react";
import PropTypes from "prop-types";
import ContactListItem from "./ContactListItem";

function ContactList({ contactList, onClick, authUserName, currentContactId }) {
  return (
    <ul className="contact-list">
      {contactList.map((contactItem) => (
        <ContactListItem
          contactItem={contactItem}
          authUserName={authUserName}
          key={contactItem.id}
          onClick={onClick}
          currentContactId={currentContactId}
        />
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contactList: PropTypes.arrayOf(
    PropTypes.exact({
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
    })
  ).isRequired,
  onClick: PropTypes.func.isRequired,
  authUserName: PropTypes.string.isRequired,
  currentContactId: PropTypes.number.isRequired,
};

export default ContactList;
