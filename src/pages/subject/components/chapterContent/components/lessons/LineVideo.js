import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getVideoTitle } from "../../../../../../features/lesson/LessonSlice";
import checked from "../../../../../../assets/icons/checked.png";

const LineVideo = ({ video }) => {
  const dispatch = useDispatch();
  const [isChecked, setIsCheked] = useState(false);

  const toggleCheck = () => {
    setIsCheked(true);
    console.log(isChecked);
  };

  return (
    <div
      className="lesson-dropdown-content-line"
      onClick={() => {
        dispatch(getVideoTitle(video.title));
      }}
    >
      <div className="lesson-dropdown-content-line-left">
        <div
          className={`checkbox  ${isChecked ? "checked" : ""}`}
          onClick={() => toggleCheck()}
        >
          {isChecked && <img src={checked} alt="icon-check" />}
        </div>
        <p className="video-title"> {video.title}</p>
      </div>
      <span className="duration">{video.duration}</span>
    </div>
  );
};

export default LineVideo;
