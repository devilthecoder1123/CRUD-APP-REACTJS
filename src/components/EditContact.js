import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useContactsCrud } from "../context/ContactCrudContext";

const EditContact = (props) => {
  const location = useLocation();
  const { id, name, email } = location.state.contact;
  const [newName, setName] = useState(name);
  const [newEmail, setEmail] = useState(email);

  const navigate = useNavigate();
  const { updateContactHandler } = useContactsCrud();
  const update = (e) => {
    e.preventDefault();
    if (newName === "" || newEmail === "") {
      alert("All fields are Mandatory");
      return;
    }
    updateContactHandler({id, name:newName, email:newEmail});
    setName("");
    setEmail("");
    navigate("/");

    // props.history.push("/");
    // setEmail("");
  };
  return (
    <div className="ui main">
      <h2>Edit Contact</h2>
      <form className="ui form" onSubmit={update}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            value={newName}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            value={newEmail}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="ui button blue">Update</button>
      </form>
    </div>
  );
};

export default EditContact;
