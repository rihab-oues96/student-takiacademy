import React from "react";

import blueHeart from "../../../../../../assets/icons/blueHeart.png";

const LovedCard = () => {
  return (
    <div className="comment-card loved">
      <p className="comment-card-title">Le Plus Aimé</p>

      <div className="comment-card-content  loved-details">
        <div className="must-loved">
          <p>20</p>
          <img src={blueHeart} alt="blue-heart-icon" />
          <p>Clarté des consignes</p>
        </div>

        <div className="must-loved">
          <p>20</p>
          <img src={blueHeart} alt="blue-heart-icon" />
          <p>Qualité d'audio et de vidéo</p>
        </div>

        <div className="must-loved">
          <p>20</p>
          <img src={blueHeart} alt="blue-heart-icon" />
          <p>L'explication du professeur</p>
        </div>
      </div>
    </div>
  );
};

export default LovedCard;
