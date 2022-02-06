import "./App.scss";
import Nav from "./Components/Nav/Nav";
import User from "./Components/User/User";
import UserStats from "./Components/UserStats/UserStats";
import GalleryBar from "./Components/GalleryBar/GalleryBar";
import Gallery from "./Components/Gallery/Gallery";


function App() {
  return (
    <div className="App">
      <Nav/>
      <User/>
      <UserStats/>
      <GalleryBar/>
      <Gallery/>
    </div>
  );
}

export default App;
