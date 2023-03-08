import React from "react";
import "./Chapters.scss";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import ChapterCard from "./chapterCard/ChapterCard";

const Chapters = () => {
  const { subjectContent } = useSelector((state) => state.subjectContent);
  const chapters = subjectContent.chapters;

  return (
    <div className="chapters">
      {Array.isArray(chapters)
        ? chapters.map((chapter, index) => (
            <NavLink to={`${chapter._id}`}>
              <ChapterCard chapter={chapter} key={index} ordre={index + 1} />
            </NavLink>
          ))
        : null}
    </div>
  );
};

export default Chapters;
