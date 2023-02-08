import React from "react";
import "./LearningProgress.scss";

import level from "../../assets/icons/level.png";
import SeeMore from "../buttons/seeMore/SeeMore";

const LearningProgress = () => {
  return (
    <div className="learning-progress">
      <div className="heading">
        <div className="title">
          <img src={level} alt="icon-level" />
          <p>Learning Progress</p>
        </div>
        <SeeMore />
      </div>

      <div className="content">
        <table>
          <tr>
            <th className="table-title">Subject</th>
            <th className="table-title">Progress</th>
          </tr>
        </table>

        <div className="first-line"></div>

        <table className="table">
          <tr className="line">
            <td className="subject">
              <div className="circle"></div>
              تربية تكنولوجية
            </td>
            <td className="progress">
              <div className="range">
                <div className="level" style={{ width: "25%" }}></div>
              </div>
              <p>25%</p>
            </td>
          </tr>

          <tr className="line">
            <td className="subject">
              <div className="circle"></div> علوم الحياة والأرض
            </td>
            <td className="progress">
              <div className="range">
                <div className="level" style={{ width: "75%" }}></div>
              </div>
              <p>75%</p>
            </td>
          </tr>
          <tr className="line">
            <td className="subject">
              <div className="circle"></div>
              Français
            </td>
            <td className="progress">
              <div className="range">
                <div className="level" style={{ width: "50%" }}></div>
              </div>
              <p>50%</p>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default LearningProgress;
