import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/resume.css";
import Left from "../images/normal.jpg";
export default function Resume() {
  const [isDesktop, setIsDesktop] = useState(false);
  function MediaQuery() {
    useEffect(() => {
      const media = window.matchMedia("(min-width: 700px)");
      const listener = () => setIsDesktop(media.matches);
      listener();
      window.addEventListener("resize", listener);

      return () => window.removeEventListener("resize", listener);
    }, [isDesktop]);

    return <div className="App">{isDesktop ? null : null}</div>;
  }

  const About = {
    paddingTop: "10%",
    paddingLeft: "10%"
  };
  const AboutMob = {
    paddingTop: "10%",
    paddingLeft: "10%",
    textAlign: "center"
  };
  const hrline = {
    width: "110px",
    height: "3px",
    backgroundColor: "#fb0303",
    marginLeft: "10%",
    opacity: " 100%"
  };
  const hrlineMob = {
    width: "110px",
    height: "3px",
    backgroundColor: "#fb0303",
    marginLeft: "35%",
    opacity: " 100%"
  };
  const whatcani = {
    paddingTop: "10%"
  };
  const whatcani_hr = {
    width: "110px",
    height: "3px",
    backgroundColor: "#fb0303",

    opacity: " 100%"
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div
        class="row"
        style={{
          width: "100%",
          height: "100%"
        }}
      >
        {isDesktop ? (
          <div
            class="col backpic1 left-half "
             style={{ textAlign: "end", backgroundImage: `url(${Left})` }}
          ></div>
        ) : null}

        <div class="col" style={{ height: "100%" }}>
          <div
            className="backpic-About box"
            style={{
              width: "100%",
              height: "100%",
              overflow: "scroll"
            }}
          >
            <MediaQuery />
            <h1 style={isDesktop ? About : AboutMob}>EDUCATION</h1>
            <hr style={isDesktop ? hrline : hrlineMob} />
            <div style={{ padding: "10%", paddingTop: "0px" }}>
              <h3>Kongu Engineering College</h3>
              <h5>2018-2021</h5>

              <p align="justify" style={{ marginTop: "5%" }}>
                Kongu Engineering College is an engineering college located at
                Perundurai, Erode district in the state of Tamil Nadu in India.
                It is affiliated to Anna University and accredited 'A' Grade by
                National Assessment and Accreditation Council.
              </p>

              <h3 align="left">
                SSM Lakshmi Ammal Matric Higher Secondary School
              </h3>
              <h5>2017-2018</h5>

              <p align="justify" style={{ marginTop: "5%" }}>
                It is a reputed school which is situated on the confluence of
                Bhavani and Cauvery river on the outskirts of Komarapalayam.
                S.S.M. School has fully modernised infrastructure with all
                necessary facilities
              </p>

              <hr style={{ marginTop: "15%" }} />
              <h1 style={isDesktop ? whatcani : AboutMob}>SKILLS</h1>
              <hr style={isDesktop ? whatcani_hr : hrlineMob} />
              <div>
                <p align="justify">
                  My strongest skill is my creativity. Being able to gather
                  client’s requirements and translate those into an engaging,
                  effective and unique websites.
                </p>

                <div class="skills">
                  <div class="skill" id="html">
                    <span class="title">React.js</span>
                    <div class="progress-bar">
                      <div class="progress"></div>
                    </div>
                  </div>

                  <div class="skill" id="css">
                    <span class="title">Express.js</span>
                    <div class="progress-bar">
                      <div class="progress"></div>
                    </div>
                  </div>

                  <div class="skill" id="js">
                    <span class="title">Bootstrap</span>
                    <div class="progress-bar">
                      <div class="progress"></div>
                    </div>
                  </div>
                  <div class="skill" id="css">
                    <span class="title">MongoDB</span>
                    <div class="progress-bar">
                      <div class="progress"></div>
                    </div>
                  </div>
                  <div class="skill" id="js">
                    <span class="title">Node.js</span>
                    <div class="progress-bar">
                      <div class="progress"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
