import React from "react";
import "./OverView.scss";

import home from "../../assets/icons/home.png";
import versPilote from "../../assets/images/versPilote.png";

const OverView = () => {
  return (
    <div className="overView">
      <div className="heading">
        <img src={home} alt="home-icon" />
        <p>Overview</p>
      </div>

      <div className="content">
        <div className=" blue-card live-infos">
          <div className="live-session">
            <div className="circle"></div>
            <p>Live Sessions this week</p>
            <span>5</span>
          </div>
          <div className="horizental-line"></div>

          <div className="live-session">
            <div className="circle"></div>
            <p>Live Sessions this week</p>
            <span>5</span>
          </div>
        </div>

        <div className=" blue-card offre-infos">
          <div className="info">
            <div className="offre-image">
              <img src={versPilote} alt="offre-image" />
            </div>

            <div className="offre-description">
              <p>Your current offer is</p>
              <span>VERS_PILOTE</span>
            </div>
          </div>

          <div className="expire-date">
            <p>Expires on 21/06/2022</p>
            <div className="range">
              <div className="level"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverView;
