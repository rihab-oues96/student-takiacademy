import React from "react";
import "./HomeWork.scss";

import homework from "../../assets/icons/homework.png";
import circleDown from "../../assets/icons/circleDown.png";
import SeeMore from "../buttons/seeMore/SeeMore";
import { Link } from "react-router-dom";

const HomeWork = () => {
  return (
    <div className="homework">
      <div className="heading">
        <div className="title">
          <img src={homework} alt="icon-level" />
          <p>Homeworks</p>
        </div>
        <Link to="live-session">
          <SeeMore />
        </Link>
      </div>

      <div className="content">
        <table>
          <tr>
            <th className="table-title sub">Subject</th>
            <th className="table-title">Teacher</th>
            <th className="table-title">Deadline</th>
            <th className="table-title">Homework</th>
          </tr>
        </table>

        <div className="first-line"></div>

        <table className="table">
          <tr className="line">
            <td className="subject">
              <div className="circle"></div>
              <p>English</p>
            </td>

            <td className="teacher">
              <p>Amine A.</p>
            </td>

            <td className="deadline">
              <p>20/11/22</p>
            </td>

            <td className="homework-file">
              <img src={circleDown} alt="icon" />
            </td>
          </tr>

          <tr className="line">
            <td className="subject">
              <div className="circle"></div>
              <p>عربيّة</p>
            </td>

            <td className="teacher">
              <p>Safa B.</p>
            </td>

            <td className="deadline">
              <p>20/11/22</p>
            </td>

            <td className="homework-file">
              <img src={circleDown} alt="icon" />
            </td>
          </tr>

          <tr className="line">
            <td className="subject">
              <div className="circle"></div>
              <p>تربية إسلامية</p>
            </td>

            <td className="teacher">
              <p>Sarra K.</p>
            </td>

            <td className="deadline">
              <p>20/11/22</p>
            </td>

            <td className="homework-file">
              <img src={circleDown} alt="icon" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default HomeWork;
