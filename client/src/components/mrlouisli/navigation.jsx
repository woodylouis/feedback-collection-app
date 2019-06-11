import React from "react";

class Navigation extends React.Component {
  render() {
    return (
      <div className="Menu">
        <ul className="Menu-list" data-offset="10">
          <li className="Menu-list-item" data-offset="20" onclick>
            Home
          </li>
          <li className="Menu-list-item" data-offset="16" onclick>
            About
          </li>
          <li className="Menu-list-item" data-offset="12" onclick>
            Work
          </li>
          <li className="Menu-list-item" data-offset="8" onclick>
            Contact
          </li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
