import React from "react";
import Calculator from "./calculator.png";
import Chess from "./chess.png";

function Projects() {
  return (
    <div className="fullProjectBackground">
      <section className="formIntro">
        <h1 className="projecth1">My Projects</h1>
      </section>
      <section className="projectGridContainer">
        <div className="projectGrid">
          <a
            className="project"
            href="https://github.com/eajasin/Calculator-Project"
          >
            <div
              className="projectBackground"
              style={{
                background: `url(https://images.pexels.com/photos/1314536/pexels-photo-1314536.jpeg?auto=compress&cs=tinysrgb&w=1600)`,
              }}
            ></div>
            <div className="projectContentContainer">
              <h3 className="projecth3">NectarNums Calculator</h3>
            </div>
          </a>
          <a className="project" href="">
            <div
              className="projectBackground"
              style={{
                backgroundImage: `url(https://images.pexels.com/photos/1660753/pexels-photo-1660753.jpeg?auto=compress&cs=tinysrgb&w=1600)`,
              }}
            ></div>
            <div className="projectContentContainer">
              <h3 className="projecth3">No Check Chess</h3>
            </div>
          </a>
          <a className="project" href="#">
            <div
              className="projectBackground"
              style={{
                backgroundImage: `url(https://images.pexels.com/photos/1159675/pexels-photo-1159675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
              }}
            ></div>
            <div className="projectContentContainer">
              <h3 className="projecth3">Pomodorable Timer</h3>
            </div>
          </a>
          <a className="project" href="#">
            <div
              className="projectBackground"
              style={{
                backgroundImage: `url(https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1600)`,
              }}
            ></div>
            <div className="projectContentContainer">
              <h3 className="projecth3">PassWord Crafter</h3>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Projects;
