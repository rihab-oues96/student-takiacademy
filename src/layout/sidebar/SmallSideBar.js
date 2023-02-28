import React from "react";
import { useDispatch } from "react-redux";
import "./SmallSideBar.scss";

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
