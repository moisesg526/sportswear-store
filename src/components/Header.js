import "../styles/Header.css";
import { React, useState } from "react";
import List from "./List";
import { Link } from "react-router-dom";

function Header() {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    let lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">
        <div className="left-navbar">
          <img
            className="jets-img"
            src={"images/nyjets.png"}
            alt="NY Jets logo"
          />
          <h2>JETS SHOP</h2>
        </div>
      </Link>
      <div className="right-navbar">
        <input
          id="searchbar"
          className="search"
          onChange={inputHandler}
          type="text"
          placeholder="Search"
        />
        <List input={inputText} />
      </div>
    </nav>
  );
}

export default Header;
