import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.css";
import PersonIcon from "@mui/icons-material/Person";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import IosShareIcon from "@mui/icons-material/IosShare";
import Yearkad from "../images/yearkad.png";
import "../styles/about.css";

export default function Contact() {
  const [isDesktop, setIsDesktop] = useState(false);
  const form = useRef();
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
  function sendMail() {
    var link =
      "mailto:srinigunasekaran@gmail.com" +
      "?cc=srinigunasekaran@gmail.com" +
      "&subject=" +
      encodeURIComponent("Get In Touch") +
      "&body=" +
      encodeURIComponent(
        "Full Name: " +
          document.getElementById("Fullname").value +
          "\n " +
          "Mobile No: " +
          document.getElementById("MobileNo").value +
          "\n " +
          "Email ID: " +
          document.getElementById("EmailID").value +
          "\n " +
          "Message: " +
          document.getElementById("Message").value
      );

    window.location.href = link;
  }

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
            style={{ textAlign: "end", backgroundImage: `url(${Yearkad})` }}
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
            <h1 style={isDesktop ? About : AboutMob}>CONTACT</h1>
            <hr style={isDesktop ? hrline : hrlineMob} />
            <div style={{ padding: "10%", paddingTop: "0px" }}>
              <p align="justify">
                Want to get in touch? We'd love to hear from you. Here's how you
                can reach us...
              </p>

              <hr style={{ marginTop: "8%" }} />
              <div className="d-flex justify-content-between">
                <h6>
                  <PersonIcon
                    style={{ paddingBottom: "2%", paddingRight: "4%" }}
                  />{" "}
                  Phone
                </h6>

                <h6>+91 8122148854</h6>
              </div>
              <hr style={{ marginTop: "0%" }} />
              <div className="d-flex justify-content-between">
                <h6>
                  <GTranslateIcon
                    style={{ paddingBottom: "2%", paddingRight: "4%" }}
                  />{" "}
                  E-mail
                </h6>

                <p>srinigunasekara{!isDesktop ? <br /> : null}n@gmail.com</p>
              </div>
              <hr style={{ marginTop: "0%" }} />
              <div className="d-flex justify-content-between">
                <h6>
                  <SportsSoccerIcon
                    style={{ paddingBottom: "2%", paddingRight: "4%" }}
                  />{" "}
                  Address
                </h6>

                <p>Erode,TamilNadu</p>
              </div>
              <hr style={{ marginTop: "0%" }} />
              <div className="d-flex justify-content-between">
                <h6>
                  <IosShareIcon
                    style={{ paddingBottom: "2%", paddingRight: "4%" }}
                  />{" "}
                  Linkedin
                </h6>

                <p style={{ fontSize: "80%" }}>
                  <a href="https://www.linkedin.com/in/srinivash-g-a68973221/">
                    Srinivash_g
                  </a>
                </p>

              </div>
              <p style={{ marginTop: "5%" }}>Want to chat? Feel free to drop me a message📝</p>
              <hr style={{ marginTop: "10%" }} />

              <h1 style={isDesktop ? whatcani : AboutMob}>GET IN TOUCH</h1>
              <hr style={isDesktop ? whatcani_hr : hrlineMob} />

              <div>
                <form>
                  <div className="form-group">
                    <label for="nameImput">Full name :</label>
                    <input
                      type="text"
                      id="Fullname"
                      name="name"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group">
                    <label for="emailImput">Phone Number :</label>
                    <input
                      name="Phone"
                      id="MobileNo"
                      type="tel"
                      className="form-control"
                      placeholder="Mobile no"
                    />
                  </div>
                  <div className="form-group">
                    <label for="emailImput">Email address :</label>
                    <input
                      name="email"
                      id="EmailID"
                      type="email"
                      className="form-control"
                      placeholder="email@domain.com"
                    />
                  </div>
                  <div className="form-group">
                    <label for="emailImput">Message :</label>
                    <textarea
                      id="Message"
                      rows="4"
                      class="form-control form-control-alternative"
                      placeholder="A few words about you ..."
                    ></textarea>
                  </div>
                  <button
                    onClick={sendMail}
                    type="button"
                    class="btn btn-dark btn-lg Hire-me"
                    style={{ marginRight: "3%", marginTop: "4%" }}
                  >
                    SEND MESSAGE
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
