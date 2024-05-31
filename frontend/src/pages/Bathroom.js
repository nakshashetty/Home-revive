import React from 'react';
import { Link } from 'react-router-dom';
import bathroom1 from "../assets/bathroom1.jpg";
import bathroom2 from "../assets/bathroom2.jpg";
import bathroom3 from "../assets/bathroom3.webp";
import bathroom4 from "../assets/bathroom4.avif";
import bathroom5 from "../assets/bathroom5.avif";
import bathroom6 from "../assets/bathroom6.jpg";
import bathroom7 from "../assets/bathroom7.jpg";
import bathroom8 from "../assets/bathroom8.webp";
import bathroom9 from "../assets/bathroom9.png";
import bathroom10 from "../assets/bathroom10.jpg";
import bathroom11 from "../assets/bathroom11.webp";
import bathroom12 from "../assets/bathroom12.jpg";
import bathroom13 from "../assets/bathroom13.jpg";
import bathroom14 from "../assets/bathroom14.webp";
import bathroom15 from "../assets/bathroom15.jpg";
import bathroom16 from "../assets/bathroom16.webp";
import bathroom17 from "../assets/bathroom17.jpg";
import bathroom18 from "../assets/bathroom18.jpeg";
import bathroom19 from "../assets/bathroom19.avif";
import bathroom20 from "../assets/bathroom20.jpg";
import bathroom21 from "../assets/bathroom21.webp";


import "../styles/Bathroom.css";

const Bathroom = () => {
  const BathroomImages = [bathroom1, bathroom2, bathroom3, bathroom4,bathroom5 , bathroom6 ,bathroom7 ,bathroom8,bathroom9,bathroom10,bathroom11,bathroom12,bathroom13,bathroom14,bathroom15,bathroom16,bathroom17,bathroom18,bathroom19,bathroom20,bathroom21];

  return (
    <div>
      <h2>Bathroom Category</h2>
      <p>Explore different bathrooms renovation ideas here!</p>
      <Link to="/Category">Go back to Category</Link>

      <div className="image-gallery">
        {BathroomImages.map((image, index) => (
          <img key={index} src={image} alt={`Bathroom ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Bathroom;