import React from "react";
import { useDispatch } from "react-redux";
import "./SmallSideBar.scss";

import home from "../../assets/icons/home.png";
import offres from "../../assets/icons/offres.png";
import subjects from "../../assets/icons/subjects.png";
import liveSession from "../../assets/icons/liveSession.png";
import forum from "../../assets/icons/forum.png";
import exam from "../../assets/icons/exam.png";
import myWallet from "../../assets/icons/myWallet.png";
import myProfile from "../../assets/icons/myProfile.png";
import assistance from "../../assets/icons/myWallet.png";
import circleClose from "../../assets/icons/circleClose.png";
import { NavLink } from "react-router-dom";
import { closeSidebar } from "../../features/sideBar/SidebarSlice";
import { navigations } from "../../data";

const SmallSideBar = () => {
  const dispatch = useDispatch();
  return (
    <section className="small-sidebar">
      <img
        src={circleClose}
        alt="close-icon"
        className="close-icon"
        onClick={() => dispatch(closeSidebar())}
      />

      <div className="navigations">
        {navigations.map((nav, index) => (
          <NavLink to={`${nav.link}`}>
            <div
              className="nav"
              key={index}
              onClick={() => dispatch(closeSidebar())}
            >
              <img src={nav.icon} alt="icon" />
              <p>{nav.pageName}</p>
            </div>
          </NavLink>
        ))}
      </div>
    </section>
  );
};

export default SmallSideBar;
