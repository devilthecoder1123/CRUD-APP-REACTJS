import React from "react";
import { Link } from "react-router-dom";
import { useContactsCrud } from "../context/ContactCrudContext";

const ContactCard = (props) => {
const{removeContactHandler}=useContactsCrud();
const deleteContact=(id)=>{
  removeContactHandler(id);
}
  const { id, name, email } = props.contact;
  return (
    <div className="item">
      <div
        className="content"
        style={{
          padding: "5px",
          marginTop: "2px",
        }}
      >
        <Link to={`/contact/${id}`} state={{ data: props.contact }}>
          <div className="header">{name}</div>
          <div>{email}</div>
        </Link>
      </div>
      <i
        className="trash alternate outline icon "
        style={{
          float: "right",
          color: "red",
          cursor: "pointer",
          marginRight: "1rem",
        }}
        onClick={() => deleteContact(id)}
      ></i>
      <Link to={`/edit`} state={{ contact: props.contact }}>
        <i
          className="edit icon"
          style={{
            color: "blue",
            float: "right",
            marginRight: "1.5rem",
          }}
        ></i>
      </Link>
    </div>
  );
};

export default ContactCard;
