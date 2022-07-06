import React from "react";
import "slick-carousel/slick/slick.css";
import "./Our_services.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from "./image 13.png";
import img2 from "./image 15.png";
import img3 from "./image11.png";
import img4 from "./istock.jpg";

function Our_services() {
  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    speed: 500,
    arrows: false,
    adaptiveHeight: true,
    appendDots: (dots) => {
      return <ul style={{ margin: " -25px" }}>{dots}</ul>;
    },
  };

  return (
    <div className="our_services">
      <div className="section">
        <div className="textt">
          <h2>Our Services</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, ullam! Iste quidem soluta error velit. Voluptate, nemo</p>
        </div>
        <div className="slide">
          <Slider {...settings}>
            <div className="box">
              <div class="card">
                <div className="card-body">
                  <div>
                    <img className="image" src={img1} alt="" />
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, ullam! Iste quidem soluta error velit. Voluptate, nemo.</p>
                </div>
              </div>
            </div>
            <div className="box">
              <div className="card">
                <div className="card-body">
                  <div className="centimg">
                    <img className="image" src={img2} alt="" />
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, ullam! Iste quidem soluta error velit. Voluptate, nemo</p>
                </div>
              </div>
            </div>
            <div className="box">
              <div className="card">
                <div className="card-body">
                  <div className="centimg">
                    <img className="image" src={img3} alt="" />
                  </div>

                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, ullam! Iste quidem soluta error velit. Voluptate, nemo</p>
                </div>
              </div>
            </div>
            <div className="box">
              <div className="card">
                <div className="card-body">
                  <div className="centimg">
                    <img className="image" src={img4} alt="" />
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, ullam! Iste quidem soluta error velit. Voluptate, nemo</p>
                </div>
              </div>
            </div>
            <div className="box">
              <div className="card">
                <div className="card-body">
                  <div className="centimg">
                    <img className="image" src={img2} alt="" />
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, ullam! Iste quidem soluta error velit. Voluptate, nemo</p>
                </div>
              </div>
            </div>
            <div className="box">
              <div className="card">
                <div className="card-body">
                  <div className="centimg">
                    <img className="image" src={img1} alt="" />
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, ullam! Iste quidem soluta error velit. Voluptate, nemo</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Our_services;
