import React from "react";

const OpinionCard = () => {
  return (
    <div className="comment-card opinions">
      <p className="comment-card-title">Les opinions</p>
      <div className="comment-card-content  opinions-details">
        <div className="opinion-detail">
          <p>opinion</p>
          <div className="progress">
            <div className="level" style={{ width: `${60}%` }}></div>
          </div>
          <p>60 %</p>
        </div>

        <div className="opinion-detail">
          <p>opinion</p>
          <div className="progress">
            <div className="level" style={{ width: `${60}%` }}></div>
          </div>
          <p>60 %</p>
        </div>

        <div className="opinion-detail">
          <p>opinion</p>
          <div className="progress">
            <div className="level" style={{ width: `${60}%` }}></div>
          </div>
          <p>60 %</p>
        </div>
      </div>
    </div>
  );
};

export default OpinionCard;
