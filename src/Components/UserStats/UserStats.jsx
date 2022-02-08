import React from "react";
import "./UserStats.scss";

const UserStats = (props) => {
  const { followers, following, posts } = props;

  return (
    <div className="user-stats">
      <div className=" user-stats__containers">
        <h3 className="user-stats__count">{posts}</h3>
        <h3 className="user-stats__title">Posts</h3>
      </div>
      <div className="user-stats__containers">
        <h3 className="user-stats__count">{followers}</h3>
        <h3 className="user-stats__title">Followers</h3>
      </div>
      <div className="user-stats__containers">
        <h3 className="user-stats__count">{following}</h3>
        <h3 className="user-stats__title">Following</h3>
      </div>
    </div>
  );
};

export default UserStats;
