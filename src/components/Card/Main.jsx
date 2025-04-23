import React from "react";
// import data from "../../helper/data.js";
import { categories } from "../../helper/data.js";
import Card from "./Card";
import react1 from "../../assets/react1.svg";

const Main = () => {
  return (
<div>
      <img src={react1} alt="title" className="reactLogo" />
        <div className="main"></div>
      <div className="card-container"> 
        {categories.map((item) => (
          <Card
            key={item.name}
            name={item.name}
            image={item.img}
            options={item.options}
          />
          
        ))}
      </div>
    </div>
  );
};

export default Main;
