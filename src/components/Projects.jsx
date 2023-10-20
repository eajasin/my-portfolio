import React from "react";
import Calculator from "./calculator.png";
import Chess from "./chess.png";

function Projects() {
  return (
    <div className="fullProjectBackground">
      <section className="formIntro">
        <h1 className="projecth1">My Projects</h1>
        <h2 className="projecth2">
          Here you will find some of the personal and clients projects that I
          created with each project containing its own case study
        </h2>
      </section>
      <section className="projectGridContainer">
        <div className="projectGrid">
          <a className="project" href="#">
            <div
              className="projectBackground"
              style={{
                backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdDpFDimJGlkWdsdG1k0mld2lgZs50cLxCZQ&usqp=CAU)`,
              }}
            ></div>
            <div className="projectContentContainer">
              <h3 className="projecth3">NectarNums Calculator</h3>
            </div>
          </a>
          <a className="project" href="#">
            <div
              className="projectBackground"
              style={{
                backgroundImage: `url(https://www.chessgames.com/fen/p713/7r_1pR3b1_p3qpk1_3p4_3Bp1bQ_1P2P3_P2R1PP1_6K1.gif)`,
              }}
            ></div>
            <div className="projectContentContainer">
              <h3 className="projecth3">No Check Chess</h3>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Projects;
