import { Link } from "react-router-dom";
import "../styles/MerchBanner.css";

function MerchBanner() {
  return (
    <div className="banner">
      <Link to="/jerseys" className="merchlink">
        <h4>Jerseys</h4>
      </Link>
      <Link to="/men" className="merchlink">
        <h4>Men</h4>
      </Link>
      <Link to="/women" className="merchlink">
        <h4>Women</h4>
      </Link>
      <Link to="/shirts" className="merchlink">
        <h4 className="no-show">Shirts</h4>
      </Link>
      <Link to="/sweaters" className="merchlink">
        <h4 className="no-show">Sweaters</h4>
      </Link>
      <Link to="/hats" className="merchlink">
        <h4 className="no-show">Hats</h4>
      </Link>
      <Link to="/jackets" className="merchlink">
        <h4 className="no-show jacket">Jackets</h4>
      </Link>
    </div>
  );
}

export default MerchBanner;
