import React from "react";

const AnnonceCard = ({ annonce }) => {
  return (
    <div className="annonce-card">
      <div className="annonce-card-header">
        <img src={annonce.image} alt="prof-img" />

        <div className="annonce-user-desc">
          <p>{annonce.name}</p>
          <span>{annonce.datePub}</span>
        </div>

        <div className="annonce-user-role">
          <p>{annonce.role}</p>
        </div>
      </div>

      <div className="annonce-content">
        <p>{annonce.annonce}</p>
      </div>
    </div>
  );
};

export default AnnonceCard;
