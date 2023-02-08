import React from "react";
import "./SubMenu.scss";

import user from "../../assets/icons/user.png";
import bookmark from "../../assets/icons/bookmark.png";
import history from "../../assets/icons/history.png";
import share from "../../assets/icons/share.png";

const SubMenu = () => {
  return (
    <div className="submenu">
      <nav>
        <img src={user} alt="user-icon" />
        <p>My Profile</p>
      </nav>

      <nav>
        <img src={bookmark} alt="user-icon" />
        <p>Favourite</p>
      </nav>

      <nav>
        <img src={history} alt="user-icon" />
        <p>History</p>
      </nav>

      <nav>
        <img src={share} alt="user-icon" />
        <p>Log out</p>
      </nav>
    </div>
  );
};

export default SubMenu;
