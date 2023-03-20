import "../styles/Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="customer-service">
        <h4>Customer Service</h4>
        <a href="#">Contact Us</a>
        <a href="#">Help</a>
        <a href="#">Track Order</a>
      </div>
      <div className="shipping">
        <h4>Worry Free Shipping</h4>
        <a href="#">Safe Shopping</a>
        <a href="#">Shipping Rates</a>
        <a href="#">Return Policy</a>
      </div>
      <div className="info">
        <h4>Information</h4>
        <a href="#">My Account</a>
        <a href="#">About Us</a>
      </div>
      <div className="signup">
        <h5>Stay updated on sales, new items and more</h5>
        <button type="text" className="signup-btn">SIGN UP AND SAVE 10%</button>
      </div>
    </div>
  );
}

export default Footer;
