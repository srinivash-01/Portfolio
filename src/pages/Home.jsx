import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Tooltip from "react-simple-tooltip";
import "../styles/home.css";

import { slideInUp, slideInLeft, slideInDown } from "react-animations";
import Radium, { StyleRoot } from "radium";

export default function Home() {
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

  const name = {
    slideInDown: {
      animation: "x 1s",
      animationName: Radium.keyframes(slideInDown, "slideInDown"),
      paddingBottom: "2%",
      fontSize: "37px"
    }
  };
  const namefirst = {
    slideInUp: {
      animation: "x 1s",
      animationName: Radium.keyframes(slideInUp, "slideInUp"),
      paddingBottom: "2%",
      fontSize: "37px"
    }
  };
  const role = {
    slideInLeft: {
      animation: "x 1s",
      animationName: Radium.keyframes(slideInLeft, "slideInLeft"),
      paddingBottom: "2%",
      fontSize: "20px"
    }
  };
  const icons = {
    slideInLeft: {
      animation: "x 1s",
      animationName: Radium.keyframes(slideInLeft, "slideInLeft"),
      paddingBottom: "2%"
    }
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div class="row" style={{ width: "100%", height: "100%" }}>
        {isDesktop ? (
          <div class="col backpic1 left-half " style={{ textAlign: "end" }}>
            <StyleRoot>
              <div
                style={{
                  paddingTop: "25%",
                  right: "0%",
                  width: "100%",
                  textAlign: "-webkit-right"
                }}
              >
                <h1 className="Name1" style={namefirst.slideInUp}>
                  SRINIVASAN
                </h1>
              </div>
            </StyleRoot>
          </div>
        ) : null}

        <div class="col" style={{ height: "100%" }}>
          <div className="backpic" style={{ width: "100%", height: "100%" }}>
            <MediaQuery />
            <div style={{ paddingTop: "25%" }}>
              <StyleRoot>
                <div>
                  {!isDesktop ? (
                    <h1 className="Name1" style={namefirst.slideInUp}>
                      SRINIVASAN
                    </h1>
                  ) : null}
                  <h1 className="Name" style={name.slideInDown}>
                    GUNASEKARAN
                  </h1>
                </div>

                <div>
                  <h1 className="role" style={role.slideInLeft}>
                    Web Designer & Developer
                  </h1>
                </div>
              </StyleRoot>
            </div>
            <StyleRoot>
              <div
                style={{
                  textAlign: "end",
                  paddingTop: "10%",
                  position: "fixed",
                  bottom: "20%"
                }}
              >
                <div style={icons.slideInLeft}>
                  <Tooltip content="Facebook">
                    <FacebookIcon
                      style={{
                        backgroundColor: "#EEEEEE",

                        fontSize: "60px",
                        padding: "2%",
                        color: "#3b5998"
                      }}
                    />
                  </Tooltip>
                  <Tooltip content="Twitter">
                    <TwitterIcon
                      style={{
                        backgroundColor: "#EEEEEE",

                        fontSize: "60px",
                        padding: "2%",
                        color: "#00acee"
                      }}
                    />
                  </Tooltip>
                  <Tooltip content="Mail">
                    <LocalPostOfficeIcon
                      style={{
                        backgroundColor: "#EEEEEE",

                        fontSize: "60px",
                        padding: "2%",
                        color: "#bb001b"
                      }}
                    />
                  </Tooltip>
                  <Tooltip content="LinkedIn">
                    <LinkedInIcon
                      style={{
                        backgroundColor: "#EEEEEE",

                        fontSize: "60px",
                        padding: "2%",
                        color: "#00acee"
                      }}
                    />
                  </Tooltip>
                  <Tooltip content="Instagram">
                    <InstagramIcon
                      style={{
                        backgroundColor: "#EEEEEE",

                        fontSize: "60px",
                        padding: "2%",
                        color: "#3f729b"
                      }}
                    />
                  </Tooltip>
                </div>
              </div>
            </StyleRoot>
          </div>
        </div>
      </div>
    </div>
  );
}
