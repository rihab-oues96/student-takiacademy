import SubjectInfos from "./components/subjectInfos/SubjectInfos";
import left from "../../assets/icons/left.png";
import SubjectContent from "./components/subjectContent/SubjectContent";
import "./Subject.scss";
import { Link } from "react-router-dom";

const Subject = () => {
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
