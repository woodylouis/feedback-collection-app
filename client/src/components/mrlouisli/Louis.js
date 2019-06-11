import React from "react";
import styled from "styled-components";
import HeaderImage from "../../images/background_desktop.jpg";
import Greeting from "./Greeting";
import Experience from "./Experience";
const HeaderContainer = styled.div`
  box-shadow: 1px 1px 2px 0px black, 0 0 25px grey, 0 0 5px grey;
  position: relative;
  background: transparent;
  height: 100vh;
  display: block;
`;

const MyHeaderImage = styled.img`
  height: 100vh;
  width: 100%;
  background-size: cover;
  overflow: hidden;
  background: transparent;
  background-position: 50% 50%;
  background-repeat: no-repeat;
`;

// Load header image
class Louis extends React.Component {
  render() {
    return (
      <div>
        <HeaderContainer>
          <Greeting />
          <MyHeaderImage src={HeaderImage} alt="header-background" />
        </HeaderContainer>
        <Experience />
      </div>
    );
  }
}

export default Louis;
