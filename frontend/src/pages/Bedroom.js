import React from 'react';
import { Link } from 'react-router-dom';
import bedroom1 from "../assets/bedroom1.jpg";
import bedroom2 from "../assets/bedroom2.jpg";
import bedroom3 from "../assets/bedroom3.jpeg";
import bedroom4 from "../assets/bedroom4.jpeg";
import bedroom5 from "../assets/bedroom5.jpg";
import bedroom6 from "../assets/bedroom6.webp";
import bedroom7 from "../assets/bedroom7.jpg";
import bedroom8 from "../assets/bedroom8.png";
import bedroom9 from "../assets/bedroom9.jpg";
import bedroom10 from "../assets/bedroom10.jpg";
import bedroom11 from "../assets/bedroom11.webp";
import bedroom12 from "../assets/bedroom12.jpg";
import bedroom13 from "../assets/bedroom13.jpg";
import bedroom14 from "../assets/bedroom14.jpg";
import bedroom15 from "../assets/bedroom15.jpg";
import bedroom16 from "../assets/bedroom16.webp";
import bedroom17 from "../assets/bedroom17.jpg";
import bedroom18 from "../assets/bedroom18.webp";
import bedroom19 from "../assets/bedroom19.jpeg";
import bedroom20 from "../assets/bedroom20.jpg";
import bedroom21 from "../assets/bedroom21.jpeg";


import "../styles/Bedroom.css";

const Bedroom = () => {
  const BedroomImages = [bedroom1, bedroom2, bedroom3, bedroom4,bedroom5 , bedroom6 ,bedroom7 ,bedroom8,bedroom9,bedroom10,bedroom11,bedroom12,bedroom13,bedroom14,bedroom15,bedroom16,bedroom17,bedroom18,bedroom19,bedroom20,bedroom21];

  return (
    <div>
      <h2>Bedroom Category</h2>
      <p>Explore different bedrooms renovation ideas here!</p>
      <Link to="/Category">Go back to Category</Link>

      <div className="image-gallery">
        {BedroomImages.map((image, index) => (
          <img key={index} src={image} alt={`Bedroom ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Bedroom;