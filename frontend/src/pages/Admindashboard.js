import  { useEffect, useState } from 'react';
import { BASE_URL } from '../utils/config';
import "../styles/admin.css";

const AdminDashboard = () => {
  const [bookings, setBookings] = useState([{userEmail: ""}]);

  useEffect(() => {
    const fetchData = async () => {
        const response = await fetch(`${BASE_URL}/booking/`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
            credentials: 'include',
          });
      
          if (!response.ok) {
            const responseText = await response.text();
            throw new Error(responseText);
          }
      
          const result = await response.json();
          
          setBookings(result.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <ul>
        {bookings.map((booking) => (
          <li key={booking._id}>
            User: {booking.userEmail} 
            {booking.fullName && (
              <div className="user-bookings">
                <h3>{booking.fullName}</h3>
                {booking.furnitureList.map((list, index) => (
                  <div key={index}>
                    <p>Furniture Name: {list.name}</p>
                    <img src={list.image} alt={list.name} />
                  </div>
                ))}
                <p>Architect: {booking.architect}</p>
                <p>Address: {booking.address}</p>
                <p>Date: {new Date(booking.date).toLocaleDateString()}</p>
                <p>Total Amount: {booking.furnitureList.reduce((total, furniture) => total + furniture.price, 0)}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;