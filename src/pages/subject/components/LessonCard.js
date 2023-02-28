import React from "react";
import "./LessonCard.scss";

import { profs } from "../../../data";

const LessonCard = () => {
  return (
    <div className="lesson-card">
      <div className="lesson-header">
        <div className="lesson-header-left">
          <p className="lesson-number">01</p>
          <p className="lesson-title">
            الدرس الأول في الجبر _الأعداد الصحيحة الطبيعية
          </p>
        </div>
        <p className="lesson-header-right">67 videos</p>
      </div>

      <div className="lesson-progress">
        <div className="lesson-progress-header">
          <p>Progress</p>
          <span>72%</span>
        </div>

        <div className="lesson-progress-progress">
          <div className="lesson-progress-progress-level"></div>
        </div>
      </div>

      <div className="lesson-profs">
        <div className="images">
          {profs.map((prof, index) => (
            <img src={prof.image} alt="prof-img" className={`img-${index}`} />
          ))}
        </div>

        <p className="by">
          par :
          {profs.map((prof) => (
            <span> {prof.name}</span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default LessonCard;
