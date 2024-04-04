import React from "react";
import "./intro.css";
import bg from "../../assets/image.png";


export const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello</span>
        <span className="introText">
          I'm <span className="introName">Nathan</span>
          <br /> Website Designer
        </span>
        <p className="introPara">
          I am a skilled web designer with experience in creating <br/>visually
          appealing and user friendly websites
        </p>
       
      </div>
      <img src={bg} alt="profile" className="bg" />
    </section>
  );
};

export default Intro;
