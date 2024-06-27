import React from "react";
import "../styles/Body.scss";
import img3 from "../assets/temp3.png";
import img2 from "../assets/temp2.png";

const Body = () => {
  return (
    <div>
      <div className="main-body">
        <div className="top">
          <div className="left">
            <div className="inside-left">
              <img src={img3} alt="" />
            </div>
          </div>
          <div className="right">
            <div className="inside-right">
              <div className="inside-inside-right"></div>
            </div>
          </div>
        </div>
        <div className="mid">
          <div className="mid-left">
            <div className="basic-heading">witt.</div>
            <div className="similar-container">
              <div className="main-heading">your</div>
              <div className="main-heading">second</div>
              <div className="main-heading">brain</div>
            </div>
            <p className="basic-details">
              a personal assistant to organize, track and document your work
            </p>
          </div>
          <div className="mid-right">
            <img src={img2} alt="" />
          </div>
        </div>
        <div className="bottom">
          <div className="bottom-left">
            <div className="inside-bottom-left">Download for Free</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
