import React from 'react';
import "./Nav.scss"
import instaLogo from "../../assets/images/insta-logo.png";
import home from "../../assets/images/home.png";
import directMessage from "../../assets/images/direct-message.png";
import more from "../../assets/images/more.png";
import broadcast from "../../assets/images/broadcast.png";
import heart from "../../assets/images/heart.png";
import user from "../../assets/images/user.png";

const Nav = () => {
  return <div className='NavBar'>
    <ul className='NavBar__list'>
    <h1 className='NavBar__logo '>𝓘𝓷𝓼𝓽𝓪𝓰𝓻𝓪𝓶</h1>
      <img src={home} alt="home logo" className='NavBar__list__items'/>
      <img src={directMessage} alt="directMessage logo" className='NavBar__list__items'/>
      <img src={more} alt="more logo" className='NavBar__list__items'/>
      <img src={broadcast} alt="broadcast logo" className='NavBar__list__items'/>
      <img src={heart} alt="heart logo" className='NavBar__list__items'/>
      <img src={user} alt="user logo" className='NavBar__list__items'/>
    </ul>
  </div>;
};

export default Nav;
