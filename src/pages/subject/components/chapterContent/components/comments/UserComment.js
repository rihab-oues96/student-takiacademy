import React from "react";
import prof from "../../../../../../assets/images/prof.png";
import options from "../../../../../../assets/icons/options.png";
import award from "../../../../../../assets/icons/award.png";
import commentHeart from "../../../../../../assets/icons/commentHeart.png";

const UserComment = () => {
  return (
    <div className="user-comment">
      <div className="user-comment-header">
        <div className="user-comment-header-left">
          <img src={prof} alt="prof-img" />
          <div className="user">
            <p>Ayachi Mohamed</p>
            <span>2 Days Ago</span>
          </div>
        </div>
        <div className="user-comment-header-right">
          <img src={options} alt="options-icon" />
        </div>
      </div>
      <div className="user-comment-content">
        <p>
          Salut Max. J'adore vos conférences. Cependant celui-ci est très
          déroutant. Lorsque vous avez commencé à utiliser extra et identifier,
          vous avez rendu la conférence trop difficile à comprendre pour quelque
          chose de très inutile dans le monde réel.Veuillez écrire un bon code
          propre et proposer de meilleurs exemples à l'avenir.
        </p>
      </div>
      <div className="user-comment-bottom">
        <div className="item recommended">
          <img src={award} alt="award-icon" />
          <p>
            Recommandé pour les <span>débutants</span>
          </p>
        </div>
        <div className="item avis">
          <img src={commentHeart} alt="comment-heart-icon" />
          <p>
            A mon avis cette classe est <span>Super</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserComment;
