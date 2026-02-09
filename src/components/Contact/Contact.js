import React from "react";
import "./contact.css";
import mail_icon from "../../assets/mail.jpg";
import location_icon from "../../assets/location.png";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  RiLinkedinFill,
  RiMailLine,
  RiGithubFill,
  RiMenu2Fill,
} from "react-icons/ri";
import { HiOutlineLocationMarker } from "react-icons/hi";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_k5fmucd", "template_r1aukbh", form.current, {
        publicKey: "q9I35UqpA1SXIw8Mr",
      })
      .then(
        () => {
          toast.success("Message Sent", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          console.log("SUCCESS!");
        },
        (error) => {
          toast.error("Error Occured! Send Again", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          console.log("FAILED...", error.text);
        },
      );
  };
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            I am currently available to take on new projects, so feel free to
            message about anything that you want me to work on. You Can contact
            anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <RiMailLine />

              <p>hindu072001@gmail.com</p>
            </div>
            <div className="contact-detail">
              <HiOutlineLocationMarker />

              <p>Nuneaton, WarwickShire, United Kingdom</p>
            </div>
            <div className="git">
              <div className="github">
                <a
                  href="https://github.com/Indraja-Pola/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <RiGithubFill size={46} color="pink" />
                </a>
              </div>
              <div className="linkedin">
                <a
                  href="https://www.linkedin.com/in/indraja-p/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <RiLinkedinFill size={46} color="pink" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <form className="contact-right" ref={form} onSubmit={sendEmail}>
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="from_name" />
          <label htmlFor="">Your Email</label>
          <input type="text" placeholder="Enter your email" name="from_email" />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
          <button className="contact-submit" type="submit" value="send">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
