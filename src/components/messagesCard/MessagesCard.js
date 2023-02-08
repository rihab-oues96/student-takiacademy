import React from "react";
import "./MessagesCard.scss";

import circleClose from "../../assets/icons/circleClose.png";

const MessagesCard = ({ toggleMessageCardHandler }) => {
  return (
    <div className="messages">
      <div className="heading">
        <p>Messages</p>
        <img
          src={circleClose}
          alt="close-icon"
          onClick={toggleMessageCardHandler}
        />
      </div>

      <div className="content">
        <p>No Messages Yet</p>
      </div>
    </div>
  );
};

export default MessagesCard;
