import "../styles/Form.css";
function Form(props) {
  return props.trigger ? (
    <div className="form">
      <div className="inner-form">
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          X
        </button>
        <h2>Save 10% instantly</h2>
        <h4>
          Get 10% off your first order when you enter your information below.
        </h4>{" "}
        <h4>Exclusive offers available!</h4>
        <h6>*Offer valid to new customers only</h6>
        <div className="form-contents">
          <form action="">
            <input
              className="form-inputs"
              type="text"
              placeholder="Email Address"
              required
            />
            <input
              className="form-inputs"
              type="text"
              placeholder="First Name"
            />
            <input
              className="form-inputs"
              type="text"
              placeholder="Last Name"
            />
          </form>
          <h6>By signing up you agree to receive our monthly emails.</h6>
        </div>
        <div className="btn">
          <button type="submit" className="submit-btn">
            Sign Up!
          </button>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Form;
