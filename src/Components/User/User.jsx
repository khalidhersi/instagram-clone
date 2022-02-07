import React from 'react';
import "./User.scss";
import UserInfo from "../UserInfo/UserInfo";
import UserAlbums from "../UserAlbums/UserAlbums";
import UserStats from "../UserStats/UserStats";
import data from "../../assets/data/data.json";


const User = () => {

  return <div className='user'>
      <img src={data.profilePic} alt="" className='user__profile-picture'/>
      <h2 className='user__name'>{data.userName}</h2>
      <i className="user__verfied fa-solid fa-badge-check"></i>
      <i className="user__more far fa-ellipsis-h"></i>
      <div className="user__follow">Follow</div>
      <div className="user__suggestions"><i class="fal fa-angle-down"></i></div>
      <UserInfo nickname={data.nickName} aboutMe={data.aboutMe} links={data.links}/>
      <UserAlbums/>
      <UserStats posts={data.posts} followers={data.followers} following={data.following} />
  </div>;
};

export default User;
