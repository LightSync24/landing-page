import React from "react";
import "../App.css";
import {
  HiAcademicCap,
  HiCalendar,
  HiCubeTransparent,
  HiChartPie,
  HiCurrencyRupee,
  HiDocumentReport,
} from "react-icons/hi";

const WhyMe = () => {
  return (
    <div>
      <div className="whyMe">
        <h1>Why should You go ahead with Me?</h1>
        <div className="points-container">
          <div className="points">
            <HiAcademicCap
              size={30}
              style={{ background: "white", color: "#C16E70" }}
            />
            <p>Lorem ipsum dolor, sit amet consectetur</p>
          </div>
          <div className="points">
            <HiCalendar
              size={30}
              style={{ background: "white", color: "#C16E70" }}
            />
            <p>Lorem ipsum dolor, sit amet consectetur</p>
          </div>
          <div className="points">
            <HiChartPie
              size={30}
              style={{ background: "white", color: "#C16E70" }}
            />
            <p>Lorem ipsum dolor, sit amet consectetur</p>
          </div>
          <div className="points">
            <HiCubeTransparent
              size={30}
              style={{ background: "white", color: "#C16E70" }}
            />
            <p>Lorem ipsum dolor, sit amet consectetur</p>
          </div>
          <div className="points">
            <HiCurrencyRupee
              size={30}
              style={{ background: "white", color: "#C16E70" }}
            />
            <p>Lorem ipsum dolor, sit amet consectetur</p>
          </div>
          <div className="points">
            <HiDocumentReport
              size={30}
              style={{ background: "white", color: "#C16E70" }}
            />
            <p>Lorem ipsum dolor, sit amet consectetur</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyMe;
