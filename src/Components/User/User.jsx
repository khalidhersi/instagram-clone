import React from "react";
import "./User.scss";

const User = (props) => {
  const { profilePic, userName } = props;

  return (
    <div className="user">
      <img src={profilePic} alt="" className="user__profile-picture" />
      <h2 className="user__name">{userName}</h2>
      <div className="user__verfied">
              <i className="fas fa-check-circle"></i>
      </div>
      <div className="user__more">
              <i className="fas fa-ellipsis-h"></i>
      </div>
      <div className="user__follow">Follow</div>
      <div className="user__suggestions">
        <i className="user__suggestions__arrow fas fa-angle-down"></i>
      </div>
    </div>
  );
};

export default User;
