import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContactsCrud } from "../context/ContactCrudContext";

const AddContact = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { addContactHandler } = useContactsCrud();
  const add = (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      alert("All fields are Mandatory");
      return;
    }
    addContactHandler({ name, email });
    setName("");
    setEmail("");
    navigate("/");

    // props.history.push("/");
    // setEmail("");
  };
  return (
    <div className="ui main">
      <h2>Add Contact</h2>
      <form className="ui form" onSubmit={add}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="ui button blue">Add</button>
      </form>
    </div>
  );
};

export default AddContact;
