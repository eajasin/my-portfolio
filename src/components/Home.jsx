import React from "react";
import Me from "./toonMe.jpg";
import LinkedIn from "./linkedin.png";
import Github from "./github.jpg";

function Home() {
  return (
    <main>
      <section className="welcomeContainer">
        <h1 className="homeh1">Welcome!</h1>
        <h2 className="homeh2">
          <span className="effect">
            I'm Elizabeth, and I'm a full-stack developer 👩🏾‍💻
          </span>
        </h2>
        <button>My Projects</button>
      </section>

      <section className="parallax" color="white"></section>

      <section className="aboutMe">
        <h2 className="contacth1">About Me</h2>
        <div className="aboutMeContainer">
          <div className="aboutMeText">
            Stuff about myselfStuff about myselfStuff about myselfStuff about
            myself Stuff about myselfStuff about myselfStuff about myselfStuff
            about myselfStuff about myself Stuff about myselfStuff about
            myselfStuff about myselfStuff about myselfStuff about myselfStuff
            about myself Stuff about myselfStuff about myselfStuff about
            myselfStuff about myselfStuff about myselfStuff about myself Stuff
            about myselfStuff about myselfStuff about myselfStuff about
            myselfStuff about myselfStuff about myselfStuff about myself I'm
            open to Job opportunities where I can contribute, learn and grow. If
            you have a good opportunity that matches my skills and experience
            then don't hesitate to contact me
          </div>
          <div className="mySkills">
            <div> My Skills </div>
            <div>Javascript</div>
            <div>React</div>
            <div>CSS</div>
            <div>HTML</div>
          </div>
          <a href="contact-page.html">Contact</a>
        </div>
      </section>
      {/* <section className="footer"></section> */}
      <footer>
        <div className="footerContainer">
          <div className="footerLeft">
            <img src={Me} alt="Link to Home" />
            Elizabeth, Full Stack Developer
          </div>
          <div className="footerRight">
            <h2>SOCIAL</h2>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://linkedin.com/elizabethajasin"
            >
              <img src={LinkedIn} alt="LinkedIn Page" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/eajasin"
            >
              <img src={Github} alt="gitHub Page" />
            </a>
          </div>
        </div>
        <div> 2023 Website </div>
      </footer>
    </main>
  );
}

export default Home;

// <div>

//   <p>Stuff about myselfStuff about myselfStuff about myselfStuff about myself
//   Stuff about myselfStuff about myselfStuff about myselfStuff about myselfStuff about myself
//   Stuff about myselfStuff about myselfStuff about myselfStuff about myselfStuff about myselfStuff about myself
//   Stuff about myselfStuff about myselfStuff about myselfStuff about myselfStuff about myselfStuff about myself
//   Stuff about myselfStuff about myselfStuff about myselfStuff about myselfStuff about myselfStuff about myselfStuff about myself
//   </p>
//   <div className="hpImage2"> Image 2</div>
//   <div className="icons">Social Media Icons: 😊😊😊</div>

// </div>
