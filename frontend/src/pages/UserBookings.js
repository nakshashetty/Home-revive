import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { BASE_URL } from '../utils/config';
import "../styles/UserBookings.css";

const UserBookings = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(`${BASE_URL}/booking/user/${user._id}`, {
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
        
        setBookings(result);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    if (user) {
      fetchBookings();
    }
  }, []);

  return (
    <div className="user-bookings">
      <h1>My Bookings</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {bookings.length === 0 && !loading && !error && (
        <p>No bookings found.</p>
      )}
      {bookings.map((booking) => (
        <li key={booking._id}>
          <h3>{booking.fullName}</h3>
        {booking.furnitureList.map((list) => (
          <div>
            <p>Furniture Name: { list.name }</p>
            <img src={list.image}></img>
          </div>
        ))}
          <p>Architect:{booking.architect}</p>
          <p>Address: {booking.address}</p>
          <p>Date: {new Date(booking.date).toLocaleDateString()}</p>
          <p>Total Amount: {booking.furnitureList.reduce((total, furniture) => total + furniture.price, 0)}</p>
          {/* Display other booking details as needed */}
        </li>
      ))}
    </div>
  );
};

export default UserBookings;