import React from "react";
import "./works.css";
import Portofolio1 from "../../assets/portfolio-1.png";
import Portofolio2 from "../../assets/portfolio-2.png";
import Portofolio3 from "../../assets/portfolio-3.png";

const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">My Portofolio</h2>
      <span className="worksDesc">
        I have been working on several small projects that have sharpened my
        understanding in creating website layouts. This serves as evidence of my
        diligence in crafting website interfaces using HTML, CSS, and JavaScript
      </span>
      <div className="worksImgs">
        <div class="card">
          <a
            href="https://github.com/Utama145/Dell_tailwind"
            target="_blank"
            rel="noreferrer">
            <img src={Portofolio1} alt="Avatar" className="worksImg" />
          </a>
          <div class="container">
            <h4>
              <b>Dell website interface project using Tailwind</b>
            </h4>
          </div>
        </div>
        <div class="card">
          <a
            href="https://github.com/Utama145/dell-clone"
            target="_blank"
            rel="noreferrer">
            <img src={Portofolio1} alt="Avatar" className="worksImg" />
          </a>
          <div class="container">
            <h4>
              <b>Dell website interface project using Boostrap</b>
            </h4>
          </div>
        </div>
        <div class="card">
          <a
            href="https://github.com/Utama145/bandung"
            target="_blank"
            rel="noreferrer">
            <img src={Portofolio2} alt="Avatar" className="worksImg" />
          </a>
          <div class="container">
            <h4>
              <b>Dicoding Project, create a project called "Bandung"</b>
            </h4>
          </div>
        </div>
        <div class="card">
          <a
            href="https://github.com/Utama145/dicoding/tree/main/Projek_Akhir_Nathan_Dicoding"
            target="_blank"
            rel="noreferrer">
            <img src={Portofolio2} alt="Avatar" className="worksImg" />
          </a>
          <div class="container">
            <h4>
              <b>Dicoding Project</b>
            </h4>
          </div>
        </div>
        <div class="card">
          <a
            href="https://github.com/Utama145/shopping"
            target="_blank"
            rel="noreferrer">
            <img src={Portofolio3} alt="Avatar" className="worksImg" />
          </a>
          <div class="container">
            <h4>
              <b>E-Commerce Website</b>
            </h4>
          </div>
        </div>
      </div>

      {/* <button className="worksBtn">See More</button> */}
    </section>
  );
};

export default Works;
