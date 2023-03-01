import React, { useEffect } from "react";
import "./Subjects.scss";
import { getSubjects } from "../../features/subjects/subjectSlice";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSubjectContent } from "../../features/subjects/subjectContentSlice";

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
          <Link to="/subjects/subject" key={index}>
            <div
              className="subject-card"
              onClick={() => {
                dispatch(getSubjectContent(subject._id));
               
              }}
            >
              <div className="circle">
                <img src={subject.image} alt="subject-img" />
              </div>

              <div className="subject-info">
                <p className="subject-title">{subject.name}</p>
                <div className="subject-progression">
                  <div className="subject-range">
                    <div
                      className="level"
                      style={{ width: `${subject.progress}%` }}
                    ></div>
                  </div>
                  <span>{subject.progress}%</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Subjects;
