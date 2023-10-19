import React from "react";

function Projects() {
  return (
    <div className="fullProjectBackground">
      <section className="formIntro">
        <h1>These are my projects</h1>
        <h2>
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
                backgroundImage: `url(https://media.cnn.com/api/v1/images/stellar/prod/170407220916-04-iconic-mountains-matterhorn-restricted.jpg?q=w_2512,h_1413,x_0,y_0,c_fill/h_618)`,
              }}
            ></div>
            <div className="projectContentContainer">
              <h3 className="projectName">NectarNums Calculator</h3>
            </div>
          </a>
          <a className="project" href="#">
            <div
              className="projectBackground"
              style={{
                backgroundImage: `url(https://media.cnn.com/api/v1/images/stellar/prod/170407220916-04-iconic-mountains-matterhorn-restricted.jpg?q=w_2512,h_1413,x_0,y_0,c_fill/h_618)`,
              }}
            ></div>
            <div className="projectContentContainer">
              <h3 className="projectName">NectarNums Calculator</h3>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Projects;
