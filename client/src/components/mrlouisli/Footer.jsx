import React from "react";
import styled from "styled-components";

const Tiktok = styled.div`
  font-size: 1.75rem;
`;

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: new Date()
    };
  }

  componentDidMount() {
    setInterval(this.update, 1000);
  }

  update = () => {
    this.setState({
      time: new Date()
    });
  };

  render() {
    const h = this.state.time.getHours();
    const m = this.state.time.getMinutes();
    const s = this.state.time.getSeconds();

    return (
      <footer className="container">
        <div className="center">
          <Tiktok>
            {h % 12}:{m < 10 ? "0" + m : m}:{s < 10 ? "0" + s : s}{" "}
            {h < 12 ? "am" : "pm"}
          </Tiktok>
        </div>
      </footer>
    );
  }
}

export default Clock;
