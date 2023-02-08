import React, { useState } from "react";
import "./SideBar.scss";

import home from "../../assets/icons/home.png";
import offres from "../../assets/icons/offres.png";
import subjects from "../../assets/icons/subjects.png";
import liveSession from "../../assets/icons/liveSession.png";
import forum from "../../assets/icons/forum.png";
import exam from "../../assets/icons/exam.png";
import myWallet from "../../assets/icons/myWallet.png";
import myProfile from "../../assets/icons/myProfile.png";
import assistance from "../../assets/icons/myWallet.png";
import logo from "../../assets/images/logo.png";

import { Link, NavLink } from "react-router-dom";
import NewOffre from "../../components/newOffre/NewOffre";

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
        <NavLink to="/">
          <div className="nav">
            <img src={home} alt="icon-home" />
            <p>Home</p>
          </div>
        </NavLink>

        <NavLink to="/offres">
          <div className="nav">
            <img src={offres} alt="icon-offres" />
            <p>Offres</p>
          </div>
        </NavLink>

        <NavLink to="subjects">
          <div className="nav">
            <img src={subjects} alt="icon-subjects" />
            <p>Subjects</p>
          </div>
        </NavLink>

        <NavLink to="live-session">
          <div className="nav">
            <img src={liveSession} alt="icon-liveSession" />
            <p>Live Session</p>
          </div>
        </NavLink>

        <NavLink to="forum">
          <div className="nav">
            <img src={forum} alt="icon-forum" />
            <p>The Forum</p>
          </div>
        </NavLink>

        <NavLink to="exams">
          <div className="nav">
            <img src={exam} alt="icon-exam" />
            <p>Exams</p>
          </div>
        </NavLink>

        <NavLink to="my-wallet">
          <div className="nav">
            <img src={myWallet} alt="icon-myWallet" />
            <p>My Wallet</p>
          </div>
        </NavLink>

        <NavLink to="my-profile">
          <div className="nav">
            <img src={myProfile} alt="icon-myProfile" />
            <p>My Profile</p>
          </div>
        </NavLink>

        <NavLink to="assistance">
          <div className="nav">
            <img src={assistance} alt="icon-assistance" />
            <p>Assistance</p>
          </div>
        </NavLink>
      </div>

      <NewOffre />
    </section>
  );
};

export default SideBar;
