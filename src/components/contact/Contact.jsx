import React, { useState } from "react";
import axios from "axios";
import shapeOne from "../../assets/shape-1.png";

import { FaRegMap, FaRegEnvelope, FaRegAddressBook } from "react-icons/fa";

import "./contact.css";
import { useWasViewed } from "../../hook/useWasViewd";
import Seo from "../SEO/Seo";

const Contact = () => {
  const { setRef, wasViewed } = useWasViewed();
  const animation = wasViewed ? "animate-fade-in-up " : "null";
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //if you want to use an api for form, just put the api url here.
    // axios.post(
    //   "FORM_API_HERE",
    //   form
    // );
    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };
  return (
    <section className="section contact" id="contact">
      <Seo />
      <h2 className="section__title text-css">CONTACT ME</h2>
      <p className="section__subtitle">
        text<span> Me</span>
      </p>

      <div
        ref={setRef}
        className={`contact__container container grid ${animation}`}
      >
        <div className="contact__content">
          <div className="contact__card">
            <span className="contact__card-icon">
              <FaRegMap />
            </span>
            <h3 className="contact__card-title">Address</h3>
            <p className="contact__card-data">St John's, Canada</p>
          </div>

          <div className="contact__card">
            <span className="contact__card-icon">
              <FaRegEnvelope />
            </span>
            <h3 className="contact__card-title">Email</h3>
            <p className="contact__card-data">agujjar@mun.ca</p>
          </div>

          <div className="contact__card">
            <span className="contact__card-icon">
              <FaRegAddressBook />
            </span>
            <h3 className="contact__card-title">Phone</h3>
            <p className="contact__card-data">+1(709-986-5877)</p>
          </div>
        </div>

        <form
          name="contact"
          method="post"
          onSubmit={handleSubmit}
          action=""
          className="contact__form"
        >
          <div className="contact__form-group grid">
            <div className="contact__form-div">
              <label htmlFor="name" className="contact__form-tag text-css">
                Your Full Name <b>*</b>
              </label>
              <input
                id="name"
                type="text"
                value={form.name}
                name="name"
                onChange={handleChange}
                className="contact__form-input"
              />
            </div>

            <div className="contact__form-div">
              <label htmlFor="email" className="contact__form-tag text-css">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                value={form.email}
                name="email"
                onChange={handleChange}
                className="contact__form-input"
              />
            </div>
          </div>

          <div className="contact__form-div">
            <label htmlFor="subject" className="contact__form-tag text-css">
              Your Subject
            </label>
            <input
              type="text"
              id="subject"
              value={form.subject}
              name="subject"
              onChange={handleChange}
              className="contact__form-input"
            />
          </div>

          <div className="contact__form-div contact__form-area">
            <label htmlFor="message" className="contact__form-tag text-css">
              Your Message <b>*</b>
            </label>
            <textarea
              type="text"
              id="message"
              value={form.message}
              name="message"
              onChange={handleChange}
              className="contact__form-input"
            ></textarea>
          </div>

          <div className="contact__submit">
            <button type="submit" className="btn text-css">
              Send Message
            </button>
          </div>
        </form>
      </div>

      <div className="section__deco deco__right">
        <img src={shapeOne} alt="" className="shape" />
      </div>
    </section>
  );
};

export default Contact;
