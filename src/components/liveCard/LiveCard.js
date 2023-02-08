import React from "react";
import "./LiveCard.scss";

const LiveCard = ({ title, time, color }) => {
  return (
    <div className={`live-card ${color}`}>
      <div className="left-side-card"></div>
      <div className="circle"></div>

      <div className="description">
        <p>{title}</p>
        <span>{time}</span>
      </div>
    </div>
  );
};

export default LiveCard;
