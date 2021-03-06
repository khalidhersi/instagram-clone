import React from "react";
import "./Nav.scss";
import instaLogo from "../../assets/images/insta-logo.png";
import home from "../../assets/images/home.png";
import directMessage from "../../assets/images/direct-message.png";
import more from "../../assets/images/more.png";
import broadcast from "../../assets/images/broadcast.png";
import heart from "../../assets/images/heart.png";
import user from "../../assets/images/user.png";

const Nav = () => {
  return (
    <div className="navbar">
      {/* <h1 className='NavBar__logo '>ππ·πΌπ½πͺπ°π»πͺπΆ</h1> */}
      <div className="navbar__logo">
        <img
          src={instaLogo}
          alt="logo"
          className="navbar__list__items navbar__logo__items"
        />
      </div>
      <ul className="navbar__list">
      <div className="navbar__search-box">
              <input className="navbar__search-box__input" type="text" placeholder="Search.."></input>
              <i className="navbar__search-box__icon fa-solid fa-magnifying-glass"></i>
      </div>
        <img src={home} alt="home logo" className="navbar__list__items" />
        <img
          src={directMessage}
          alt="directMessage logo"
          className="navbar__list__items"
        />
        <img src={more} alt="more logo" className="navbar__list__items" />
        <img
          src={broadcast}
          alt="broadcast logo"
          className="navbar__list__items"
        />
        <img src={heart} alt="heart logo" className="navbar__list__items" />
        <img src={user} alt="user logo" className="navbar__list__items" />
      </ul>
    </div>
  );
};

export default Nav;
