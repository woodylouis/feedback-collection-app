import React from "react";
import styled from "styled-components";

const Name = styled.p`
  @media (max-width: 700px) {
    font-size: 2.1rem;
    line-height: 2.75rem;
  }
  @media (min-width: 701px) {
    font-size: 3.25rem;
  }
  position: absolute;
  top: 35%;
  left: 50%;
  color: #fff;
  // font-weight: bold;
  -webkit-transform: translateX(-30%);
  transform: translateX(-50%);
  font-family: "Permanent Marker", cursive;
`;

class Greeting extends React.Component {
  render() {
    return (
      <div>
        <Name>
          Hey!
          <br />
          I'm LOUIS LI
        </Name>
      </div>
    );
  }
}

export default Greeting;
