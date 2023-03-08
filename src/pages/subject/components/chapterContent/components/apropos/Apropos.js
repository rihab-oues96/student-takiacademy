import React from "react";
import "./Apropos.scss";

import prof from "../../../../../../assets/images/prof.png";
import pdf from "../../../../../../assets/icons/pdf.png";
import download from "../../../../../../assets/icons/download.png";

const Apropos = () => {
  return (
    <section className="apropos">
      <div className="ap apropos-chapitre">
        <p>A propos du chapitre</p>
        <div className="apropos-chapitre-details">
          <p>Durée: 1 Heures 12 minutes</p>
          <p>Vue génerale: 14 Cours / 0 Magazines</p>
        </div>
      </div>

      <div className="ap apropos-prof">
        <p>A propos de l'instructeur</p>
        <div className="apropos-prof-details">
          <img src={prof} alt="user-img" />
          <div className="prof-desc">
            <p>Ayachi Mohamed</p>
            <span> Prof chez TakiAcademy</span>
          </div>
        </div>
      </div>

      <div className="ap apropos-jointes">
        <p>Pièces jointes</p>

        <div className="jointes-desc">
          <div className="correction">
            <img src={pdf} alt="pdf-icon" />
            <p>اصلاح الاختبار</p>
          </div>
          <div className="download">
            <img src={download} alt="download-icon" />
            <p>Télécharger</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Apropos;
