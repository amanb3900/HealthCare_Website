import React from "react";
import image1 from "./images/image1.png";
import "./FeedbackPage.css";

function FeedbackPage() {
  return (
    <div className="feedback-page">
      <div className="left">
        <h1>Feel free to drop us your feedback...</h1>
        <div className="imagE">
          <img src={image1} alt="img" />
        </div>
      </div>
      <div className="right">
        <div className="input-box">
          <h1>Feedback</h1>
          <p>
            We are greatful to you for giving us this opportunity to serve you.
            <br />
            Kindly fill up this form and help us improve!
          </p>
          <form>
            <input type="text" className="input name" placeholder="Enter Your Name" aria-label="Your name" />
            <input type="text" className="input email" placeholder="Enter Your Email" aria-label="Your name" />
            <textarea type="text" className="input message" placeholder="Message" aria-label="Your name" />
            <div className="bottom">
              <div className="bottom-msg">We appreciate your feedback and assure you of our best services always.</div>
              <div className="animated-button">
                <button type="submit" className="button">
                  Send
                </button>
                <div className="background"></div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FeedbackPage;
