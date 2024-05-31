import React from 'react';
import { Link } from 'react-router-dom';
import balcony1 from "../assets/balcony1.avif";
import balcony2 from "../assets/balcony2.jpg";
import balcony3 from "../assets/balcony3.avif";
import balcony4 from "../assets/balcony4.jpg";
import balcony5 from "../assets/balcony5.jpeg";
import balcony6 from "../assets/balcony6.jpg";
import balcony7 from "../assets/balcony7.jpeg";
import balcony8 from "../assets/balcony8.jpg";
import balcony9 from "../assets/balcony9.jpg";
import balcony10 from "../assets/balcony10.jpg";
import balcony11 from "../assets/balcony11.jpg";
import balcony12 from "../assets/balcony12.jpg";
import balcony13 from "../assets/balcony13.avif";
import balcony14 from "../assets/balcony14.jpg";
import balcony15 from "../assets/balcony15.jpeg";


import "../styles/Balcony.css";

const Balcony = () => {
  const BalconyImages = [balcony1, balcony2, balcony3, balcony4,balcony5 , balcony6 ,balcony7 ,balcony8,balcony9,balcony10,balcony11,balcony12,balcony13,balcony14,balcony15];

  return (
    <div>
      <h2>Balcony Category</h2>
      <p>Explore different balcony renovation ideas here!</p>
      <Link to="/Category">Go back to Category</Link>

      <div className="image-gallery">
        {BalconyImages.map((image, index) => (
          <img key={index} src={image} alt={`Balcony ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Balcony;