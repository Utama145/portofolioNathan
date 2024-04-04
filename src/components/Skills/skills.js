import React from "react";
import "./skills.css";
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";

const skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">what I do</span>
      <span className="skillDesc">
       I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites. I have a good understanding of design principles and am proficient in HTML, CSS, and JavaScript.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={UIDesign} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>UI/UX Design</h2>
            <p>
              I can create excellent UI/UX designs that feature visually
              appealing and user-friendly interfaces
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={WebDesign} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Website Design</h2>
            <p>
              I am proficient in creating responsive frontend website layouts
              using various types of frameworks
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default skills;
