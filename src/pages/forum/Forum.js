import React from "react";
import "./Forum.scss";

import logo from "../../assets/images/logo.png";
import BlueButton from "../../components/buttons/blueButton/BlueButton";

const Forum = () => {
  return (
    <section className="forum">
      <div className="forum-login-component">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <p className="welcome">Welcome Back</p>

        <p className="infos">
          An account is required. Please ask an existing member for an invite or
          log in to continue.
        </p>

        <form>
          <label>
            Phone Number or Email <span>*</span>
          </label>
          <input type="text" placeholder="Enter your phone number" />

          <label>
            Password <span>*</span>
          </label>
          <input type="text" placeholder="Enter your password" />

          <BlueButton content='Login' style='login' />
        </form>
      </div>
    </section>
  );
};

export default Forum;
