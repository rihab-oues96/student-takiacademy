import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import down from "../../../../../../assets/icons/down.png";
import LineVideo from "./LineVideo";
import { getLessonContent } from "../../../../../../features/lesson/LessonSlice";
import { Link, useParams } from "react-router-dom";

const LessonDropDown = ({ lesson }) => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const { lessonsVideo } = useSelector((state) => state.lessonVideos);
  const videos = lessonsVideo?.videos;

  const dispatch = useDispatch();
  const { lessonName } = useParams();

  const toggleDropdown = () => {
    setIsOpenDropdown(!isOpenDropdown);
  };

  return (
    <div
      className="lesson-dropdown"
      onClick={() => {
        dispatch(getLessonContent(lesson._id));
      }}
    >
      <div
        className={`lesson-dropdown-header ${isOpenDropdown ? "colored" : " "}`}
        onClick={() => toggleDropdown()}
      >
        <p>{lesson.title}</p>
        <img src={down} alt="icon-down" />
      </div>

      {isOpenDropdown && (
        <div className="lesson-dropdown-content">
          {videos?.map((video, index) => (
            <Link to={`${lessonName}/${video.title}`} key={index}>
              <LineVideo video={video} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default LessonDropDown;
