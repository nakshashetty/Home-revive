import React  from 'react';
import { useParams,useNavigate} from 'react-router-dom';
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
import { useFurnitureContext } from '../pages/FurnitureContext';
import "../styles/FurnitureData.css";
//import { useAuth } from '../context/AuthContext';
//import { BASE_URL } from '../utils/config';

const furnitureData=[
    {
        id: 1,
        name: 'Modern Chair',
        image: furniture1,
        price: 1500,
        Des: 'Very comfortable to use ,wooden , strong chair',
    },
    {
        id: 2,
        name: 'Three Seat Sofa',
        image: furniture2,
        price: 9999,
        Des: 'Indulge in plush luxury with our cozy sofa, where cloud-like cushions and stylish design converge for the ultimate relaxation experience. Unwind in unparalleled comfort, as every curve and detail embraces you in a haven of serenity.',
    },
    {
        id: 3,
        name: 'Comfortable Sofa',
        image: furniture3,
        price: 5000,
        Des: 'Sink into sublime comfort with our inviting sofa, where softness meets style for the perfect relaxation retreat.',
    },
    {
        id: 4,
        name: 'Chic Sofa',
        image: furniture4,
        price: 11000,
        Des: 'Elevate your lounging experience with our irresistibly comfortable sofa, crafted for ultimate relaxation.',
    },
    {
        id: 5,
        name: 'L Shaped Sofa',
        image: furniture5,
        price: 15000,
        Des: 'Unwind in style on our sumptuously padded sofa, designed to cradle you in blissful comfort.',
    },
    {
        id: 6,
        name: 'Chic Piece',
        image: furniture6,
        price: 1999,
        Des: 'Elevate your dining experience with our versatile table, featuring a sleek design and durable construction to complement any style.',
    },
    {
        id: 7,
        name: 'Elegent Table',
        image: furniture7,
        price: 1999,
        Des: 'Transform your living space with our stylish coffee table, crafted from high-quality materials for both aesthetic appeal and functionality.',
    },
    {
        id: 8,
        name: 'Basic Table',
        image: furniture8,
        price: 999,
        Des: 'Upgrade your workspace with our spacious and ergonomic office table, designed for maximum productivity and comfort during long hours.',
    },
    {
        id: 9,
        name: 'Table',
        image: furniture9,
        price: 1200,
        Des: 'Gather in style around our elegant dining table, where impeccable craftsmanship meets timeless design for memorable meals and conversations.',
    },
    {
        id: 10,
        name: 'Wooden Bed',
        image: furniture10,
        price: 12000,
        Des: 'Drift into a world of luxury and serenity with our premium bed, adorned with sumptuous linens and designed for unparalleled comfort and style.',
    },
    {
        id: 11,
        name: 'Classic Bed',
        image: furniture11,
        price: 9000,
        Des: 'Experience restful nights on our ergonomically crafted bed, where supportive features and elegant design merge to create the perfect sleep sanctuary.',
    },
    {
        id: 12,
        name: 'Comfy Bed',
        image: furniture12,
        price: 14000,
        Des: 'Transform your bedroom into a haven of sophistication with our contemporary bed, featuring a harmonious blend of comfort, durability, and chic aesthetics.',
    },
    {
        id: 13,
        name: 'Vintage Bed',
        image: furniture13,
        price: 17000,
        Des: 'Unwind in ultimate comfort on our meticulously designed bed, where plush textures and thoughtful details come together to redefine your sleep experience.',
    },
    {
        id: 14,
        name: 'Vintage table',
        image: furniture14,
        price: 6000,
        Des: 'Create a focal point in your living room with our unique side table, blending form and function to enhance both storage and aesthetics.',
    },
    {
        id: 15,
        name: 'Vinatge Cupboard',
        image: furniture15,
        price: 5000,
        Des: 'Elevate your organization with our spacious wardrobe, marrying functionality and elegance to provide a stylish solution for your storage needs.',
    },
    {
        id: 16,
        name: 'Classic Wardrobe',
        image: furniture16,
        price: 4990,
        Des: 'Maximize your space with our versatile wardrobe, featuring adjustable shelving and sleek design elements for a seamless blend of form and utility.',
    },
    {
        id: 17,
        name: 'Wooden Cupboard',
        image: furniture17,
        price: 7000,
        Des: 'Declutter in style with our modern wardrobe, where ample storage meets contemporary aesthetics, offering a chic solution for your clothing ensemble.',
    },

]
const FurnitureData = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { setFurniture } = useFurnitureContext();
    //const { user } = useAuth();
    
    const selectedFurniture = furnitureData.find(item => item.id === parseInt(id));
     
    //const [review, setReview] = useState('');
    
  // const [userReviews, setUserReviews] = useState([]);
  
    if (!selectedFurniture) {
      return <div>Invalid furniture item</div>;
    }

    const handleBuyNow = () => {
        setFurniture(selectedFurniture);
        navigate('/booking');
      alert(`You have successfully purchased ${selectedFurniture.name} for ${selectedFurniture.price}`);
    };

    // const handleReviewSubmit = async (e) => {
    //   e.preventDefault();
    //   const username = user ? user.username : 'Anonymous';
    //   const fullReview = `${username}: ${review}`;
    //   setUserReviews(prevReviews => [...prevReviews, fullReview]);
    //   setReview('');
    
    //   try {
    //     const response = await fetch(`${BASE_URL}/api/v1/furnitureData/${selectedFurniture.id}/review`, {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       credentials: 'include',
    //       body: JSON.stringify({
    //         username: username,
    //         review: fullReview,
    //       }),
    //     });
    
    //     if (!response.ok) {
    //       throw new Error('Failed to submit the review');
    //     }
    
    //     console.log('Review submitted successfully');
    //   } catch (err) {
    //     console.error(err);
    //     alert(`Error: ${err.message}`);
    //   }
    // };
  
    return (
      <div>
        <div className="furniture-details">
          <img src={selectedFurniture.image} alt={selectedFurniture.name} />
          <div>
            <h2>{selectedFurniture.name}</h2>
            <p>{selectedFurniture.Des}</p>
            <p>Price: RS {selectedFurniture.price}</p>
            <button onClick={handleBuyNow}>Buy Now</button>

      </div>      
</div>
{/* <div className="review-container"> 
                    <div className="review-section">
        <h3>Customer Reviews</h3>
        <ul>
          {userReviews.map((userReview, index) => (
            <li key={index}>{userReview}</li>
          ))}
        </ul>
        <form onSubmit={handleReviewSubmit}>
          <label>
            Add your review:
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              rows="4"
              cols="50"
            />
          </label>
          <br />
          <button type="submit">Submit Review</button> */}
        {/* </form> */}
      </div>
                    // </div>
                    // </div>
                    
       
    );
        }; 

export default FurnitureData ;