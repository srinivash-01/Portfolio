import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/projects.css";
import projects from "../Datas/projects";
import Normal from "../images/lite.png";
export default function Projects() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [filteredProject, setProject] = useState(projects);
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
    function ReactJS() {
      const filteredList = projects.filter((project) => project.type === "ReactJS");
      setProject(filteredList);
    }
    function ExpressJS() {
        const filteredList = projects.filter((project) => project.type === "ExpressJS");
        setProject(filteredList);
      }
      function MERN() {
        const filteredList = projects.filter((project) => project.type === "MERN");
        setProject(filteredList);
      }
      function All() {
          setProject(projects);
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
            style={{ textAlign: "end", backgroundImage: `url(${Normal})` }}
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
            <h1 style={isDesktop ? About : AboutMob}>PROJECTS</h1>
            <hr style={isDesktop ? hrline : hrlineMob} />
            <div style={{ padding: "10%", paddingTop: "0px" }}>
              <div class="btn-group btn-group-toggle" data-toggle="buttons">
                <button class="btn btn-secondary" onClick={All}>All</button>
                <button class="btn btn-secondary" onClick={ReactJS}>ReactJS</button>
                <button class="btn btn-secondary" onClick={ExpressJS}>ExpressJS</button>
                <button class="btn btn-secondary" onClick={MERN}>MERN</button>
              </div>
              <div class="row">
                {filteredProject.map((result) => {
                  return (
                    <div class="col">
                      <div class="card card1">
                        <img src={result.image} alt="project images" />
                        <div class="card-content">
                          <a href={result.href}>
                            <p class="card-category">{result.title}</p>
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
