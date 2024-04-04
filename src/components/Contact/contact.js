import React, { useRef } from "react";
import "./contact.css";
import FacebookIcon from "../../assets/facebook-icon.png";
import InstagramIcon from "../../assets/instagram.png";
import LinkedinIcon from "../../assets/linkedin.png";
import GithubIcon from "../../assets/GitHub.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5wkwkrq",
        "template_gowywpl",
        form.current,
        "NdVcHvbwHPnghxYvy"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email Sent !");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form if you want to contact me
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="your_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="your_email"></input>
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="your Message"></textarea>
          <button type="submit" value="Send" className="submitBtn">
            Submit
          </button>
          <div className="links">
            <a
              href="https://www.facebook.com/markbonasardo.siahaan"
              target="_blank"
              rel="noreferrer">
              <img src={FacebookIcon} alt="Facebook" className="link" />
            </a>

            <a
              href="https://www.instagram.com/nathanutama.s/"
              target="_blank"
              rel="noreferrer">
              <img src={InstagramIcon} alt="Instagram" className="link" />
            </a>
            <a
              href="https://www.linkedin.com/in/nathan-utama-86ba65246/"
              target="_blank"
              rel="noreferrer">
              <img src={LinkedinIcon} alt="linkedin" className="link" />
            </a>
            <a
              href="https://github.com/Utama145"
              target="_blank"
              rel="noreferrer">
              <img src={GithubIcon} alt="github" className="link" />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
