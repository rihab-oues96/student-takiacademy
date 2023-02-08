import React from "react";
import "./ForumCardInfo.scss";
import SeeMore from "../buttons/seeMore/SeeMore";
import user1 from "../../assets/images/user1.png";
import user2 from "../../assets/images/user2.png";
import user3 from "../../assets/images/user3.png";
import user4 from "../../assets/images/user4.png";

const ForumCardInfo = () => {
  return (
    <div className="forum-card-info">
      <div className="heading">
        <p className="title">Forum</p>
        <SeeMore />
      </div>

      <div className="content">
        <div className="question">
          <img src={user1} alt="user-image" />
          <p>شروط الإستخدام و التواصل ...</p>
          <span>1h</span>
        </div>

        <div className="line"></div>

        <div className="question">
          <img src={user2} alt="user-image" />
          <p>I need help?</p>
          <span>20days</span>
        </div>

        <div className="line"></div>

        <div className="question">
          <img src={user3} alt="user-image" />
          <p>Problem Bac Math</p>
          <span>20days</span>
        </div>
        <div className="line"></div>

        <div className="question">
          <img src={user4} alt="user-image" />
          <p>Problem Bac Math</p>
          <span>20days</span>
        </div>
      </div>
    </div>
  );
};

export default ForumCardInfo;
