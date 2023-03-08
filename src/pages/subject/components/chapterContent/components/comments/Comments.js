import React from "react";
import "./Comments.scss";
import LevelCard from "./LevelCard";
import LovedCard from "./LovedCard";
import OpinionCard from "./OpinionCard";

import { NavLink, useParams } from "react-router-dom";
import UserComment from "./UserComment";

const Comments = () => {
  let params = useParams();

  return (
    <section className="comments">
      <div className="comments-header">
        <p>Comment les élèves ont évalué ce cours</p>
        <div className="new-comment">
          <p>Add New Comment</p>
        </div>
      </div>

      <div className="comments-stats-cards">
        <LevelCard />
        <LovedCard />
        <OpinionCard />
      </div>

      <div className="comments-details">
        <div className="rates">
          <NavLink
            to={`${params.lessonName}/${params.videoName}/commentaires/mieux-notés`}
          >
            <p>Les mieux notés</p>
          </NavLink>

          <NavLink
            to={`${params.lessonName}/${params.videoName}/commentaires/moins-bien-noté`}
          >
            <p>Le moins bien noté</p>
          </NavLink>

          <NavLink
            to={`${params.lessonName}/${params.videoName}/commentaires/plus-récent`}
          >
            <p>Le plus récent</p>
          </NavLink>
        </div>
      </div>

      <div className="users-comments">
        <UserComment />
        <UserComment />
      </div>
    </section>
  );
};

export default Comments;
