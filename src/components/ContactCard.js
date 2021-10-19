import React from "react";
import user from "../images/users.png";

const ContactCard = (props) => {
    const {name, email} = props.contact;


    return (
           <>
            <div className="item">
                 <img src={user} className="ui avatar image" alet="user"/>

                 <div className="contact">
                     <div className="header">
                    {name}
                    </div>
                    <div >{email}</div>
                    <i className="trash alternate outline icon" style={{color:"red", marginTop: "10px;"}}></i>
                 </div>
             </div>
           
           </>

    )
}

export default ContactCard;