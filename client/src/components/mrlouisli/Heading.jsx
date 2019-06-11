import React from "react";
import styled from "styled-components";

// Heading styling
const Subheading = styled.div`
  // text-align: center;
  padding-top: 4.725rem;
  padding-bottom: 3.125rem;
`;

class Heading extends React.Component {
  render() {
    return (
      <div>
        <Subheading>- Here's what I've done so far -</Subheading>
      </div>
    );
  }
}
export default Heading;
