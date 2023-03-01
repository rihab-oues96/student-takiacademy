import React from "react";
import { useSelector } from "react-redux";

import "./SubjectInfos.scss";

const SubjectInfos = () => {
  const { subjectContent, loading } = useSelector(
    (state) => state.subjectContent
  );

  if (loading)
    return (
      <div className="subject-card">
        <h2>Loading ... </h2>
      </div>
    );

  return (
    <div className="subject-card">
      <div className="subject-heading">
        <div className="image">
          <img src={subjectContent.image} alt="subject-img" />
        </div>

        <p>{subjectContent.name}</p>
      </div>

      <div className="progress-bloc">
        <p>
          <span>Progress</span> <span>{subjectContent.progress}%</span>
        </p>

        <div className="progress-bar">
          <div
            className="progress-level"
            style={{ width: `${subjectContent.progress}%` }}
          ></div>
        </div>
      </div>

      <div className="subject-infos">
        <p>
          Nombre de chapitre :
          <span> {subjectContent.numberOfChapters} Chapitres</span>
        </p>
        <p>
          Nombre de videos :<span> {subjectContent.numberOfVideos} Videos</span>
        </p>
      </div>
    </div>
  );
};

export default SubjectInfos;
