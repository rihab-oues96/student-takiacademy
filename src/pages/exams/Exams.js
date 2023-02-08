import React from "react";
import "./Exams.scss";

import circleDown from "../../assets/icons/circle-down.png";
import down from "../../assets/icons/down.png";
import right from "../../assets/icons/right.png";
import left from "../../assets/icons/left.png";
import { exams } from "../../data";

const Exams = () => {
  return (
    <section className="exams">
      <div className="heading">
        <p className="main-title">Exams</p>
        <select name="filter">
          <option value="">All</option>
        </select>
      </div>

      <div className="content">
        <table>
          <tr className="line line-1">
            <td className="column col-1">
              <p>Subject</p>
            </td>
            <td className="column col-2">
              <p>Name</p>
            </td>
            <td className="column col-3">
              <p>Teacher</p>
            </td>
            <td className="column col-4">
              <p>Deadline</p>
            </td>
            <td className="column col-5">
              <p>Exam</p>
            </td>
            <td className="column col-6">
              <p>Correction</p>
            </td>
          </tr>

          {exams.map((exam, index) => {
            return (
              <tr className={`line line-${index}`}>
                <td className="column col-1">
                  <span>
                    <div className="circle"></div>
                    {exam.name}
                  </span>
                </td>
                <td className="column col-2">{exam.description}</td>
                <td className="column col-3">
                  <span>
                    <div className="circle"></div>
                    {exam.teacher}
                  </span>
                </td>
                <td className="column col-4">{exam.deadline}</td>
                <td className="column col-5">
                  {exam.exam ? (
                    <div className="btn-down">
                      <img src={circleDown} />
                      Download Exam
                    </div>
                  ) : (
                    <p className="not-found-msg">Not Available right now</p>
                  )}
                </td>
                <td className="column col-6">
                  {exam.correction ? (
                    <div className="btn-down">
                      <img src={circleDown} />
                      Download Correction
                    </div>
                  ) : (
                    <p className="not-found-msg"> Not Available right now</p>
                  )}
                </td>
              </tr>
            );
          })}

          <tr className="line last-line">
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td className="column-buttom">
              <p>
                Rows per Page :
                <span>
                  10
                  <img src={down} />
                </span>
              </p>
            </td>
            <td className="column-buttom-end">
              <p>
                1-0 of <img src={left} /> <img src={right} />
              </p>
            </td>
          </tr>
        </table>
      </div>
    </section>
  );
};

export default Exams;
