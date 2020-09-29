import React from "react";
import PropTypes from "prop-types";
import SearchForm from "./SearchForm";
import ContactList from "./ContactList";

function SideMenu({ contactList, onClick, authUserName, currentContactId }) {
  return (
    <div className="side-menu">
      <SearchForm />
      <ContactList
        contactList={contactList}
        onClick={onClick}
        authUserName={authUserName}
        currentContactId={currentContactId}
      />
    </div>
  );
}

SideMenu.propTypes = {
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
          dateAndTime: PropTypes.string,
          isMessageFirst: PropTypes.bool,
        })
      ),
    })
  ).isRequired,
  onClick: PropTypes.func.isRequired,
  authUserName: PropTypes.string.isRequired,
  currentContactId: PropTypes.number.isRequired,
};

export default SideMenu;
