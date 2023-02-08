import React from "react";
import "./NewOffre.scss";

import chakebAlBac from "../../assets/images/chakebAlBac.png";
import Upgrate from "../../components/buttons/upgrate/Upgrate";

const NewOffre = () => {
  return (
    <div className="offre">
      <div className="offre-image">
        <img src={chakebAlBac} alt="offre-img" />
      </div>

      <div className="offre-description">
        <p>عرض شكّب بالباك</p>
        <span>فرصة الاشتراك و التّمتع بتخفيض 20% في عرض</span>
      </div>

      <Upgrate />
    </div>
  );
};

export default NewOffre;
