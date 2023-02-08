import React from "react";
import Subscribe from "../buttons/subscribe/Subscribe";
import "./OffreCard.scss";

const OffreCard = ({ offre }) => {
  return (
    <div className={`offre-card ${offre.name}`}>
      <img src={offre.image} alt="silver-img" />
      <p className="title"> {offre.title}</p>

      <div className="price">
        <span>{offre.price}</span>
      </div>
      <Subscribe style={offre.name} offre={offre} />
    </div>
  );
};

export default OffreCard;
