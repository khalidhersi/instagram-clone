import React from "react";
import "./UserInfo.scss";

const UserInfo = (props) => {
  const { aboutMe, links, nickName } = props;
  //  const {aboutMe, links, nickName,profilePic,userName} = props;

  return (
    <div className="user-info">
      <h4 className="user-info__nickname">{nickName}</h4>
      <p className="user-info__about-me">{aboutMe}</p>
      <div className="user-info__more">
              <i className="fas fa-ellipsis-h" />
      </div>
      <a href={links} className="user-info__links">
        {links}
      </a>
    </div>
  );
};

export default UserInfo;
