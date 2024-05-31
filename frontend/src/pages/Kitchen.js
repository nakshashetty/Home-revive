import React from 'react';
import { Link } from 'react-router-dom';
import kitchen1 from "../assets/kitchen1.jpg";
import kitchen2 from "../assets/kitchen2.jpg";
import kitchen3 from "../assets/kitchen3.webp";
import kitchen4 from "../assets/kitchen4.avif";
import kitchen5 from "../assets/kitchen5.avif";
import kitchen6 from "../assets/kitchen6.jpg";
import kitchen7 from "../assets/kitchen7.jpeg";
import kitchen8 from "../assets/kitchen8.png";
import kitchen9 from "../assets/kitchen9.avif";
import kitchen10 from "../assets/kitchen10.jpg";
import kitchen11 from "../assets/kitchen11.jpg";
import kitchen12 from "../assets/kitchen12.webp";
import kitchen13 from "../assets/kitchen13.jpg";
import kitchen14 from "../assets/kitchen14.webp";
import kitchen15 from "../assets/kitchen15.jpg";
import kitchen16 from "../assets/kitchen16.jpg";
import kitchen17 from "../assets/kitchen17.jpg";
import kitchen18 from "../assets/kitchen18.jpg";
import kitchen19 from "../assets/kitchen19.jpg";
import kitchen20 from "../assets/kitchen20.jpg";
import kitchen21 from "../assets/kitchen21.webp";


import "../styles/Kitchen.css";

const Kitchen = () => {
  const kitchenImages = [kitchen1, kitchen2, kitchen3, kitchen4,kitchen5 , kitchen6 ,kitchen7 ,kitchen8,kitchen9,kitchen10,kitchen11,kitchen12,kitchen13,kitchen14,kitchen15,kitchen16,kitchen17,kitchen18,kitchen19,kitchen20,kitchen21];

  return (
    <div>
      <h2>Kitchen Category</h2>
      <p>Explore different kitchens renovation ideas here!</p>
      <Link to="/Category">Go back to Category</Link>

      <div className="image-gallery">
        {kitchenImages.map((image, index) => (
          <img key={index} src={image} alt={`Kitchen ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Kitchen;