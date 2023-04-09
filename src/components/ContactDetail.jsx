import React from 'react'
import { Link } from 'react-router-dom';
import user from "../Images/contact.jpg"
import { useLocation } from 'react-router-dom';

const ContactDetail = (props) => {
    const location=useLocation();
  return (
   <div className='main'>
   <div className="ui card centered" style={{marginTop:"5rem"}}>
    <div className="image" >
        <img src={user} alt="user" />
    </div>
    <div className='content'>
   <div className="header">
      {location.state.data.name}
   </div>
   <div className="description">
    {location.state.data.email}
   </div>
    </div>
   </div>
   <div className='ui center aligned container'>
   <Link to="/">
   <button className='ui button blue center'>Back to Contact List</button>
   </Link>


     </div>
   </div>
  )
}

export default ContactDetail
