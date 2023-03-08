import React from "react";
import "./ChapterCard.scss";

import { profs } from "../../../../../data";

const ChapterCard = ({ chapter, ordre }) => {
  return (
    <div className="chapter-card">
      <div className="chapter-header">
        <div className="chapter-header-left">
          <p className="chapter-number">0{ordre}</p>
          <p className="chapter-title">{chapter.chapter}</p>
        </div>
        <p className="chapter-header-right">{chapter.numberOfVideos} videos</p>
      </div>

      <div className="chapter-progress">
        <div className="chapter-progress-header">
          <p>Progress</p>
          <span>{chapter.progress}%</span>
        </div>

        <div className="chapter-progress-progress">
          <div
            className="chapter-progress-progress-level"
            style={{ width: `${chapter.progress}%` }}
          ></div>
        </div>
      </div>

      <div className="chapter-profs">
        <div className="images">
          {profs.map((prof, index) => (
            <img src={prof.image} alt="prof-img" className={`img-${index}`} />
          ))}
        </div>

        <p className="by">
          par :
          {profs.map((prof, index) => (
            <span key={index}> {prof.name}</span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default ChapterCard;
