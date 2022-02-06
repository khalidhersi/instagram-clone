import React from 'react';
import "./User.scss";
import UserInfo from "../UserInfo/UserInfo";

const User = () => {
  return <div className='user'>
      <img src="" alt="" className='user__profile-picture'/>
      <h2 className='user__name'>User Name</h2>
      <i className="user__verfied fa-solid fa-badge-check"></i>
      <i className="user__more far fa-ellipsis-h"></i>
      <div className="user__follow">Follow</div>
      <div className="user__suggestions"><i class="fal fa-angle-down"></i></div>
      <UserInfo/>
      <UserAlbums/>
  </div>;
};

export default User;
