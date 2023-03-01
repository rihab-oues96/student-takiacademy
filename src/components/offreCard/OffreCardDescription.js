import React from "react";
import "./OffreCardDescription.scss";

import Subscribe from "../buttons/subscribe/Subscribe";

import close from "../../assets/icons/close.png";
import vector from "../../assets/icons/vector.png";

import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../features/modal/ModalSlice";
import { removeOffreDescription } from "../../features/offres/offreDetailsSlice";

const OffreCardDescription = () => {
  const dispatch = useDispatch();

  const { offreDetails, loading } = useSelector((state) => state.offreDetails);

  if (loading)
    return (
      <div className="offre-card-description  loading">
        <h2>Loading ... </h2>
      </div>
    );

  if (offreDetails) {
    return (
      <div className={`offre-card-description ${offreDetails?.name}`}>
        <img
          src={close}
          alt="icon-close"
          className="icon-close"
          onClick={() => {
            dispatch(removeOffreDescription());
            dispatch(closeModal());
          }}
        />

        <div className="content">
          <img src={offreDetails?.image} alt="silver-img" />
          <p className="title"> {offreDetails?.title}</p>

          <div className="period">
            <span className="selected">1 Mois</span>
            <span>Annuelle</span>
          </div>

          <div className="price">
            <p> دت/{offreDetails?.duration} </p>
            <p> {offreDetails?.priceExact} </p>
          </div>

          <div className="description-title">
            <p>:على</p>
            <span>{offreDetails?.name}</span>
            <p> يحتوي عرض</p>
          </div>

          <div className="description-content">
            {offreDetails?.content?.map((info, index) => (
              <div className="row" key={index}>
                <p> {info} </p>
                <img src={vector} alt="true-icon" />
              </div>
            ))}
          </div>

          <Subscribe />
        </div>
      </div>
    );
  }
};

export default OffreCardDescription;
