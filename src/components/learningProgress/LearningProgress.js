import React from "react";
import "./LearningProgress.scss";

import level from "../../assets/icons/level.png";
import SeeMore from "../buttons/seeMore/SeeMore";

import { LearningProgressInfos } from "../../data";

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
          {LearningProgressInfos.map((item, index) => (
            <tr className="line" key={index}>
              <td className="subject">
                <div className="circle"></div>
                {item.subject}
              </td>
              <td className="progress">
                <div className="range">
                  <div
                    className="level"
                    style={{ width: `${item.value}%` }}
                  ></div>
                </div>
                <p>{item.value}%</p>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default LearningProgress;
