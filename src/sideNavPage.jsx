import React from "react";
import {
  MDBIcon,
  MDBSideNavCat,
  MDBSideNavNav,
  MDBSideNav,
  MDBSideNavLink,
  MDBContainer,
  MDBRow,
  MDBBtn
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
// import Logo from "../../assets/logo-only.png";
// const Logo =
// "https://e7.pngegg.com/pngimages/779/61/png-clipart-logo-idea-cute-eagle-leaf-logo-thumbnail.png";
class SideNavPage extends React.Component {
  state = {
    isOpen: false
  };

  handleToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const { isOpen } = this.state;
    return (
      <Router>
        <MDBContainer>
          <MDBSideNav
            logo={""}
            fixed
            triggerOpening={isOpen}
            breakWidth={900}
            className="deep-purple darken-4"
          >
            <MDBSideNavNav>
              <MDBSideNavCat name="Items1" id="item1" icon="handshake">
                <MDBSideNavLink>Item</MDBSideNavLink>
                <MDBSideNavLink>Item</MDBSideNavLink>
              </MDBSideNavCat>
            </MDBSideNavNav>
          </MDBSideNav>
        </MDBContainer>
      </Router>
    );
  }
}

export default SideNavPage;
