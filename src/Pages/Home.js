import "../App.css";
import NavBar from "./Components/NavBar";

// Ref - https://netflix-clone-by-shivam.netlify.app/movies

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">{NavBar()}</header>
    </div>
  );
};

export default Home;
