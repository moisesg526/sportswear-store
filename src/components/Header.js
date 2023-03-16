import "../styles/Header.css";
function Header() {
  return (
    <nav className="navbar">
      <div className="left-navbar">
      <img className="jets-img" src={require("../images/nyjets.png")} alt="NY Jets logo" />
      <h2>JETS SHOP</h2>
      </div>
      <div className="middle-navbar"></div>
      <div className="right-navbar"></div>
      
    </nav>
  );
}

export default Header;
