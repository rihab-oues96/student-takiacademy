import React from "react";
import "./OffreCardDescription.scss";

import Subscribe from "../buttons/subscribe/Subscribe";

import close from "../../assets/icons/close.png";
import vector from "../../assets/icons/vector.png";

import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../features/modal/ModalSlice";

const OffreCardDescription = () => {
  const dispatch = useDispatch();

  const { offre } = useSelector((state) => state.offreDescription);

  return (
    <div className={`offre-card-description ${offre.name}`}>
      <img
        src={close}
        alt="icon-close"
        className="icon-close"
        onClick={() => dispatch(closeModal())}
      />

      <div className="content">
        <img src={offre.image} alt="silver-img" />
        <p className="title"> {offre.title}</p>

        <div className="period">
          <span className="selected">1 Mois</span>
          <span>Annuelle</span>
        </div>

        <div className="price">
          <p> دت/{offre.duration} </p> <p> {offre.priceExact} </p>
        </div>

        <div className="description-title">
          <p>:على</p>
          <span>{offre.name}</span>
          <p> يحتوي عرض</p>
        </div>

        <div className="description-content">
          {offre.content.map((info) => (
            <div className="row">
              <p> {info} </p>
              <img src={vector} alt="true-icon" />
            </div>
          ))}
        </div>

        <Subscribe />
      </div>
    </div>
  );
};

export default OffreCardDescription;
