// Import necessary libraries and styles
import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../styles/ThankYou.css';
import { RiCheckboxCircleFill } from 'react-icons/ri';

// Define the ThankYou component
const Thankyou = () => {
  return (
    <section className="background-image">
      <Container>
        <Row>
          <Col lg="12" className="pt-5 text-center">
            <div className="thank__you">
              <span className="icon"><RiCheckboxCircleFill /></span>
              <h1 className="mb-3 fw-semibold">Thank You for Choosing Home Revive!</h1>
              <h3 className="mb-4">Your Booking is Confirmed.</h3>
              <p>We are delighted that you chose Home Revive for your needs. Our team is dedicated to providing the best services to make your home a better place.</p>
              <p>Feel free to explore more about our offerings and how we can enhance your living experience. If you have any questions or special requests, don't hesitate to reach out to our customer support.</p>
              <p>Thanks again for visiting our website! We hope you have a fantastic day.</p>
              <Button className="btn primary__btn w-25"><Link to='/home'>Back to Home</Link></Button>
              <Button className="btn primary__btn w-25"><Link to='/user/bookings'>Your Bookings</Link></Button>

            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Thankyou;
