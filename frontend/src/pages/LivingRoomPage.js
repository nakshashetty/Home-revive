import React from 'react';
import { Link } from 'react-router-dom';
import livingRoom1 from "../assets/livingRoom1.jpg";
import livingRoom2 from "../assets/livingRoom2.jpg";
import livingRoom3 from "../assets/livingRoom3.jpg";
import livingRoom4 from "../assets/livingRoom4.jpg";
import livingRoom5 from "../assets/livingRoom5.jpg";
import livingRoom6 from "../assets/livingRoom6.jpeg";
import livingRoom7 from "../assets/livingRoom7.jpg";
import livingRoom8 from "../assets/livingRoom8.jpg";
import livingRoom9 from "../assets/livingRoom9.jpg";
import livingRoom10 from "../assets/livingRoom10.avif";
import livingRoom11 from "../assets/livingRoom11.jpg";
import livingRoom12 from "../assets/livingRoom12.png";
import livingRoom13 from "../assets/livingRoom13.webp";
import livingRoom14 from "../assets/livingRoom14.webp";
import livingRoom15 from "../assets/livingRoom15.jpg";
import livingRoom16 from "../assets/livingRoom16.jpg";
import livingRoom17 from "../assets/livingRoom17.jpg";
import livingRoom18 from "../assets/livingRoom18.jpg";
import livingRoom19 from "../assets/livingRoom19.webp";
import livingRoom20 from "../assets/livingRoom20.jpeg";
import livingRoom21 from "../assets/livingRoom21.jpg";

import "../styles/LivingRoomPage.css";

const LivingRoomPage = () => {
  const livingRoomImages = [livingRoom1, livingRoom2, livingRoom3, livingRoom4,livingRoom5 , livingRoom6 ,livingRoom7 ,livingRoom8,livingRoom9,livingRoom10,livingRoom11,livingRoom12,livingRoom13,livingRoom14,livingRoom15,livingRoom16,livingRoom17,livingRoom18,livingRoom19,livingRoom20,livingRoom21];

  return (
    <div>
      <h2>Living Room Category</h2>
      <p>Explore different living room renovation ideas here!</p>
      <Link to="/Category">Go back to Category</Link>

      <div className="image-gallery">
        {livingRoomImages.map((image, index) => (
          <img key={index} src={image} alt={`Living Room ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default LivingRoomPage;