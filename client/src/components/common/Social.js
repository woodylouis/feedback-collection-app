import React from "react";
import githubLogo from "../../images/github-logo.png";
import linkedinLogo from "../../images/linkedin.png";
class SocialNav extends React.Component {
  render() {
    return (
      <div class="fixed-action-btn horizontal click-to-toggle">
        <a class="btn-floating btn-large black">
          <i class="material-icons">menu</i>
        </a>
        <ul>
          <li>
            <a
              class="waves-effect waves-light btn-floating black social"
              href="https://www.linkedin.com/in/mrlouisli"
            >
              <i class="fa fa-linkedin" />
            </a>
          </li>
          <li>
            <a
              class="waves-effect waves-light btn-floating black"
              href="https://github.com/woodylouis"
            >
              <i class="fa fa-github" />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default SocialNav;
