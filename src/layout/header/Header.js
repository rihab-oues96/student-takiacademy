import React, { useState } from "react";
import "./Header.scss";

import search from "../../assets/icons/search.png";
import down from "../../assets/icons/down.png";
import myWallet from "../../assets/icons/myWallet.png";
import notification from "../../assets/icons/notification.png";
import user from "../../assets/images/user.png";
import SubMenu from "../../components/subMenu/SubMenu";
import SelectLanguage from "../../components/selectLanguage/SelectLanguage";
import up from "../../assets/icons/up.png";
import MessagesCard from "../../components/messagesCard/MessagesCard";
import menu from "../../assets/icons/menu.png";
import { useDispatch } from "react-redux";
import { openSidebar } from "../../features/sideBar/SidebarSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();

  const [openSubMenu, setOpenSubMenu] = useState(false);
  const [openMessagesCard, setOpenMessagesCard] = useState(false);

  const toggleSubMenuHandler = () => {
    setOpenSubMenu(!openSubMenu);
  };

  const toggleMessageCardHandler = () => {
    setOpenMessagesCard(!openMessagesCard);
  };

  return (
    <section className="header">
      <img
        src={menu}
        alt="menu-icon"
        className="menu-icon"
        onClick={() => dispatch(openSidebar())}
      />

      <div className="search-bloc">
        <img src={search} alt="icon-search" />
        <input
          type="text"
          placeholder="Chercher cours, examens our exercices..."
        />
      </div>

      <div className="right-side">
        <div className="infos">
          {/* <SelectLanguage /> */}

          <Link to="my-wallet">
            <div className="wallet">
              <img src={myWallet} alt="wallet-icon" />
              <div className="solde">
                <p>votre solde</p>
                <span>0 Pts</span>
              </div>
            </div>
          </Link>

          <div className="notification" onClick={toggleMessageCardHandler}>
            <img src={notification} alt="notification-icon"></img>
          </div>

          {openMessagesCard && (
            <MessagesCard toggleMessageCardHandler={toggleMessageCardHandler} />
          )}
        </div>
        <div className="user">
          <img src={user} alt="user-img" />

          <div className="user-desc">
            <p>Karim Benmbarek</p>
            <span>7éme de base</span>
          </div>

          <img
            src={openSubMenu ? up : down}
            alt="down-icon"
            onClick={toggleSubMenuHandler}
          />

          {openSubMenu && <SubMenu />}
        </div>
      </div>
    </section>
  );
};

export default Header;
