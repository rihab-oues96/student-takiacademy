import React from "react";
import "./AddComment.scss";

import blueComment from "../../../../../..//assets/icons/blueComment.png";

const AddComment = () => {
  return (
    <div className="add-comment">
      <img src={blueComment} alt="icon-search" />
      <input type="text" placeholder="Add your reply here..." />
      <div className="reply">
        <p>Reply</p>
      </div>
    </div>
  );
};

export default AddComment;
