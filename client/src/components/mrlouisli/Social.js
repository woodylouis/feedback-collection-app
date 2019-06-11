import React from "react";
import githubLogo from "../../images/github-logo.png";
import linkedinLogo from "../../images/linkedin.png";
class SocialNav extends React.Component {
  render() {
    return (
      <div class="fixed-action-btn click-to-toggle direction-top direction-left">
        <a id="main-btn" class="btn-floating btn-large black">
          <i class="large material-icons">menu</i>
        </a>
        <ul>
          <li>
            <a
              class="btn-floating white"
              href="https://github.com/woodylouis"
              target="_blank"
            >
              <img
                src={githubLogo}
                alt="Louis Github"
                width="40px"
                height="40px"
              />
            </a>
          </li>
          <li>
            <a
              class="btn-floating white"
              href="https://www.linkedin.com/in/mrlouisli"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedinLogo}
                alt="Louis Linkedin"
                width="40px"
                height="40px"
              />
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
