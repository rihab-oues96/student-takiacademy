import React from "react";
import "./Subscribe.scss";
import { openModal } from "../../../features/modal/ModalSlice";
import { getOffre } from "../../../features/offreDescription/OffreDiscriptionSlice";
import { useDispatch } from "react-redux";

const Subscribe = ({ offre }) => {
  const dispatch = useDispatch();

  return (
    <div
      className="subscribe-btn"
      onClick={() => {
        dispatch(openModal("OffreCardDescription"));
        dispatch(getOffre(offre));
      }}
    >
      <p>اشترك الان</p>
    </div>
  );
};

export default Subscribe;
