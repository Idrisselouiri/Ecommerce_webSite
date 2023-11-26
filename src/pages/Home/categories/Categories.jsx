import React from "react";
import "./Categories.css";
import { CiHeadphones } from "react-icons/ci";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { IoWatchSharp } from "react-icons/io5";
import { HiComputerDesktop } from "react-icons/hi2";
import { SiYoutubegaming } from "react-icons/si";
import { FaCamera } from "react-icons/fa";

export const Categories = () => {
  return (
    <div className="Categories">
      <div className="title">
        <div className="text">
          <div></div>
          <p>categories</p>
        </div>
        <h1>Browse By Category</h1>
      </div>
      <div className="container-category">
        <div className="box-category">
          <span>
            <IoPhonePortraitOutline />
          </span>
          <h4>Phones</h4>
        </div>
        <div className="box-category">
          <span>
            <HiComputerDesktop />
          </span>
          <h4>Computers</h4>
        </div>
        <div className="box-category">
          <span>
            <IoWatchSharp />
          </span>
          <h4>SmartWatch</h4>
        </div>
        <div className="box-category">
          <span>
            <FaCamera />
          </span>
          <h4>Camera</h4>
        </div>
        <div className="box-category">
          <span>
            <CiHeadphones />
          </span>
          <h4>HeadPhones</h4>
        </div>
        <div className="box-category">
          <span>
            <SiYoutubegaming />
          </span>
          <h4>gaming</h4>
        </div>
      </div>
    </div>
  );
};
