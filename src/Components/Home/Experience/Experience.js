import React from "react";
import rightArrow from "./images/rightArrow.png";
import questionMark from "./images/questionMark.png";
import feedbackIcon from "./images/feedbackIcon.png";
import shareIcon from "./images/shareIcon.png";
import searchIcon from "./images/image1.png";
import healthcareIcon from "./images/image2.png";
import healthguardIcon from "./images/image3.png";
import syringeIcon from "./images/image4.png";
import "./Experience.css"

function Experience() {
  return (
    <div className="experience-section">
      <div className="part1">
        <div className="box box1">
          <a href="#" style={{ textDecoration: "none", color: "black" }}>
            <div className="container boxContent">
              <div className="boxContent-left" style={{ width: "85%" }}>
                <h3>Share Experience
                <span>
                    <img src={shareIcon} alt="rightArrow" />
                  </span>
                </h3>
                <p>Your experience/testimonials might be the cure for others.</p>
              </div>
              <div className="boxContent-right" style={{ width: "15%" }}>
                <img src={rightArrow} alt="" />
              </div>
            </div>
            <div className="background"></div>
          </a>
        </div>
        <div className="box box2">
          <a href="#" style={{ textDecoration: "none", color: "black" }}>
            <div className="container boxContent">
              <div className="boxContent-left" style={{ width: "85%" }}>
                <h3>
                  Ask Us
                  <span>
                    <img src={questionMark} alt="rightArrow" />
                  </span>
                </h3>
                <p>Share your symptoms, we will suggest you the best possible cure available.</p>
              </div>
              <div className="boxContent-right" style={{ width: "15%" }}>
                <img src={rightArrow} alt="" />
              </div>
            </div>
            <div className="background"></div>
          </a>
        </div>
        <div className="box box3">
          <a href="#" style={{ textDecoration: "none", color: "black" }}>
            <div className="container boxContent">
              <div className="boxContent-left" style={{ width: "85%" }}>
                <h3>Feedback
                  <span>
                    <img src={feedbackIcon} alt="rightArrow" />
                  </span>
                </h3>
                <p>Your feedback will help us serve better for humanity.</p>
              </div>
              <div className="boxContent-right" style={{ width: "15%" }}>
                <img src={rightArrow} alt="rightArrow" />
              </div>
            </div>
            <div className="background"></div>
          </a>
        </div>
      </div>

      <div className="part2 container">
        <div className="left">
          <div className="col1">
            <div className="box box1">
              <img src={searchIcon} alt="img" />
              <h3>Our Mission</h3>
              <ul>
                <li>
                  Integration of all therapies.
                </li>
                <li>
                  Refinement of information.
                </li>
                <li>
                  Verification of data.
                </li>
                </ul>
            </div>
            <div className="box box2">
              <img src={healthguardIcon} alt="img" />
              <h3>Problems We Solve</h3>
              <ul>
                <li>
                Spread awareness about alternative therapies.
                </li>
                <li>
                Help patients choose the right treatment.
                </li>
                <li>
                Affordable therapies to cure patients.
                </li>
              </ul>
            </div>
          </div>
          <div className="col2">
            <div className="box box1">
              <img src={healthcareIcon} alt="img" />
              <h3>Our Vision</h3>
              <p>To inspire hope, and contribute to health and well-being by providing the best alternative treatment to every patient.</p>
            </div>
            <div className="box box2">
              <img src={syringeIcon} alt="img" />
              <h3>Our Motive</h3>
              <p>We want to help you own your well-being.</p>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="col3">
            <h2>What we do ?</h2>
            <p>
            Internet contains huge amount of data in the form of testimonials of patients in the form of ebooks, website, youtube videos, articles which are scattered, unverified and unorganized.<br/><br/>
            This website plans to collect various important data, refine them, verify them as much as possible and organize it systematically.
            This systematically and verified data may help  a confused patient to draw important conclusions about his line of treatment.<br/><br/>
            This website aims to include data from  all important therapies as well as details about important clinics, hospitals as well as groups. This is a mission by the people, for the people of the people.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
