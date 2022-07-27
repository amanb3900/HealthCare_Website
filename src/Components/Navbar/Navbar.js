import React from "react";
import logo from "./images/logo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-custom">
        <div className="container-fluid">
          <a className="navbar-logo" href="#">
            <img src={logo} alt="logo" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" to="#">
                  About Us
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Diseases
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/disease/migraine">
                      Migraine
                    </Link>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Psoriasis
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                    Ulcerative colitis
                    </a>
                  </li>
                  
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Pathies
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/pathy/homeopathy">
                      Homeopathy
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Ayurveda
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                    Yoga
                    </a>
                  </li>
                  
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/clinics">
                  Clinics/Hospitals
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contributors
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Newsletters
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/donation">
                  Donation
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <div className="animated-button">
                  <Link to = "/login">
                  <button type="button" className="button">
                    Get Started
                  </button>
                  </Link>
                  <div className="background"></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
