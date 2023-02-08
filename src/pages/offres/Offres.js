import React from "react";

import "./Offres.scss";

import { offres } from "../../data";
import OffreCard from "../../components/offreCard/OffreCard";
import Modal from "../../components/modal/Modal";
import { useSelector } from "react-redux";

const Offres = () => {
  const { isModalOpen } = useSelector((state) => state.modal);

  return (
    <section className="offres">
      <p className="main-title">Available Offers</p>

      <div className="offres-cards">
        {offres.map((offre, index) => (
          <OffreCard offre={offre} key={index} />
        ))}
      </div>

      {isModalOpen && <Modal content='offreDescription' />}
    </section>
  );
};

export default Offres;
