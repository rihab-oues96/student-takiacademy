import React, { useState } from "react";
import "./CommentCard.scss";

import prof from "../../../../../..//assets/images/prof.png";
import circleUp from "../../../../../..//assets/icons/circleUp.png";
import options from "../../../../../..//assets/icons/options.png";
import blueHeart from "../../../../../..//assets/icons/blueHeart.png";
import blueComment from "../../../../../..//assets/icons/blueComment.png";
import blueUp from "../../../../../..//assets/icons/blueUp.png";
import pinkHeart from "../../../../../..//assets/icons/pinkHeart.png";
import greenComment from "../../../../../..//assets/icons/greenComment.png";
import down from "../../../../../..//assets/icons/down.png";

import AddComment from "./AddComment";
import ReplyComment from "./ReplyComment";

const CommentCard = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [showCommentBar, setShowCommentBar] = useState(false);

  const likeHandler = () => {
    setIsLiked(!isLiked);
  };

  const showCommentBarHandler = () => {
    setShowCommentBar(!showCommentBar);
  };

  return (
    <div className="comment">
      <div className="comment-header">
        <div className="comment-header-left">
          <img src={prof} alt="prof-img" />
          <div className="user">
            <p>Ayachi Mohamed</p>
            <span>2 Days Ago</span>
          </div>
        </div>
        <div className="comment-header-right">
          <p>(2654)</p>
          <img src={circleUp} alt="up-icon" />
          <img src={options} alt="options-icon" />
        </div>
      </div>

      <div className="comment-content">
        <p>
          Salut Max. J'adore vos conférences. Cependant celui-ci est très
          déroutant. Lorsque vous avez commencé à utiliser extra et identifier,
          vous avez rendu la conférence trop difficile à comprendre pour quelque
          chose de très inutile dans le monde réel.Veuillez écrire un bon code
          propre et proposer de meilleurs exemples à l'avenir.
        </p>
      </div>

      <div className="comment-bottom">
        <div className="comment-bottom-left">
          <div className="liked" onClick={() => likeHandler()}>
            {isLiked ? (
              <img src={pinkHeart} alt="like-icon" />
            ) : (
              <img src={blueHeart} alt="like-icon" />
            )}
            {isLiked ? <p className="liked-comm">Liked</p> : <p>Like</p>}
          </div>

          <div
            className="reply"
            onClick={() => {
              showCommentBarHandler();
            }}
          >
            <img src={blueComment} alt="reply-icon" />
            <p>Reply</p>
          </div>

          <div className="follow">
            <img src={blueUp} alt="follow-icon" />
            <p>Follow Thread</p>
          </div>
        </div>

        <div className="comment-bottom-right">
          <div className="likes">
            <img src={pinkHeart} alt="pink-heart-icon" />
            <p>50</p>
          </div>

          <div className="comments">
            <img src={greenComment} alt="green-comments" />
            <p>10</p>
          </div>
        </div>
      </div>

      {showCommentBar && <AddComment />}

      {showCommentBar && <ReplyComment />}

      {showCommentBar && (
        <div className="see-more more-replies">
          <p>See more Replies</p>
          <img src={down} alt="icon-down" />
        </div>
      )}
    </div>
  );
};

export default CommentCard;
