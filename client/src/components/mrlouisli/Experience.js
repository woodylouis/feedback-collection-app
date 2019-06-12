import React from "react";
import styled from "styled-components";
import CSIROlogo from "../../images/CSIRO_dutton_park.jpeg";
import GriffithLogo from "../../images/griffith_library.jpg";
import NDIALogo from "../../images/ndis.png";
import Heading from "./Heading";

// const Title = styled.div`
//   // text-align: center;
//   padding-top: 4.725rem;
//   padding-bottom: 3.125rem;
// `

const csiro = {
  imgSrc: CSIROlogo,
  company: "CSIRO Land and Water",
  title: "Python Developer",
  when: "2018",
  place: "Dutton Park, Brisbane",
  detail:
    "The goals of my project - 'Sniffing for Services' were to make a web app in Django for Data scientists to support their research in CSIRO. The project is to visualise the use of THREED servers and capture these servers' meta from such kinds of data servers."
};

const griffith = {
  imgSrc: GriffithLogo,
  company: "Griffith University",
  title: "MIT in Computer Science",
  when: "2018",
  place: "Gold Coast",
  detail:
    "Griffith University presented unprecedented scale and diversity of opportunity. My two years of phenomenal professors across the disciplines pushed me to expand, challenge, and adjust my worldview. My experience dancing with project management showed me the power of empathetic leadership and expanded my artistic comfort zone. My tenure throwing major, campus-wide events validated that quality stems from attention to detail. My engagement in Griffith's tech & innovation initiatives exercised my creative muscle, sparked my obsession with design, and strengthened my tolerance to adversity."
};

const ndia = {
  imgSrc: NDIALogo,
  company: "Nation Disability Insurance Agency",
  title: "Software Engineer",
  when: "Since 2018",
  place: "Chermside",
  detail:
    "My team works on building amazing user experiences for NDIS employees. I helped carry out the top-to-bottom design and implementation of PANDA's UI, and currently work as a Software Engineer."
};

const CompanyLogo = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  background-size: cover;
  background-color: transpartent;
  width: 100%;
  height: 200px;
  overflow: hidden;
  // background-position: 50% 50%;
  background-repeat: no-repeat;
  border-radius: 20px;
`;

const CompanyName = styled.div`
  @media (max-width: 700px) {
    padding: 10px 0 10px 0;
    font-size: 1.5rem;
  }
  color: #37c;
  font-size: 2em;
`;

const JobTitle = styled.div`
  color: #689f38;
  font-weight: 700;
`;
const Place = styled.div`
  // padding-top: 10px;
  color: grey;
`;

const JobDetail = styled.p`
  color: black;
  font-weight: normal;
  font-size: 100%;
  font-style: normal;
  line-height: 130%;
  font-family: "Roboto", sans-serif;
`;

class Experience extends React.Component {
  render() {
    return (
      <div id="experience" className="container">
        <div className="center-align">
          <Heading />
        </div>
        {/* NDIA */}
        <div className="row section">
          <div className="col s12 m12 l5">
            <CompanyLogo src={ndia.imgSrc} alt="csiro" />
          </div>
          <div className="col s12 m12 l7">
            <CompanyName>{ndia.company}</CompanyName>
            <JobTitle>
              {ndia.title}, {ndia.when}
            </JobTitle>
            <Place>{ndia.place}</Place>
            <JobDetail>{ndia.detail}</JobDetail>
          </div>
        </div>
        {/* CSIRO */}
        <div className="row section">
          <div className="col s12 m12 l5">
            <CompanyLogo src={csiro.imgSrc} alt="csiro" />
          </div>
          <div className="col s12 m12 l7">
            <CompanyName>{csiro.company}</CompanyName>
            <JobTitle>
              {csiro.title}, {csiro.when}
            </JobTitle>
            <Place>{csiro.place}</Place>
            <JobDetail>{csiro.detail}</JobDetail>
          </div>
        </div>
        {/* Griffith University */}
        <div className="row section">
          <div className="col s12 m12 l5">
            <CompanyLogo src={griffith.imgSrc} alt="griffith" />
          </div>
          <div className="col s12 m12 l7">
            <CompanyName>{griffith.company}</CompanyName>
            <JobTitle>
              {griffith.title}, {griffith.when}
            </JobTitle>
            <Place>{griffith.place}</Place>
            <JobDetail>{griffith.detail}</JobDetail>
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;
