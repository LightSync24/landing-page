import React from "react";
import "../App.css";

const CTA = () => {
  return (
    <div className="cta">
      <div className="cta-text">
        <h1 style={{ backgroundColor: "#fada50" }}>Enroll Now: &nbsp;</h1>
        <ul style={{ backgroundColor: "#fada50", listStyle: "none" }}>
          <li style={{ backgroundColor: "#fada50" }}>
            Get the maximum benefits
          </li>
          <li style={{ backgroundColor: "#fada50" }}>
            Maximum profits will be obtained
          </li>
          <li style={{ backgroundColor: "#fada50" }}>
            The first 100 get additional 10% off!
          </li>
        </ul>
      </div>
      <hr />
      <div style={{ backgroundColor: "#fada50" }} id="bottom-right">
        <h1 style={{ backgroundColor: "#fada50" }}>Get Our product!</h1>
        <p style={{ backgroundColor: "#fada50" }}>&#8377;999</p>
        <button className="join_btn_2">Register</button>
      </div>
    </div>
  );
};

export default CTA;
