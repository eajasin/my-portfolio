import React from "react";

function Projects() {
  return (
    <div>
      <h1>These Are My Projects :)</h1>
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
