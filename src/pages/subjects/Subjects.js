import React, { useEffect } from "react";
import "./Subjects.scss";
import { getSubjects } from "../../features/subjects/subjectSlice";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SubjectCard from "./SubjectCard";

const Subjects = () => {
  const dispatch = useDispatch();
  const { subjects, loading } = useSelector((state) => state.subjects);

  useEffect(() => {
    dispatch(getSubjects());
  }, []);

  if (loading)
    return (
      <section className="subjects">
        <h2>Loading ...</h2>
      </section>
    );

  return (
    <section className="subjects">
      <p className="main-title">Your Subjects</p>

      <div className="subjects-cards">
        {subjects.map((subject, index) => (
          <Link to={`/subjects/${subject._id}`} key={index}>
            <SubjectCard subject={subject} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Subjects;
