import React from "react";
import Me from "./toonMe.jpg";
import LinkedIn from "./linkedin.png";
import Github from "./github.jpg";

function Contact() {
  return (
    <section className="contactBackground">
      <section className="formIntro">
        <h1 className="contacth1">Contact Me</h1>
        {/* <h2 className="contacth2">
          Feel free to contact me by submitting the form below, and I will get
          back to you as soon as possible.
        </h2> */}
      </section>
      <section>
        <form>
          <label htmlFor="name"> Name:</label>
          <input placeholder="Enter Your Name"></input>
          <label htmlFor="email"> Email Address:</label>
          <input placeholder="Enter Your Email"></input>
          <label htmlFor="phone"> Phone:</label>
          <input placeholder="Enter Your Phone Number"></input>
          <label htmlFor="message"> Message:</label>
          <input
            className="messageImage"
            placeholder="Enter Your Message"
          ></input>
          <button className="contactSubmitButton">Submit</button>
        </form>
      </section>
    </section>
  );
}

export default Contact;
