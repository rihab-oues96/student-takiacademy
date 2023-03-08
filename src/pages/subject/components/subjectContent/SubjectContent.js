import { useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import { subjectLinks } from "../../../../data";
import "./SubjectContent.scss";

const SubjectContent = () => {
  const { loading } = useSelector((state) => state.subjectContent);

  if (loading)
    return (
      <div className="subject-content">
        <h2>Loading ...</h2>
      </div>
    );

  return (
    <div className="subject-content">
      <div className="subject-content-header">
        <ul>
          {subjectLinks.map((link, index) => (
            <NavLink to={link.link} key={index}>
              <li>{link.name}</li>
              <div className="active-live"></div>
            </NavLink>
          ))}
        </ul>
      </div>

      <div className="subject-content-body">
        <Outlet />
      </div>
    </div>
  );
};

export default SubjectContent;
