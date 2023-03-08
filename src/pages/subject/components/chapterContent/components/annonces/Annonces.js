import React from "react";
import "./Annonces.scss";

import AnnonceCard from "./AnnonceCard";
import { annonceUser } from "../../../../../../data";

const Annonces = () => {
  return (
    <section className="annonces">
      <p>Comment les élèves ont évalué ce cours</p>
      {annonceUser.map((annonce, index) => (
        <AnnonceCard annonce={annonce} key={index} />
      ))}
    </section>
  );
};

export default Annonces;
