import { useState } from "react";
import Popup from "../components/Popup";
import "../styles/FreeShipping.css";
function FreeShipping() {
  const [buttonPopup, setButtonPopup] = useState(false);

  let countDownDate = new Date("April 1, 2023 12:00:00").getTime();
  let x = setInterval(function () {
    let now = new Date().getTime();
    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(distance / (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
      days + "D " + hours + "H " + minutes + "M " + seconds + "S";
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown").innerHTML = "Free Shipping ended";
    }
  }, 1000);
  return (
    <>
      <div className="ribbon" onClick={() => setButtonPopup(true)}>
        <div className="inner-ribbon-left">
          <div className="inner-left-text">HURRY! ENDS IN : </div>{" "}
          <div className="inner-left-countdown">
            <p id="countdown"></p>
          </div>
        </div>
        <div className="inner-ribbon-right">
          <div className="block">
            <div className="free right">
              {" "}
              <h1>FREE SHIPPING</h1>
            </div>
            <div className="on-price right">
              {" "}
              <h4>ON ORDERS OVER $25</h4>
            </div>
          </div>
          <div className="code right">
            <h4>
              USE CODE: <span className="bold">KICK</span>{" "}
            </h4>
          </div>
          <div className="click right">
            <h5>*CLICK FOR DETAILS</h5>
          </div>
        </div>
      </div>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}></Popup>
    </>
  );
}

export default FreeShipping;
