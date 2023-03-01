import React from "react";
import "./ChapterCard.scss";

import { profs } from "../../../../data";

const ChapterCard = ({ chapter, ordre }) => {
  return (
    <div className="lesson-card">
      <div className="lesson-header">
        <div className="lesson-header-left">
          <p className="lesson-number">0{ordre}</p>
          <p className="lesson-title">{chapter.chapter}</p>
        </div>
        <p className="lesson-header-right">{chapter.numberOfVideos} videos</p>
      </div>

      <div className="lesson-progress">
        <div className="lesson-progress-header">
          <p>Progress</p>
          <span>{chapter.progress}%</span>
        </div>

        <div className="lesson-progress-progress">
          <div
            className="lesson-progress-progress-level"
            style={{ width: `${chapter.progress}%` }}
          ></div>
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

export default ChapterCard;
