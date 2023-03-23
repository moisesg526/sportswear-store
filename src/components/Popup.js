import popupStyles from "../styles/Popup.css";
function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <h3>Deal Ends Soon!</h3>
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          X
        </button>
        {props.children}
        <img
          className="freeshipping"
          src={"images/popup.png"}
          alt="Freeshipping popup"
        />
        <h4>Don't Miss Out</h4>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
