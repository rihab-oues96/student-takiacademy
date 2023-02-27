import "./SubjectContent.scss";

const SubjectContent = () => {
  return (
    <div className="subject-content">
      <div className="subject-content-header">
        <ul>
          <li>Cours</li>
          <li>Examens</li>
          <li>Enregistrement</li>
          <li>Divers</li>
        </ul>
      </div>

      <div className="lessons"></div>
    </div>
  );
};

export default SubjectContent;
