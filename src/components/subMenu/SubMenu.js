import React from "react";
import "./SubMenu.scss";

import { submenuItems } from "../../data";

const SubMenu = () => {
  return (
    <div className="submenu">
      {submenuItems.map((item, index) => (
        <nav key={index}>
          <img src={item.image} alt="user-icon" />
          <p>{item.item}</p>
        </nav>
      ))}
    </div>
  );
};

export default SubMenu;
