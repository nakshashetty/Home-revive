import React, { useContext, useState } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder';
import "../styles/Navbar.css";
import { AuthContext } from "../context/AuthContext";


function Navbar() {
  const { user} = useContext(AuthContext);
  const [openLinks, setOpenLinks] = useState(false);
  
  

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} alt="Logo"/>
        <div className="hiddenLinks">
          <Link to="/home"> Home </Link>
          <Link to="/category"> Category </Link>
          <Link to="/architect"> Architect </Link>
          <Link to="/photo"> Photos</Link>
          <Link to="/furniture">Furniture</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/booking">Booking</Link>
          { user?.email === "admin@gmail.com" && <Link to="/admin">Admin</Link> }
        </div>
      </div>
      <div className="rightSide">
        <Link to="/home"> Home </Link>
          <Link to="/category">Category</Link>
          <Link to="/architect">Architect</Link>
          <Link to="/photos">Photos</Link>
          <Link to="/furniture">Furniture</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/booking">Booking</Link>
          { user?.email === "admin@gmail.com" && <Link to="/admin">Admin</Link> }
          
          <div className="nav__right d-flex align-items-center gap-4">
          <div className="nav__btns d-flex align-items-center gap-4 ">
            {user ? (
              <>
                <h5 className="btn">{user.username}</h5>
              </>
            ) : (
              <>
                {/* Additional buttons or elements for non-logged-in users */}
              </>
            )}
          </div>
        </div>
                        
                  
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  
  );
}

export default Navbar;