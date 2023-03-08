import React, { useState } from "react";
import "./ReplyComment.scss";

import prof from "../../../../../../assets/images/prof.png";
import options from "../../../../../../assets/icons/options.png";
import blueHeart from "../../../../../../assets/icons/blueHeart.png";
import pinkHeart from "../../../../../../assets/icons/pinkHeart.png";

const ReplyComment = () => {
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="reply-comment">
      <div className="reply-comment-header">
        <div className="reply-comment-header-left">
          <img src={prof} alt="prof-img" />
          <div className="user">
            <p>Ayachi Mohamed</p>
            <span>2 Days Ago</span>
          </div>
        </div>
        <div className="reply-comment-header-right">
          <img src={options} alt="options-icon" />
        </div>
      </div>
      <div className="reply-comment-content">
        <p>
          Salut Max. J'adore vos conférences. Cependant celui-ci est très
          déroutant. Lorsque vous avez commencé à utiliser extra et identifier,
          vous avez rendu la conférence trop difficile à comprendre pour quelque
          chose de très inutile dans le monde réel.Veuillez écrire un bon code
          propre et proposer de meilleurs exemples à l'avenir.
        </p>
      </div>
      <div className="reply-comment-bottom">
        <div className="liked" onClick={() => likeHandler()}>
          {isLiked ? (
            <img src={pinkHeart} alt="like-icon" />
          ) : (
            <img src={blueHeart} alt="like-icon" />
          )}
          {isLiked ? <p className="liked-comm">Liked</p> : <p>Like</p>}
        </div>
      </div>
    </div>
  );
};

export default ReplyComment;
