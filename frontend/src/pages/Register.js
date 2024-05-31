import React , {useState, useContext} from 'react'

import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap'
import { useNavigate} from 'react-router-dom'


import { AuthContext } from '../context/AuthContext';
import { BASE_URL } from './../utils/config';


const Register = (props) => {
    const [credentials, setCredentials] = useState({
        username: '',
        email: '',
        password: ''
    });

    const [error, setError] = useState('');

    const { dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleChange = e => {
        setCredentials(prev => ({ ...prev, [e.target.id.toLowerCase()]: e.target.value }));
    };

    const handleClick = async e => {
        e.preventDefault();

        try {
            const res = await fetch(`${BASE_URL}/auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(credentials)
            });
            const result = await res.json();

            if (!res.ok) {
                if (result && result.message) {
                    throw new Error(result.message);
                } else {
                    throw new Error('Registration failed.');
                }
            }

            dispatch({ type: 'REGISTER_SUCCESS' });
            navigate('/category');

        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <section>
            <Container>
                <Row>
                    <Col lg='8' className="m-auto">
                        <h2>Register</h2>

                        <Form onSubmit={handleClick}>
                            <FormGroup>
                                <input type="text" placeholder="Username" required id="username" onChange={handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <input type="email" placeholder="Email" required id="Email" onChange={handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <input type="password" placeholder="Password" required id="password" onChange={handleChange} />
                            </FormGroup>

                            {error && <p className="text-danger">{error}</p>}

                            <Button className="btn secondary_btn auth_btn" type="submit">Create Account</Button>
                        </Form>

                        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login.</button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export { Register };