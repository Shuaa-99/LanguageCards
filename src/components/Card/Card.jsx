import React from "react";
import "./Card.scss";
import { useState } from "react";



const Card = ({ name, image, options }) => {

  const [showImage, setShowImage] = useState(true);
  const toggleView = () => {
    setShowImage(!showImage);
  };

  return (
    <div className="cards">
      <div onClick={toggleView}>
        {showImage ? (
          <div className="title">
            <img src={image} alt={name} className="card-image" />
            <h1>{name}</h1>
          </div>
        ) : (
          <div className="card-options">
            <ul>
              {options.map((option, index) => (
                <li key={index}>{option}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
