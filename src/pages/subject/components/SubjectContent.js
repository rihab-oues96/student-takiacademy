import { NavLink } from "react-router-dom";
import LessonCard from "./LessonCard";
import "./SubjectContent.scss";

import { subjectLinks } from "../../../data";

const SubjectContent = () => {
  return (
    <div className="subject-content">
      <div className="subject-content-header">
        <ul>
          {subjectLinks.map((link) => (
            <NavLink to="">
              <li>{link.name}</li>
            </NavLink>
          ))}
        </ul>
      </div>

      <div className="lessons">
        <LessonCard />
      </div>
    </div>
  );
};

export default SubjectContent;
