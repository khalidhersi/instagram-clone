import React from "react";
import "./UserStats.scss";

const UserStats = (props) => {
  const { followers, following, posts } = props;

  return (
    <div className="user-stats">
      <h3 className="user-stats__posts--count">{posts}</h3>
      <h3 className="user-stats__posts">Posts</h3>

      <h3 className="user-stats__followers--count">{followers}</h3>
      <h3 className="user-stats__followers">Followers</h3>

      <h3 className="user-stats__following--count">{following}</h3>
      <h3 className="user-stats__following">Following</h3>
    </div>
  );
};

export default UserStats;
