import React from 'react';
import { Link } from 'react-router-dom';
import cat1 from "../assets/livingroom.jpeg";
import cat2 from "../assets/bathroom.jpg";
import cat3 from "../assets/bedroom.webp";
import cat4 from "../assets/kitchen.jpg";
import cat5 from "../assets/balcony.jpg";
import "../styles/Category.css";


const CategoryPage = ({ category }) => {
  return (
    <div>
      <h2>{category} Category</h2>
      <p>Explore different {category} renovation ideas here!</p>
      <Link to="/">Go back to Home</Link>
      

    <div className="categories">
        <div className="category">
        <Link to={"/livingroompage"}>
          <img src={cat1} alt="Living Room"/>
          <p>Living Room</p>
          </Link>
        </div>
    

        
        <div className="category">
        <Link to="/bathroom">
          <img src={cat2} alt="Bathroom"/>
          <p>Bathroom</p>
          </Link>
        </div>

        
        <div className="category">
        <Link to="/bedroom">
          <img src={cat3} alt="Bedroom"/>
          <p>Bedroom</p>
          </Link>
        </div>

        
        <div className="category">
        <Link to="/kitchen">
          <img src={cat4} alt="Kitchen"/>
          <p>Kitchen</p>
          </Link>
        </div>

        
        <div className="category">
        <Link to="/balcony">
          <img src={cat5} alt="Balcony"/>
          <p>Balcony</p>
          </Link>
        </div>
    </div>
  </div>    
  
  );
};

export default CategoryPage;