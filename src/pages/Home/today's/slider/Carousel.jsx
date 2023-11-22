import React, { Component } from "react";
import "./CarouselStyling.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CiStar } from "react-icons/ci";
import Slider from "react-slick";

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}
const Carousel = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="container">
      <Slider {...settings}>
        <div className="card">
          <div className="images">
            <img src="/images/img2.jpg" />
            <button className="btn-add">Add to cart</button>
          </div>
          <div className="card-body">
            <h3>HAVIT HV-G92 GAMEPAD</h3>
            <p>
              $120 <span>$160</span>
            </p>
            <div className="star-icons">
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="images">
            <img src="/images/img3.jpg" className="w-100" />
            <button className="btn-add">Add to cart</button>
          </div>
          <div className="card-body">
            <h3>HAVIT HV-G92 GAMEPAD</h3>
            <p>
              $120 <span>$160</span>
            </p>
            <div className="star-icons">
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="images">
            <img src="/images/img4.jpg" className="w-100" />
            <button className="btn-add">Add to cart</button>
          </div>
          <div className="card-body">
            <h3>HAVIT HV-G92 GAMEPAD</h3>
            <p>
              $120 <span>$160</span>
            </p>
            <div className="star-icons">
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="images">
            <img src="/images/img5.jpg" className="w-100" />
            <button className="btn-add">Add to cart</button>
          </div>
          <div className="card-body">
            <h3>HAVIT HV-G92 GAMEPAD</h3>
            <p>
              $120 <span>$160</span>
            </p>
            <div className="star-icons">
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="images">
            <img src="/images/img6.jpg" className="w-100" />
            <button className="btn-add">Add to cart</button>
          </div>
          <div className="card-body">
            <h3>HAVIT HV-G92 GAMEPAD</h3>
            <p>
              $120 <span>$160</span>
            </p>
            <div className="star-icons">
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="images">
            <img src="/images/img1.jpg" className="w-100" />
            <button className="btn-add">Add to cart</button>
          </div>
          <div className="card-body">
            <h3>HAVIT HV-G92 GAMEPAD</h3>
            <p>
              $120 <span>$160</span>
            </p>
            <div className="star-icons">
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};
export default Carousel;
