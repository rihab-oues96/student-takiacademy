import React from "react";
import "./Qa.scss";

import search from "../../../../../../assets/icons/search.png";
import down from "../../../../../../assets/icons/down.png";
import ConmmentCard from "./CommentCard";

const Qa = () => {
  return (
    <section className="qa">
      <div className="search-bloc">
        <img src={search} alt="icon-search" />
        <input type="text" placeholder="Rechercher tous les cours" />
      </div>

      <div className="sort-bloc">
        <div className="sort-item">
          <p>Tous les chapitres</p>
          <img src={down} alt="icon-down" />
        </div>

        <div className="sort-item">
          <p>Trier par recommandé</p>
          <img src={down} alt="icon-down" />
        </div>

        <div className="sort-item">
          <p>filtrer les questions</p>
          <img src={down} alt="icon-down" />
        </div>
      </div>

      <div className="questions-bloc">
        <div className="questions-bloc-header">
          <p>
            Toutes les questions de ce cours <span>(2564)</span>
          </p>
          <div className="add-comment">
            <p>Add New Comment</p>
          </div>
        </div>

        <div className="comments">
          <ConmmentCard />
          <ConmmentCard />

          <div className="see-more">
            <p>See more </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qa;
