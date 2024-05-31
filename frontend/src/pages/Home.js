import React, { useState, useRef, useEffect,useContext } from 'react';
import { Link,useNavigate } from "react-router-dom";
import BannerImage from "../assets/livingroom.jpeg";
import '../styles/Home.css';
import {Login} from "./Login";
import {Register} from "./Register";
import AboutPage from '../pages/AboutPage';
import { Button } from "@mui/material"
import { AuthContext } from "../context/AuthContext";

function Home() {
  const [currentForm, setCurrentForm] = useState('login');
  const Navigate = useNavigate();  
  const { dispatch} = useContext(AuthContext);

  const aboutSectionRef = useRef(null);
  useEffect(() => {
    
    if (currentForm === 'login'  )
    {
      aboutSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentForm]);

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    Navigate("/home")
  };
  

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  useEffect(()=>{
    window.scrollTo(0,0)
  })
  
  return (
    <div>
    <div className="home" style={{ backgroundImage: `url(${BannerImage})`}}>
      <div className="headerContainer">
        <h1>Home Revive</h1>
        <p>Every Space Should Inspire You To Live Your Best Life</p>
        <Link to="/category">
        <button>Book Now</button>
        </Link>
        
        <div className="form">
        {
         currentForm==="login"?<Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
        }
        <Button className="btn" onClick={logout}>Logout</Button>
        </div>
        </div>
     </div>  
      
    
    <div ref={aboutSectionRef}>
    <AboutPage />
  </div>
</div>


  );
  
}

export default Home;
