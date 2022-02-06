import React from 'react';
import "./UserInfo.scss";

const UserInfo = () => {
  return <div className='user-info'>
      <h4 className='user-info__name--secondary'>User Name Secondary</h4>
      <p className="user-info__about-me">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla suscipit quasi doloribus quis minima non excepturi beatae ipsa dolores officia.</p>
      <i className="user-info__more far fa-ellipsis-h"></i>
      <a href='www.khalid-hersi.com' className='user-info__links'/>
  </div>;
};

export default UserInfo;
