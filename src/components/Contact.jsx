import React from "react";

function Contact() {
  return (
    <div>
      <section className="formIntro">
        <h1>Contact</h1>
        <h2>
          Feel free to contact me by submitting the form below, and I will get
          back to you as soon as possible.
        </h2>
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
          <input placeholder="Enter Your Message"></input>
          <button className="contactSubmitButton">Submit</button>
        </form>
      </section>
      <section>Other Section</section>
    </div>
  );
}

export default Contact;
