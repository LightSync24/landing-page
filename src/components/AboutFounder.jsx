import React from "react";
import { person } from "../assets";
import "../App.css";

const AboutFounder = () => {
  return (
    <div>
      <div className="about">
        <div className="about_sub">
          <img src={person} />
          <div className="about_text">
            <h3 style={{ background: "white" }}>Meet John</h3>
            <p style={{ background: "white" }}>
              <span style={{fontWeight: 'bolder', background: "white"}}>Our Founder</span>, John had been Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Possimus aspernatur magni natus atque sapiente
              mollitia, consequuntur tempora repellendus iusto libero aperiam
              rem, autem asperiores saepe pariatur. Quis nihil suscipit
            </p>
          </div>
          <div className="about_text">
            <h3 style={{ background: "white" }}>John's Vision</h3>
            <p style={{ background: "white" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              aspernatur magni natus atque sapiente mollitia, consequuntur
              tempora repellendus iusto libero aperiam rem, autem asperiores
              saepe pariatur. Quis nihil suscipit reprehenderit?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFounder;
