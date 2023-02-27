import React from "react";
import "./Subjects.scss";

import { subjects } from "../../data";
import { Link } from "react-router-dom";

const Subjects = () => {
  return (
    <section className="subjects">
      <p className="main-title">Your Subjects</p>

      <div className="subjects-cards">
        {subjects.map((subject) => {
          return (
            <Link to="/subject">
              <div className="subject-card">
                <div className="circle"></div>

                <div className="subject-info">
                  <p className="subject-title">{subject.title}</p>
                  <div className="subject-progression">
                    <div className="subject-range">
                      <div
                        className="level"
                        style={{ width: `${subject.progression}%` }}
                      ></div>
                    </div>
                    <span>{subject.progression} %</span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Subjects;
