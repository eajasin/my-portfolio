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
            Hello there! I'm a passionate and dedicated individual on a journey
            to transition into software development. Although I'm relatively new
            to programming, I have been working diligently to build my skills.
            My goal is to become a junior full-stack developer. I'm open to job
            opportunities where I can contribute, learn and grow. If you'd like
            to get in touch with me, please don't hesistate to send me a
            message.
          </div>
          <div className="mySkills">
            <div> Programming Skills </div>
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
          <div className="footerRight">
            <h2></h2>
          </div>
        </div>
        {/* <div> © 2023 </div> */}
      </footer>
    </main>
  );
}

export default Home;
