import SubjectCard from "./components/SubjectCard";
import left from "../../assets/icons/left.png";
import "./Subject.scss";
import SubjectContent from "./components/SubjectContent";

const Subject = () => {
  return (
    <section className="subject-page">
      <div className="subject-header">
        <div className="back">
          <img src={left} alt="left-icon" />
          <p>Back</p>
        </div>

        <p className="main-title">Your Subjects</p>
      </div>
      <div className="subject-page-content">
        <SubjectCard />

        <SubjectContent />
      </div>
    </section>
  );
};

export default Subject;
