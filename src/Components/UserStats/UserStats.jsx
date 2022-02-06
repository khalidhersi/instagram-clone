import React from "react";
import "./UserStats.scss";

const UserStats = () => {
  return (
    <div className="user-stats">
      <h3 className="user-stats__posts--count">16889</h3>
      <h3 className="user-stats__posts">Posts</h3>

      <h3 className="user-stats__followers--count">13.7m</h3>
      <h3 className="user-stats__followers">Followers</h3>

      <h3 className="user-stats__following--count">7</h3>
      <h3 className="user-stats__following">Following</h3>
    </div>
  );
};

export default UserStats;
