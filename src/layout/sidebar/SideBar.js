import React from "react";
import "./SideBar.scss";
import logo from "../../assets/images/logo.png";

import { NavLink } from "react-router-dom";
import NewOffre from "../../components/newOffre/NewOffre";
import { navigations } from "../../data";

const SideBar = () => {
  return (
    <section className="sidebar">
      <div className="heading">
        <img src={logo} alt="logo" />
        <p>
          <span>Taki</span> Academy
        </p>
      </div>

      <div className="navigations">
        {navigations.map((nav, index) => (
          <NavLink to={`${nav.link}`} key={index}>
            <div className="nav">
              <img src={nav.icon} alt="icon" />
              <p>{nav.pageName}</p>
            </div>
          </NavLink>
        ))}
      </div>

      <NewOffre />
    </section>
  );
};

export default SideBar;
