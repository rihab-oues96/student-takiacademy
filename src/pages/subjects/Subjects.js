import React, { useEffect } from "react";
import "./Subjects.scss";
import { getSubjects } from "../../features/subjects/subjectSlice";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Subjects = () => {
  const dispatch = useDispatch();
  const { subjects } = useSelector((state) => state.subjects);

  useEffect(() => {
    dispatch(getSubjects());
  }, []);

  return (
    <section className="subjects">
      <p className="main-title">Your Subjects</p>

      <div className="subjects-cards">
        {subjects.map((subject) => (
          <Link to="/subjects/subject">
            <div className="subject-card">
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
