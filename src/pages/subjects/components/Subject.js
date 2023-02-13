import React from "react";

import math from "../../../assets/images/math.png";
import "./Subject.scss";

const Subject = () => {
  return (
    <div className="subject">
      <div className="subject-heading">
        <img src={math} alt="subject-image" />
        <p>رياضيات</p>
      </div>

      <div className="progress-bloc">
        <p>
          <span>Progress</span> <span>0%</span>
        </p>

        <div className="progress-bar"></div>
      </div>

      <div className="subject-infos">
        <p>
          Nombre de chapitre : <span>20 Chapitres</span>
        </p>
        <p>
          Nombre de videos : <span>678 Videos</span>
        </p>
      </div>
    </div>
  );
};

export default Subject;
