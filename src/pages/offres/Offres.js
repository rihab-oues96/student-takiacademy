import React, { useEffect } from "react";
import "./Offres.scss";

// import { offres } from "../../data";
import OffreCard from "../../components/offreCard/OffreCard";
import Modal from "../../components/modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { getOffres } from "../../features/offres/offresSlice";

const Offres = () => {
  const { isModalOpen } = useSelector((state) => state.modal);
  const { offres, loading } = useSelector((state) => state.offres);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOffres());
  }, []);

  if (loading)
    return (
      <section className="offres">
        <h2>Loading ... </h2>
      </section>
    );

  return (
    <section className="offres">
      <p className="main-title">Available Offers</p>

      <div className="offres-cards">
        {offres.map((offre, index) => (
          <OffreCard offre={offre} key={index} />
        ))}
      </div>

      {isModalOpen && <Modal />}
    </section>
  );
};

export default Offres;
