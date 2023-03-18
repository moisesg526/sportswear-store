import "../styles/FreeShipping.css";
function FreeShipping() {
  return (
    <div className="ribbon">
      <div className="inner-ribbon-left">HURRY! ENDS IN : </div>
      <div className="inner-ribbon-right">
        <div className="free right">
          {" "}
          <h1>FREE SHIPPING</h1>
        </div>
        <div className="on-price right"> <h4>ON ORDERS OVER $25</h4></div>
        <div className="code right"><h4>[&nbsp;&nbsp; USE CODE: <span className="bold">KICK</span> &nbsp;&nbsp;]</h4></div>
        <div className="click right"><h5>*CLICK FOR DETAILS</h5></div>
      </div>
    </div>
  );
}

export default FreeShipping;
