import React, { useState, useEffect } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { useHistory } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import TelegramIcon from "@mui/icons-material/Telegram";
import SchoolIcon from "@mui/icons-material/School";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import MenuIcon from "@mui/icons-material/Menu";
import Tooltip from "@mui/material/Tooltip";

import WorkIcon from "@mui/icons-material/Work";
import "./styles/Navbar.css";

function SideNavBar() {
  const [showNav, setNav] = useState(false);
  let history = useHistory();

  const [isDesktop, setIsDesktop] = useState(false);
  function MediaQuery() {
    useEffect(() => {
      const media = window.matchMedia("(min-width: 580px)");
      const listener = () => setIsDesktop(media.matches);
      listener();
      window.addEventListener("resize", listener);

      return () => window.removeEventListener("resize", listener);
    });

    return (
      <div className="App">
        {isDesktop ? null : (
          <button
            className="mediaButton"
            style={{
              marginTop: "29px",
              background: "black",
              position: "absolute",
              border: "0px"
            }}
          >
            <MenuIcon onClick={handleNav} style={{ color: "white" }} />
          </button>
        )}
      </div>
    );
  }

  function handleHome() {
    let path = `/`;
    history.push(path);
    if (!isDesktop) {
      setNav(!showNav);
    }
  }
  function handleAbout() {
    let path = `/About`;
    history.push(path);
    if (!isDesktop) {
      setNav(!showNav);
    }
  }
  function handleResume() {
    let path = `/Resume`;
    history.push(path);
    if (!isDesktop) {
      setNav(!showNav);
    }
  }
  function handlePortfolio() {
    let path = `/Projects`;
    history.push(path);
    if (!isDesktop) {
      setNav(!showNav);
    }
  }
  function handleContact() {
    let path = `/Contact`;
    history.push(path);
    if (!isDesktop) {
      setNav(!showNav);
    }
  }
  function handleNav() {
    setNav(!showNav);
  }

  return (
    <div>
      <ProSidebar
        collapsed={true}
        width="270px"
        toggled={showNav}
        breakPoint="sm"
        collapsedWidth="70px"
      >
        <Menu iconShape="square">
          {showNav === true ? (
            <MenuItem
              onClick={handleNav}
              style={{ paddingTop: "70%" }}
              icon={
                <Tooltip title="Close" placement="right-start" arrow>
                  <KeyboardDoubleArrowLeftIcon
                    style={{ fontSize: "40px", color: "#E43F5A" }}
                    onClick={handleNav}
                  />
                </Tooltip>
              }
            >
              Close
            </MenuItem>
          ) : null}
          <MenuItem
            onClick={handleHome}
            style={{ paddingTop: "70%" }}
            icon={
              <Tooltip
                title="Home"
                placement="right-start"
                arrow
                classes="tooltip-css"
              >
                <HomeIcon style={{ fontSize: "40px" }} onClick={handleHome} />
              </Tooltip>
            }
          >
            Home
          </MenuItem>

          <MenuItem
            onClick={handleAbout}
            style={{ paddingTop: "70%" }}
            icon={
              <Tooltip title="About" placement="right-start" arrow>
                <PersonIcon style={{ fontSize: "40px" }} />
              </Tooltip>
            }
          >
            About
          </MenuItem>

          <MenuItem
            onClick={handleResume}
            style={{ paddingTop: "70%" }}
            icon={
              <Tooltip title="Resume" placement="right-start" arrow>
                <SchoolIcon style={{ fontSize: "40px" }} />
              </Tooltip>
            }
          >
            Resume
          </MenuItem>
          <MenuItem
            onClick={handlePortfolio}
            style={{ paddingTop: "70%" }}
            icon={
              <Tooltip title="Projects" placement="right-start" arrow>
                <WorkIcon style={{ fontSize: "40px" }} />
              </Tooltip>
            }
          >
            Portfolio
          </MenuItem>
          <MenuItem
            onClick={handleContact}
            style={{ paddingTop: "70%" }}
            icon={
              <Tooltip title="Contact" placement="right-start" arrow>
                <TelegramIcon style={{ fontSize: "40px" }} />
              </Tooltip>
            }
          >
            Contact
          </MenuItem>
        </Menu>
      </ProSidebar>
      <MediaQuery />
    </div>
  );
}

export default SideNavBar;
