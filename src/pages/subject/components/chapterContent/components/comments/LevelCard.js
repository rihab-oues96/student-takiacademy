import React from "react";

import level from "../../../../../../assets/images/level.png";

const LevelCard = () => {
  return (
    <div className="comment-card level">
      <p className="comment-card-title"> Mieux adapté pour</p>
      <div className="comment-card-content level-content">
        <img src={level} alt="level-img" />
        <div className="level-infos">
          <p>
            Niveau: <span>Débutant</span>
          </p>
          <span>(basé sur 813 avis)</span>
        </div>
      </div>
    </div>
  );
};

export default LevelCard;
