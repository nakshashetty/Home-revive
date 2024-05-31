import React, { useState, useContext } from 'react';
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap';
import {  useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { BASE_URL } from '../utils/config';
//import AdminDashboard from '../pages/Admindashboard';

const Login = (props) => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    isAdmin: false,
  });

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id.toLowerCase()]: e.target.value }));
    if (e.target.id === 'email') {
      setCredentials((prev) => ({ ...prev, isAdmin: e.target.value === 'admin@example.com' }));
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();

    dispatch({ type: 'LOGIN_START' });

    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: 'POST', // corrected method name
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(credentials),
      });

      const result = await res.json();
      if (!res.ok) {
        alert(result.message);
      }

      console.log(result.data);
      
      if (result.data.role === 'admin') {
        navigate('/admin');}
        else{
      dispatch({ type: 'LOGIN_SUCCESS', payload: result.data });
      navigate('/category');}
    } catch (err) {
      dispatch({ type: 'LOGIN_FAILURE', payload: err.message });
    }
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <h2>Login</h2>

            <Form onSubmit={handleClick}>
              <FormGroup>
                <input type="email" placeholder="Email" required id="email" onChange={handleChange} />
              </FormGroup>
              <FormGroup>
                <input type="password" placeholder="Password" required id="password" onChange={handleChange} />
              </FormGroup>

              <Button className="btn secondary_btn auth_btn" type="submit">
                Login
              </Button>
            </Form>

            
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>
              Don't have an account? Register here.
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export { Login };