import React from "react";

class SocialNav extends React.Component {
  render() {
    return (
      <div class="fixed-action-btn click-to-toggle direction-top direction-left">
        <a id="main-btn" class="btn-floating btn-large black">
          <i class="large material-icons">menu</i>
        </a>
        <ul>
          <li>
            <a class="waves-effect waves-light btn-floating social github">
              <i class="fa fa-github">G</i>
            </a>
          </li>
          <li>
            <a class="btn-floating yellow darken-1">
              <i class="material-icons">format_quote</i>
            </a>
          </li>
          <li>
            <a class="btn-floating green">
              <i class="material-icons">publish</i>
            </a>
          </li>
          <li>
            <a class="btn-floating blue">
              <i class="material-icons">attach_file</i>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default SocialNav;
