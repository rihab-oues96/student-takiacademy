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
        <NavLink to="/">
          <div className="nav" onClick={() => dispatch(closeSidebar())}>
            <img src={home} alt="icon-home" />
            <p>Home</p>
          </div>
        </NavLink>

        <NavLink to="/offres">
          <div className="nav" onClick={() => dispatch(closeSidebar())}>
            <img src={offres} alt="icon-offres" />
            <p>Offres</p>
          </div>
        </NavLink>

        <NavLink to="subjects">
          <div className="nav" onClick={() => dispatch(closeSidebar())}>
            <img src={subjects} alt="icon-subjects" />
            <p>Subjects</p>
          </div>
        </NavLink>

        <NavLink to="live-session">
          <div className="nav" onClick={() => dispatch(closeSidebar())}>
            <img src={liveSession} alt="icon-liveSession" />
            <p>Live Session</p>
          </div>
        </NavLink>

        <NavLink to="forum">
          <div className="nav" onClick={() => dispatch(closeSidebar())}>
            <img src={forum} alt="icon-forum" />
            <p>The Forum</p>
          </div>
        </NavLink>

        <NavLink to="exams">
          <div className="nav" onClick={() => dispatch(closeSidebar())}>
            <img src={exam} alt="icon-exam" />
            <p>Exams</p>
          </div>
        </NavLink>

        <NavLink to="my-wallet">
          <div className="nav" onClick={() => dispatch(closeSidebar())}>
            <img src={myWallet} alt="icon-myWallet" />
            <p>My Wallet</p>
          </div>
        </NavLink>

        <NavLink to="my-profile">
          <div className="nav" onClick={() => dispatch(closeSidebar())}>
            <img src={myProfile} alt="icon-myProfile" />
            <p>My Profile</p>
          </div>
        </NavLink>

        <NavLink to="assistance">
          <div className="nav" onClick={() => dispatch(closeSidebar())}>
            <img src={assistance} alt="icon-assistance" />
            <p>Assistance</p>
          </div>
        </NavLink>
      </div>
    </section>
  );
};

export default SmallSideBar;
