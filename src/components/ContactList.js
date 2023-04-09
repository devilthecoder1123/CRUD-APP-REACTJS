import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";
import { useContactsCrud } from "../context/ContactCrudContext";

const ContactList = () => {
  const {
    contacts,
    retrieveContacts,
    searchTerm,
    searchResults,
    searchHandler,
  } = useContactsCrud();

  useEffect(() => {
    retrieveContacts();
  }, );

  const renderContactList = (
    searchTerm.length < 1 ? contacts : searchResults
  ).map((contact) => {
    return <ContactCard contact={contact} key={contact.id} />;
  });
  const onUserSearch = (e) => {
    searchHandler(e.target.value);
  };
  return (
    <div className="main" style={{ position: "static" }}>
      <h2
        style={{
          marginTop: "50px",
        }}
      >
        Contact List
        <Link to="/add">
          <button className="ui violet right floated button">
            Add Contact
          </button>
        </Link>{" "}
      </h2>
      <div className="ui fluid category search">
        <div className="ui icon input">
          <input
            className="prompt"
            value={searchTerm}
            onChange={(e) => onUserSearch(e)}
            type="text"
            placeholder="Search contacts..."
          />
          <i className="search icon"></i>
        </div>
      </div>

      <div className="ui celled list">
        {renderContactList.length > 0
          ? renderContactList
          : "No Contacts Available"}
      </div>
    </div>
  );
};

export default ContactList;
