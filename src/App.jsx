import "./App.scss";
import Nav from "./Components/Nav/Nav";
import User from "./Components/User/User";
import Gallery from "./Components/Gallery/Gallery";
import UserInfo from "./Components/UserInfo/UserInfo";
import UserAlbums from "./Components/UserAlbums/UserAlbums";
import UserStats from "./Components/UserStats/UserStats";
import data from "./assets/data/data.json";

function App() {
  return (
    <div className="App">
      <Nav />
      <User profilePic={data.profilePic} userName={data.userName} />
      <UserInfo
        nickName={data.nickName}
        aboutMe={data.aboutMe}
        links={data.links}
      />
      <UserAlbums />
      <UserStats
        posts={data.posts}
        followers={data.followers}
        following={data.following}
      />
      <Gallery />
    </div>
  );
}

export default App;
