import React from "react";
import user from "../../assets/images/user.png";
import versPilote from "../../assets/images/versPilote.png";
import BlueButton from "../../components/buttons/blueButton/BlueButton";
import eye from "../../assets/icons/eye.png";
import copy from "../../assets/icons/copy.png";

import "./MyProfile.scss";

const MyProfile = () => {
  return (
    <section className="my-profile">
      <p className="main-title">My Profile Information</p>

      <div className="content">
        <div className="user-bloc">
          <div className="user">
            <img src={user} alt="user-img" />
            <p className="user-name">Karim Benmbarek</p>
            <p className="class">7 éme de base</p>
          </div>

          <BlueButton content="Edit Profile Info" />
        </div>

        <div className="profile-infos">
          <div className="account-info">
            <p className="title-p">Account Info</p>
            <div className="info">
              <div className="row">
                <p className="left"> First Name: </p> <span>Karim</span>
              </div>

              <div className="row">
                <p className="right"> Last Name: </p>
                <span>Benmbarek</span>
              </div>
            </div>

            <div className="info">
              <div className="row">
                <p className="left "> Email: </p>
                <span>Karimbelhaj06@gmail.com</span>
              </div>

              <div className="row">
                <p className="right">Password:</p>
                <span>************</span>
                <img src={eye} alt="eye-icon" />
              </div>
            </div>

            <div className="info">
              <div className="row">
                <p className="left">Birthday:</p> <span>06 May 1999</span>
              </div>

              <div className="row">
                <p className="right">Gender:</p> <span>Male</span>
              </div>
            </div>

            <div className="info">
              <div className="row">
                <p className="left">Student ID:</p> <span>65874123 </span>
                <img src={copy} alt="copy_icon" />
              </div>
            </div>
          </div>

          <div className="gray-line"></div>

          <div className="education-info">
            <p className="title-p">Education Info</p>
            <div className="info">
              <div className="row">
                <p className="left">Classroom:</p> <span>7 éme Année</span>
              </div>

              <div className="row">
                <p className="right">Your Offer:</p> <span>شكّب بالباك</span>
                <div className="btn-up">Upgrate</div>
              </div>
            </div>
          </div>

          <div className="gray-line"></div>

          <div className="personal-info">
            <p className="title-p">Personal Info</p>

            <div className="info">
              <div className="row">
                <p className="left">Country:</p> <span>Tunisia</span>
              </div>

              <div className="row">
                <p className="right">City:</p> <span>Sfax </span>
              </div>
            </div>

            <div className="info">
              <div className="row">
                <p className="left">States:</p> <span>Hazeg</span>
              </div>

              <div className="row">
                <p className="right">School:</p> <span>Lycée Hazeg </span>
              </div>
            </div>
          </div>
        </div>

        <div className="current-offre">
          <img src={versPilote} alt="versPilote-img" />

          <p className="desc">Your current offer is</p>
          <p className="offre-name">VERS_PILOTE</p>
          <p className="duration">
            Expires on <span>21/06/2022</span>
          </p>
          <div className="progression">
            <div className="level"></div>
          </div>
          <BlueButton content="Upgrade" style="current-offre-btn" />
        </div>
      </div>
    </section>
  );
};

export default MyProfile;
