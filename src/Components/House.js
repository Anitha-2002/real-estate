// import React from "react";
import "./House.css";
import image from "../img/property.jpg";

const House = () => {
  return (
    <div className="house-section">
      <img src={image} alt="house" className="house-image" />
      <div className="house-details">
        <div className="detail-item">2BHK/3BHK</div>
        <div className="detail-item">Hanspal</div>
        <div className="detail-item">95 lacs</div>
        <div className="detail-item address">
          Premium property at Surekha Vatika, Hanspal
        </div>
        <div className="detail-item">
          <button>Enquire Now</button>
        </div>
      </div>
    </div>
  );
};

export default House;
