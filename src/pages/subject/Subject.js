import SubjectInfos from "./components/subjectInfos/SubjectInfos";
import left from "../../assets/icons/left.png";
import SubjectContent from "./components/subjectContent/SubjectContent";
import { getSubjectContent } from "../../features/subjects/subjectContentSlice";
import "./Subject.scss";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const Subject = () => {
  const dispatch = useDispatch();
  const url = useLocation();
  const id = url.pathname.slice(10);

  useEffect(() => {
    dispatch(getSubjectContent(id));
  }, []);

  return (
    <section className="subject-page">
      <div className="subject-header">
        <Link to="/subjects">
          <div className="back">
            <img src={left} alt="left-icon" />
            <p>Back</p>
          </div>
        </Link>

        <p className="main-title">Your Subjects</p>
      </div>
      <div className="subject-page-content">
        <SubjectInfos />

        <SubjectContent />
      </div>
    </section>
  );
};

export default Subject;
