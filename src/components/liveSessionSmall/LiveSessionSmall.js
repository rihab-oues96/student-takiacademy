import React from "react";
import "./LiveSessionSmall.scss";

import right from "../../assets/icons/right.png";
import left from "../../assets/icons/left.png";
import LiveCard from "../liveCard/LiveCard";

import { hours } from "../../data";

const LiveSessionSmall = () => {
  return (
    <div className="live-session-small">
      <div className="heading">
        <p className="title">Today's Live Sessions</p>
        <div className="all-dates-btn">
          <p>All dates</p>
        </div>
      </div>

      <div className="content">
        <div className="months">
          <img src={left} alt="icon-left" />
          <p>june</p>
          <img src={right} alt="icon-right" />
        </div>
        <div className="hours">
          <LiveCard
            title="رياضيات اصلاح امتحان عدد9"
            time="18:00 - 20:00"
            color="yellow"
          />
          <LiveCard
            title="رياضيات اصلاح امتحان عدد9"
            time="18:00 - 20:00"
            color="purpule"
          />

          <div className="vertical-line"></div>

          {hours.map((h, index) => (
            <div className="hour" key={index}>
              <p>{h.hour}</p>
              <div className="line"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiveSessionSmall;
