import React from "react";
import { useDispatch } from "react-redux";
import { getSubjectTitle } from "../../features/subjects/subjectContentSlice";

const SubjectCard = ({ subject }) => {
  const dispatch = useDispatch();

  return (
    <div
      className="subject-card"
      // onClick={() => {
      //   dispatch(getSubjectTitle(subject.name));
      // }}
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
  );
};

export default SubjectCard;
