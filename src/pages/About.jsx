import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import PersonIcon from "@mui/icons-material/Person";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import IosShareIcon from "@mui/icons-material/IosShare";
import WebIcon from "@mui/icons-material/Web";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Card } from "react-bootstrap";
import AttractionsIcon from "@mui/icons-material/Attractions";
import Resume from "../resume/Resume.pdf";
import "../styles/about.css";
import Lite from "../images/lite.png";
import Link from '@material-ui/core/Link';
export default function About() {
  const [isDesktop, setIsDesktop] = useState(false);
  function navigate_to_linkedin(){
    window.location.replace('www.linkedin.com/in/srinivash-g');
  }
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

  const cardsMargin = { marginLeft: "5%" };
  const cardsMarginMob = { marginLeft: "0%" };
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
            style={{ textAlign: "end", backgroundImage: `url(${Lite})` }}
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
            <h1 style={isDesktop ? About : AboutMob}>ABOUT ME</h1>
            <hr style={isDesktop ? hrline : hrlineMob} />
            <div style={{ padding: "10%", paddingTop: "0px" }}>
              <p align="justify">
                I’m an independent MERN Stack Developer who is passionate about
                bringing client’s visions to life. I’m proud that my web
                development work has helped my clients to grow their business
                and generate more revenue.My strongest skill is my creativity.
                Being able to gather client’s requirements and translate those
                into an engaging, effective and unique websites.
              </p>

              <hr style={{ marginTop: "8%" }} />
              <div className="d-flex justify-content-between">
                <h6>
                  <PersonIcon
                    style={{ paddingBottom: "2%", paddingRight: "4%" }}
                  />{" "}
                  DOB
                </h6>

                <h6>April 22th 2022</h6>
              </div>
              <hr style={{ marginTop: "0%" }} />
              <div className="d-flex justify-content-between">
                <h6>
                  <GTranslateIcon
                    style={{ paddingBottom: "2%", paddingRight: "4%" }}
                  />{" "}
                  Languages
                </h6>

                <p>
                  English,Tamil,
                  {!isDesktop ? <br /> : null}
                  Kannada
                </p>
              </div>
              <hr style={{ marginTop: "0%" }} />
              <div className="d-flex justify-content-between">
                <h6>
                  <SportsSoccerIcon
                    style={{ paddingBottom: "2%", paddingRight: "4%" }}
                  />{" "}
                  Hobbies
                </h6>

                <p>Cricket,{!isDesktop ? <br /> : null}Development</p>
              </div>
              <hr style={{ marginTop: "0%" }} />
              <div className="d-flex justify-content-between">
                <h6>
                  <IosShareIcon
                    style={{ paddingBottom: "2%", paddingRight: "4%" }}
                  />{" "}
                  Website
                </h6>

                <p style={{ fontSize: "80%" }}>
                  <a href="https://www.linkedin.com/in/srinivash-g-a68973221/">
                    Srinivash-g
                  </a>
                </p>
              </div>
              <p align="justify" style={{ marginTop: "5%" }}>
                I can adapt onto any technology rapidly making myself flexible
                upon any tech stack. A passionate, diligent person who wants to
                learn continuously.
                <br />
                <br />
                MERN stands for MongoDB, Express, React, Node, after the four
                key technologies that make up the stack. MongoDB - document
                database. Express(.js) - Node.js web framework. React(.js) - a
                client-side JavaScript framework. Node(.js) - the premier
                JavaScript web server.
              </p>
              <p>
              <Link href="/Contact">
                <button
                  type="button"
                  class="btn btn-dark btn-lg Hire-me"
                  style={{ marginRight: "3%" }}
                >
                  HIRE ME
                </button>
                </Link>

                <a
                  class="btn btn-outline-dark btn-lg"
                  href={Resume}
                  download
                  style={
                    !isDesktop
                      ? {
                          marginTop: "1%",
                          marginLeft: "0%",
                          fontSize: "1.2rem"
                        }
                      : null
                  }
                >
                  <i class="fa fa-file-pdf-o" aria-hidden="true"></i>
                  Download CV
                </a>
              </p>
              <hr style={{ marginTop: "15%" }} />
              <h1 style={isDesktop ? whatcani : AboutMob}>WHAT CAN I DO</h1>
              <hr style={isDesktop ? whatcani_hr : hrlineMob} />
              <div style={{ textAlign: "center" }}>
                <div class="container">
                  <div class="layout">
                    <p class="col col-main">
                      <div class="card0 bounce-out-on-hover">
                        <div class="card0-img">
                          <WebIcon className="icon_tile" />
                        </div>
                        <div class="card0-info">
                          <h4>Front End</h4>
                          <p class="text-body">
                            HTML5, CSS3, JavaScript, React, Redux, React
                            Components.
                          </p>
                          <p class="text-title">Learn More</p>
                        </div>
                      </div>
                    </p>
                    <p
                      class="col col-complementary"
                      role="complementary"
                      style={isDesktop ? cardsMargin : cardsMarginMob}
                    >
                      <div class="card0 bounce-out-on-hover">
                        <div class="card0-img">
                          <AttractionsIcon className="icon_tile " />
                        </div>
                        <div class="card0-info">
                          <h4>Back End</h4>
                          <p class="text-body">
                            Node.js, Express.js, MongoDB, Mongoose, Git, Github.
                          </p>
                          <p class="text-title">Learn more</p>
                        </div>
                      </div>
                    </p>
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
