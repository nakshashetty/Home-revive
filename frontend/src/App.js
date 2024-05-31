import React, { useContext } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Category from "./pages/Category";
import LivingRoomPage from "./pages/LivingRoomPage";
import Kitchen from "./pages/Kitchen";
import Bathroom from "./pages/Bathroom";
import Bedroom from "./pages/Bedroom";
import Balcony from "./pages/Balcony";
import Architect from "./pages/Architect";
import Photos from "./pages/Photos";
import Furniture from "./pages/Furniture";
import FurnitureData from "./pages/FurnitureData";
import FAQ from "./pages/FAQ";
import Booking from "./pages/Booking";
import Thankyou from "./pages/Thankyou";
import AboutPage from "./pages/AboutPage";
import UserBookings from './pages/UserBookings';
import Admin from "./pages/Admindashboard";
// import Cost from './pages/Cost';
import { FurnitureProvider } from './pages/FurnitureContext';

import { BrowserRouter , Route, Routes } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  
  return (
    <div className="App">
      
      <BrowserRouter>
        <Navbar />
        <FurnitureProvider>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/home" exact element={<Home />}   />
          <Route path="/category" exact element={<Category />} />
          <Route path="/livingroompage" exact element={<LivingRoomPage />} />
          <Route path="/kitchen" exact element={<Kitchen />} />
          <Route path="/bathroom" exact element={<Bathroom />} />
          <Route path="/bedroom" exact element={<Bedroom />} />
          <Route path="/balcony" exact element={<Balcony />} />
          <Route path="/architect" exact element={<Architect/>} />
          <Route path="/photos" exact element={<Photos/>} />
          <Route path="/furniture" exact element={<Furniture/>} />
          <Route path="/furnituredata/:id" exact element={<FurnitureData/>} />
          <Route path="/faq" exact element={<FAQ/>} />
          <Route path="/booking" exact element={<Booking/>} />
          <Route path="/user/bookings" exact element={<UserBookings />} />
          <Route path="/thankyou" exact element={<Thankyou/>} />
          <Route path="/aboutpage" exact element={<AboutPage/>} />
          {user?.email === "admin@gmail.com" &&  <Route path="/admin" exact element={<Admin/>} />}
          {/* <Route path="/cost" exact element={<Cost/>} /> */}
        </Routes>
        </FurnitureProvider>
        <Footer />
      </BrowserRouter>
      </div>
  );
}

export default App;