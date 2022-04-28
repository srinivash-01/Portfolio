import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Link from '@material-ui/core/Link';
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Tooltip from "react-simple-tooltip";
import "../styles/home.css";
import Left from "../images/left.png";
import { slideInUp, slideInLeft, slideInDown } from "react-animations";
import Radium, { StyleRoot } from "radium";
import Yearkad from "../images/yearkad.png";
import Bike from "../images/normal.jpg";
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
  function sendMail() {
    var link ="mailto:srinigunasekaran@gmail.com";
    window.location.href = link;
  }

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div class="row" style={{ width: "100%", height: "100%" }}>
        {isDesktop ? (
          <div class="col backpic1 left-half " style={{
              textAlign: "end",
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),
              rgba(0, 0, 0, 0.5)), url(${Bike})`
            }}>
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
          <div className="backpic" style={{
              width: "100%",
              height: "100%",
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),
              rgba(0, 0, 0, 0.5)), url(${Yearkad})`,
              backgroundColor: "black"
            }}>
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
                  <Link href="https://www.facebook.com/profile.php?id=100011764804290">
                    <FacebookIcon
                      style={{
                        backgroundColor: "#EEEEEE",

                        fontSize: "60px",
                        padding: "2%",
                        color: "#3b5998"
                      }}
                    />
                    </Link>
                  </Tooltip>
                  <Tooltip content="Twitter">
                  <Link href="https://twitter.com/srini224">
                    <TwitterIcon
                      style={{
                        backgroundColor: "#EEEEEE",

                        fontSize: "60px",
                        padding: "2%",
                        color: "#00acee"
                      }}
                    />
                    </Link>
                  </Tooltip>
                  <Tooltip content="Mail">
                  <Link onClick={sendMail}>
                    <LocalPostOfficeIcon
                      style={{
                        backgroundColor: "#EEEEEE",

                        fontSize: "60px",
                        padding: "2%",
                        color: "#bb001b"
                      }}
                    />
                    </Link>
                  </Tooltip>
                  <Tooltip content="LinkedIn">
                  <Link href="https://www.linkedin.com/in/srinivash-g-a68973221/">
                    <LinkedInIcon
                      style={{
                        backgroundColor: "#EEEEEE",

                        fontSize: "60px",
                        padding: "2%",
                        color: "#00acee"
                      }}
                    />
                    </Link>
                  </Tooltip>
                  <Tooltip content="Instagram">
                  <Link href="https://www.instagram.com/srinivash_g/">
                    <InstagramIcon
                      style={{
                        backgroundColor: "#EEEEEE",

                        fontSize: "60px",
                        padding: "2%",
                        color: "#3f729b"
                      }}
                    />
                    </Link>
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
