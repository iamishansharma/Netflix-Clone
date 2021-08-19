import { TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Assets } from "../../Assets/Assets";

const NavBar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    setShow(window.pageYOffset > 140);
  };

  const navBar = {
    padding: "25px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    //backgroundColor: "#241341",
  };

  const navBarOptions = {
    fontSize: "18px",
    color: "white",
    marginLeft: "30px",
  };

  return (
    <div style={navBar}>
      <img src={Assets.NFLogo} width="120"></img>
      <h1 style={navBarOptions}>Movies</h1>
      <h1 style={navBarOptions}>TV Shows</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          // backgroundColor: "#243341",
          marginLeft: "auto",
          marginRight: 0,
        }}
      >
        <h1 style={navBarOptions}>Hi, Guest</h1>
        <h1 style={navBarOptions}>Sign In</h1>
      </div>
    </div>
  );
};

export default NavBar;
