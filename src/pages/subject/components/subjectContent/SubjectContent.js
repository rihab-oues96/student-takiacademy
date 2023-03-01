import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { subjectLinks } from "../../../../data";
import ChapterCard from "../chapterCard/ChapterCard";
import "./SubjectContent.scss";

const SubjectContent = () => {
  //  const { chapters } = useSelector((state) => state.chapters);
  const { subjectContent, loading } = useSelector(
    (state) => state.subjectContent
  );

  const chapters = subjectContent.chapters;

  return (
    <div className="subject-content">
      <div className="subject-content-header">
        <ul>
          {subjectLinks.map((link, index) => (
            <NavLink to="" key={index}>
              <li>{link.name}</li>
            </NavLink>
          ))}
        </ul>
      </div>

      <div className="chapters">
        {Array.isArray(chapters)
          ? chapters.map((chapter, index) => (
              <ChapterCard chapter={chapter} key={index} ordre={index + 1} />
            ))
          : null}
      </div>
    </div>
  );
};

export default SubjectContent;
