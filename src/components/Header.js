import "../styles/Header.css";
import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import List from "./List";

function Header() {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
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
      <div className="middle-navbar">
        <div className="search">
          <TextField
            id="outlined-basic"
            onChange={inputHandler}
            variant="outlined"
            fullWidth
            label="Search"
          />
        </div>
        <List input={inputText} />
      </div>
      <div className="right-navbar"></div>
    </nav>
  );
}

export default Header;
