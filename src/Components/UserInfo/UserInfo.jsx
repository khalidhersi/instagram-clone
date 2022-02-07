import React from 'react';
import "./UserInfo.scss";

const UserInfo = (props) => {
  const {aboutMe, links, nickName} = props;
//  const {aboutMe, links, nickName,profilePic,userName} = props;

  return <div className='user-info'>
      <h4 className='user-info__name--secondary'>{nickName}</h4>
      <p className="user-info__about-me">{aboutMe}</p>
      <i className="user-info__more far fa-ellipsis-h"/>
      <a href={links} className='user-info__links'>www.khalid-hersi.com</a>
  </div>;
};

export default UserInfo;
