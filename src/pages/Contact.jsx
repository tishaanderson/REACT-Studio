import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Lottie from "lottie-react";

import footerArrow from "../images/Arrow.json";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa6";

import "../styles/pageStyles/Contact.css";

const notifySuccess = () => {
  toast.success(" Message sent!✌🏻", {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
};

const notifyFailure = () => {
  toast.error("Failed to send message. Please try again.", {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
};

export default function Contact() {
  const form = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_kxnc2s9", "contact_form", form.current, {
        publicKey: "tkX8DGWQM4n_lp3aP",
      })
      .then(
        () => {
          notifySuccess();
          setFormData({ name: "", email: "", subject: "", message: "" }); //Resets form fields
          console.log("SUCCESS!");
        },
        (error) => {
          notifyFailure();
          console.log("FAILED...", error.text);
        }
      );
  };

  const socials = [
    {
      href: "https://www.linkedin.com/in/tisha-anderson",
      alt: "LinkedIn Icon",
      icon: <FaLinkedin />,
    },
    {
      href: "https://github.com/tishaanderson?tab=repositories",
      alt: "Github Icon",
      icon: <FaGithub />,
    },
    {
      href: "https://www.instagram.com/sweet.tea91/",
      alt: "Instagram Icon",
      icon: <FaInstagram />,
    },
  ];

  return (
    <div className="contact">
      <div className="job-search">
        <p className="job-interest">🐚 Interested in full-time, remote junior developer roles.</p>
        <p className="job-interest">
          🦀 Certified in full-stack web development -- willing to do both
          front-end or back-end.
        </p>
        <p className="job-interest">🐬 Also, open to freelance opportunities.</p>
      </div>

      <div className="socials-check">
        <p className="socials-title">Check out my socials!</p>

        <div className="flex-socials">

          <div className="social-icons">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="fa icon"
                alt={social.alt}
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="social-arrow">
            <Lottie animationData={footerArrow} className="arrow" />
          </div>

        </div>
      </div>

      <div></div>

      <section className="contact-box">
        <h2
          className="h1-responsive font-weight-bold text-center contactMe"
        >
          Want to Contact Me??
        </h2>

        <p className="text-center w-responsive mx-auto" id="contact-text">
        <span className="messageMe">Message me on LinkedIn</span> or use my message board below
        </p>
        <p className="thanks">Thanks for checking out my portfolio! 😎</p>

        <div className="row" id="form-section">
          <div className="col-md-12 mb-md-0 mb-5">
            <form
              ref={form}
              onSubmit={sendEmail}
              id="contact-form"
              name="contact-form"
              action="mail.php"
              method="POST"
            >
              <div className="row">
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    <label>Your name</label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="email"
                      name="email"
                      className="form-control"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <label>Your email</label>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-control"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                    <label>Subject</label>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="md-form">
                    <textarea
                      type="text"
                      id="message"
                      name="message"
                      rows="1"
                      className="form-control md-textarea"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                    <label>Your message</label>
                  </div>
                </div>
              </div>

              <div className="text-center text-md-left">
                <button className="btn btn-primary sendButton" type="submit">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
}
