import React, { useState } from "react";
import "./Carousel.css";
import { CarouselItem } from "./CarouselItem";
import img1 from "./images/phone1.png";
import img2 from "./images/phone2.png";
import img3 from "./images/phone3.png";

export const CarouselHero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      title: "iPhone 15 Series",
      description: "Up to 10% off Voucher",
      icon: img1,
    },
    {
      title: "iPhone 14 Series",
      description: "Up to 20% off Voucher",
      icon: img2,
    },
    {
      title: "iPhone 13 Series",
      description: "Up to 30% off Voucher",
      icon: img3,
    },
  ];
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }

    setActiveIndex(newIndex);
  };
  return (
    <div className="carousel">
      <div
        className="inner"
        style={{ transform: `translate(-${activeIndex * 100}%)` }}
      >
        {items.map((item) => {
          return <CarouselItem item={item} width={"100%"} />;
        })}
      </div>

      <div className="carousel-buttons">
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <span class="material-symbols-outlined">arrow_back_ios</span>{" "}
        </button>
        <div className="indicators">
          {items.map((item, index) => {
            return (
              <button
                className="indicator-buttons"
                onClick={() => {
                  updateIndex(index);
                }}
              >
                <span
                  className={`material-symbols-outlined ${
                    index === activeIndex
                      ? "indicator-symbol-active"
                      : "indicator-symbol"
                  }`}
                >
                  radio_button_checked
                </span>
              </button>
            );
          })}
        </div>
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <span class="material-symbols-outlined">arrow_forward_ios</span>
        </button>
      </div>
    </div>
  );
};
