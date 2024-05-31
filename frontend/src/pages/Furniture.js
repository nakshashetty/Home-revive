
import { Link } from 'react-router-dom';
import furniture1 from "../assets/furniture1.jpg";
import furniture2 from "../assets/furniture2.jpg";
import furniture3 from "../assets/furniture3.jpg";
import furniture4 from "../assets/furniture4.jpg";
import furniture5 from "../assets/furniture5.jpg";
import furniture6 from "../assets/furniture6.jpg";
import furniture7 from "../assets/furniture7.jpg";
import furniture8 from "../assets/furniture8.jpg";
import furniture9 from "../assets/furniture9.jpg";
import furniture10 from "../assets/furniture10.jpg";
import furniture11 from "../assets/furniture11.jpg";
import furniture12 from "../assets/furniture12.jpg";
import furniture13 from "../assets/furniture13.jpg";
import furniture14 from "../assets/furniture14.jpg";
import furniture15 from "../assets/furniture15.jpg";
import furniture16 from "../assets/furniture16.jpg";
import furniture17 from "../assets/furniture17.jpg";
import FurnitureData from "../pages/FurnitureData";
import React,{useState} from 'react';
import "../styles/Furniture.css";


const furnitureItems = [
  { id: 1, name: 'Modern Chair', price: 'Rs1500', image: furniture1 },
  { id: 2, name: 'Three Seat Sofa', price: 'Rs9999', image: furniture2 },
  { id: 3, name: 'Comfortable Sofa', price: 'Rs5000', image: furniture3 },
  { id: 4, name: 'Chic Sofa', price: 'Rs11000', image: furniture4 },
  { id: 5, name: 'L shaped Sofa', price: 'Rs15000', image: furniture5 },
  { id: 6, name: 'Chic Piece', price: 'Rs1999', image: furniture6 },
  { id: 7, name: 'Elegant Table', price: 'Rs1999', image: furniture7 },
  { id: 8, name: 'Basic Table ', price: 'Rs999', image: furniture8 },
  { id: 9, name: 'Table', price: 'Rs1200', image: furniture9 },
  { id: 10, name: 'Wooden Bed', price: 'Rs12000', image: furniture10 },
  { id: 11, name: 'Classic Bed', price: 'Rs9000', image: furniture11 },
  { id: 12, name: 'Comfy Bed', price: 'Rs14000', image: furniture12 },
  { id: 13, name: 'Vintage Bed', price: 'Rs17000', image: furniture13 },
  { id: 14, name: 'Vintage Table', price: 'Rs6000', image: furniture14 },
  { id: 15, name: 'vinatge Cupboard', price: 'Rs5000', image: furniture15 },
  { id: 16, name: 'Classic Wardrobe', price: 'Rs4990', image: furniture16 },
  { id: 17, name: 'Wooden Cupboard', price: 'Rs7000', image: furniture17 },
];

const Furniture = () => {
  const [detail,setDetail]=useState([]);

  const handleClick = (clickedItem) =>
  {
    setDetail([{clickedItem}]);
  };
  return (

    <div>
      <div className="detail-container">
        <div className="detail_contant">
        {detail.map((item) => (
            <div key={item.id} className="detail_info">
              <div className="img-box">
                <img src={item.image} alt={item.name}></img>
              </div>
              <FurnitureData furnitureItems={furnitureItems} />
              <div className="product_detail">
                <h2>{item.name}</h2>
                <h3>{item.price}</h3>
                {/* Add a 'Des' property to your data for the description */}
                <p>{item.Des}</p>
                <button>Buy Now</button>
              </div>
                    </div>
        ))}
        </div>
        </div>
                    
      <h2>Furniture Collection</h2>
      <p>Discover a range of stylish and comfortable furniture for your home.</p>

      <div className="furniture-items">
        {furnitureItems.map(item => (
          <Link to={`/furnituredata/${item.id}`} key={item.id} className="furniture-link" onClick={()=>handleClick(item)}>
            <div className="furniture-item">
              <img src={item.image} alt={item.name} />
              <p className="furniture-name">{item.name}</p>
              <p className="furniture-price">{item.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Furniture;