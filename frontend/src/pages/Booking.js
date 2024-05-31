import React, { useState, useContext ,useEffect} from 'react';
import { Form,FormGroup, Input, Label } from 'reactstrap';
import { useFurnitureContext } from '../pages/FurnitureContext';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { BASE_URL } from '../utils/config';
import "../styles/Booking.css";


const Booking = () => {
  const { selectedFurnitureList, clearFurnitureList } = useFurnitureContext();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const architects=[
    'Ramesh Kumar',
    'Sanjay Puri',
    'Rajiv Saini',
    'Manoj Verma',
    'Steven Alon',
    'Rahul Jain',
  ]

  const [booking, setBooking] = useState({
    userId: user && user._id,
    userEmail: user && user.email,
    fullName: 'John Doe',
    phone: '8454857103',
    date: '2024-02-29',
    architect: '',
    address: 'xyz',
    furnitureList: selectedFurnitureList,
    paymentMethod: 'cash',
    
  });

  useEffect(() => {
    const totalPrice = selectedFurnitureList.reduce((acc, furniture) => {
      return acc + parseFloat(furniture.price);
    }, 0);
    setBooking((prevData) => ({ ...prevData, furnitureData: totalPrice }));
  }, [selectedFurnitureList]);


  const handleChange = (e) => {
    const { id, value } = e.target;
    setBooking((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleAddMore = () => {
      navigate('/furniture');
  };
  
  const handleClick = async (e) => {
    e.preventDefault();

    try {
      if(!user || user===undefined || user===null){
        return alert('Please sign in')
      }
      
      const res = await fetch(`${BASE_URL}/booking`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ ...booking, furnitureList: selectedFurnitureList }),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message);
      }
      navigate('/thankyou');
      clearFurnitureList();

    } catch (err) {
      alert(`Error: ${err.message}`);
    }
  };

  const handlePaymentSubmit = () => {
    switch (booking.paymentMethod) {
      case 'cashOnDelivery':
        alert('Order placed. Pay on delivery.');
        break;
      case 'googlePay':
        alert('Redirecting to Google Pay...');
        break;
      case 'netBanking':
        alert('Redirecting to Net Banking...');
        break;
      default:
        break;
    }
  };

  const handlePaymentChange = (e) => {
    const { value } = e.target;
    setBooking({ ...booking, paymentMethod: value });
  };

  return (
    <div className="booking__form">
      <h1>Effortless Booking for Exceptional Service: Secure Your Home Revive Appointment Now!</h1>
      <Form className="booking__info-form" onSubmit={handleClick}>
        <h6>Enter Your Name </h6>
        <FormGroup className="d-flex align-itens-center gap-4 ">
          <Input
            type="text"
            placeholder="Name"
            id="fullName"
            required
            onChange={handleChange}
          />
        </FormGroup>
     
        <h6>Enter Your Contact Details </h6>
        <FormGroup className="d-flex align-itens-center gap-4 ">
          <Input
            type="tel"
            placeholder="Phone Number"
            id="phone"
            required
            onChange={handleChange}
          />
        </FormGroup>
        <h6>Select A date</h6>
        <FormGroup className="d-flex align-itens-center gap-4">
          <Input
            type="date"
            placeholder="checkinDate"
            id="date"
            required
            onChange={handleChange}
          />
        </FormGroup>
        <h6>Enter architect Details</h6>
        <FormGroup>
          <Input
            type="select"
            placeholder="Name of the Architect"
            id="architect"
            required
            onChange={handleChange}
            >
            <option value="" disabled selected>Select an Architect</option>
            {architects.map((architect, index) => (
              <option key={index} value={architect}>
                {architect}
              </option>
            ))}
          </Input>
        </FormGroup>
        <h6>Enter Complete Address</h6>
        <FormGroup>   
          <Input
            type="text"
            placeholder="Address"
            id="address"
            required
            onChange={handleChange}
          />
        </FormGroup>
        
     
        {selectedFurnitureList.length > 0 && (
          <div>
            <h3>Selected Furniture:</h3>
            {selectedFurnitureList.map((furniture, index) => (
              <div key={index}>
                <img src={furniture.image} alt={furniture.name} />
                <p>{furniture.name}</p>
                <p>{furniture.Des}</p>
                <p>{furniture.price}</p>
              </div>
            ))}
          <div>
          <h6>Total Amount: {booking.furnitureData}</h6>
          
        </div>
        </div>
        )}

        <button type="button" onClick={handleAddMore} className="add-more-button">
          Add More
        </button>
        

        <div className="payment-section mt-4">
          <div>
            <h5>Payment Options</h5>
            {/* ... (rest of the payment options) */}
            <FormGroup check>
              <Input
                name="radio1"
                type="radio"
                value="cash"
                checked={booking.paymentMethod === 'cash'}
                onChange={handlePaymentChange}
              />
              {' '}
              <Label check>
                Cash On Delivery
              </Label>
            </FormGroup>
            <FormGroup check>
              <Input
                name="radio1"
                type="radio"
                value="googlePay"
                checked={booking.paymentMethod === 'googlePay'}
                onChange={handlePaymentChange}
              />
              {' '}
              <Label check>
                Google Pay
              </Label>
            </FormGroup>
            <FormGroup
              check
              disabled
            >
              <Input
                name="radio1"
                type="radio"
                value="credit"
                checked={booking.paymentMethod === 'credit'}
                onChange={handlePaymentChange}
              />
              {' '}
              <Label check>
                Credit Card
              </Label>
            </FormGroup>

            <button onClick={handlePaymentSubmit}>Proceed to Payment</button>
            
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Booking;
