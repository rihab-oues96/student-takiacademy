import React from "react";
import "./Subscribe.scss";
import { openModal } from "../../../features/modal/ModalSlice";
import { useDispatch } from "react-redux";
import { getOffreDetails } from "../../../features/offres/offreDetailsSlice";

const Subscribe = ({ id }) => {
  const dispatch = useDispatch();

  return (
    <div
      className="subscribe-btn"
      onClick={() => {
        dispatch(openModal("OffreCardDescription"));
        dispatch(getOffreDetails(id));
      }}
    >
      <p>اشترك الان</p>
    </div>
  );
};

export default Subscribe;
