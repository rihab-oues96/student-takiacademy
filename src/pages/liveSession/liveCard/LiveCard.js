import React from "react";
import "./LiveCard.scss";

const LiveCard = () => {
  return (
    <div className="live-card">
      <div className="left-side"></div>
      <div className="live-card-content">
        <p>رياضيات اصلاح امتحان عدد9</p>
        <span>16:00 - 17:30</span>
      </div>
    </div>
  );
};

export default LiveCard;
