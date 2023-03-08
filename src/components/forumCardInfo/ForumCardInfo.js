import React from "react";
import "./ForumCardInfo.scss";
import SeeMore from "../buttons/seeMore/SeeMore";
import user1 from "../../assets/images/user1.png";
import user2 from "../../assets/images/user2.png";
import user3 from "../../assets/images/user3.png";
import user4 from "../../assets/images/user4.png";
import { Link } from "react-router-dom";

const ForumCardInfo = () => {
  return (
    <div className="forum-card-info">
      <div className="heading">
        <p className="title">Forum</p>
        <Link to="forum">
          <SeeMore />
        </Link>
      </div>

      <div className="content">
        <div className="question">
          <img src={user1} alt="user" />
          <p>شروط الإستخدام و التواصل ...</p>
          <span>1h</span>
        </div>

        <div className="line"></div>

        <div className="question">
          <img src={user2} alt="user" />
          <p>I need help?</p>
          <span>20days</span>
        </div>

        <div className="line"></div>

        <div className="question">
          <img src={user3} alt="user" />
          <p>Problem Bac Math</p>
          <span>20days</span>
        </div>
        <div className="line"></div>

        <div className="question">
          <img src={user4} alt="user" />
          <p>Problem Bac Math</p>
          <span>20days</span>
        </div>
      </div>
    </div>
  );
};

export default ForumCardInfo;
