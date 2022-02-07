import "./App.scss";
import Nav from "./Components/Nav/Nav";
import User from "./Components/User/User";
import Gallery from "./Components/Gallery/Gallery";


function App() {
  return (
    <div className="App">
      <Nav/>
      <User/>
      <Gallery/>
    </div>
  );
}

export default App;
