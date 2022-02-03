import "./App.scss";
import Nav from "./Components/Nav/Nav";
import UserInfo from "./Components/UserInfo/UserInfo";
import UserStats from "./Components/UserStats/UserStats";
import GalleryBar from "./Components/GalleryBar/GalleryBar";
import Gallery from "./Components/Gallery/Gallery";

function App() {
  return (
    <div className="App">
      <Nav/>
      <UserInfo/>
      <UserStats/>
      <GalleryBar/>
      <Gallery/>
    </div>
  );
}

export default App;
