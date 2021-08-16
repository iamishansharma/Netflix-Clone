import "../App.css";
import { Assets } from "../Assets/Assets";

// Ref - https://netflix-clone-by-shivam.netlify.app/movies

const navBarComponent = () => {
  return (
    <div className="NavBar">
      <img src={Assets.NFLogo} width="120"></img>
      <h1 style={navBarOptions}>Movies</h1>
      <h1 style={navBarOptions}>TV Shows</h1>
      <h1 style={navBarOptions}>Hi, Guest</h1>
      <h1 style={navBarOptions}>Sign In</h1>
    </div>
  );
};

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">{navBarComponent()}</header>
    </div>
  );
};

const navBarOptions = {
  fontSize: "18px",
  color: "white",
  marginLeft: "30px",
};

export default Home;
