import React from "react";
import "./know.css";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import Javascript from "../../assets/Javascript.png";
import vue from "../../assets/vue.png";
import react from "../../assets/reactjs.png";
import bootstrap from "../../assets/bootstrap.png";
import tailwind from "../../assets/tailwind.png";

const Know = () => {
  return (
    <section id="known">
      <h1 className="known-title">What I Know</h1>
      <div className="knows">
        <div class="card">
          <img src={html} alt="Avatar" className="worksImg" />

          <div class="container">
            <h4>
              <b>HTML 5</b>
            </h4>
          </div>
        </div>
        <div class="card">
          <img src={css} alt="Avatar" className="worksImg" />

          <div class="container">
            <h4>
              <b>CSS 3</b>
            </h4>
          </div>
        </div>
        <div class="card">
          <img src={Javascript} alt="Avatar" className="worksImg1" />

          <div class="container m-1" >
            <h4>
              <b>JAVASCRIPT</b>
            </h4>
          </div>
        </div>
        <div class="card">
          <img src={vue} alt="Avatar" className="worksImg" />

          <div class="container">
            <h4>
              <b>VUE JS</b>
            </h4>
          </div>
        </div>
        <div class="card">
          <img src={react} alt="Avatar" className="worksImg" />

          <div class="container">
            <h4>
              <b>REACT JS</b>
            </h4>
          </div>
        </div>
        <div class="card">
          <img src={bootstrap} alt="Avatar" className="worksImg" />

          <div class="container">
            <h4>
              <b>BOOTSTRAP 5</b>
            </h4>
          </div>
        </div>
        <div class="card">
          <img src={tailwind} alt="Avatar" className="worksImg" />

          <div class="container">
            <h4>
              <b>TAILWIND</b>
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Know;
