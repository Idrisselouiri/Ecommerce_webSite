import React from "react";
import "./CarouselStyling.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ItemCarouel } from "./ItemCarouel";

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
        {storeItems.map((item) => (
          <ItemCarouel {...item} />
        ))}
      </Slider>
    </div>
  );
};
export default Carousel;
