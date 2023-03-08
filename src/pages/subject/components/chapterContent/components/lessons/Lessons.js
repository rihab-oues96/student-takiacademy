import React from "react";
import "./Lessons.scss";

import { useSelector } from "react-redux";
import LessonDropDown from "./LessonDropDown";
import { Link } from "react-router-dom";

const Lessons = () => {
  const { chapterLessons } = useSelector((state) => state.chapterLessons);
  const lessons = chapterLessons?.lessons;

  return lessons?.map((lesson, index) => (
    <Link to={lesson.title}>
      <LessonDropDown lesson={lesson} key={index} />
    </Link>
  ));
};

export default Lessons;
