import "../styles/Header.css";
import { React, useState } from "react";
import List from "./List";

function Header() {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    let lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  return (
    <nav className="navbar">
      <div className="left-navbar">
        <img
          className="jets-img"
          src={require("../images/nyjets.png")}
          alt="NY Jets logo"
        />
        <h2>JETS SHOP</h2>
      </div>
      <div className="right-navbar">
        <input id="searchbar" className="search" onChange={inputHandler} type="text"
         placeholder="Search"/>
        <List input={inputText} />
      </div>
    </nav>
  );
}

export default Header;

// <TextField
//id="outlined-basic"
//onChange={inputHandler}
//variant="outlined"
//fullWidth
//label="Search"
///>