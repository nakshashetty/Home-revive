import React from 'react';

import architect1 from "../assets/architect1.jpeg";
import architect2 from "../assets/architect2.jpeg";
import architect3 from "../assets/architect3.jpg";
import architect4 from "../assets/architect4.jpeg";
import architect5 from "../assets/architect5.jpg";
import architect6 from "../assets/architect6.jpg";
import "../styles/Architect.css";

const architects = [
  {
    id: 1,
    name: 'Ramesh Kumar',
    description: 'Experienced architect specializing in modern designs.',
    contact: '8454857103',
    email: "rameshkumar@gmail.com",
    work: 'Modern Residential Designs',
    image: architect1,
  },
  {
    id: 2,
    name: 'Sanjay Puri',
    description: 'Innovative architect with a focus on sustainable and eco-friendly designs.',
    contact: '9702034925',
    email:"sanjaypuri12@gmail.com",
    work: 'Sustainable Architecture Projects',
    image: architect2,
  },
  {
    id: 3,
    name: 'Rajiv Saini',
    description: 'Passionate architect known for classical and timeless designs.',
    contact: '9004762313',
    email: "rajiv345@gmail.com",
    work: 'Classical and Timeless Designs',
    image: architect3,
  },
  {
    id: 4,
    name: 'Manoj Verma',
    description: 'Creative architect with expertise in urban planning and development.',
    contact: '7304380967',
    email: "manojverma11@gmail.com",
    work: 'Urban Planning and Development Projects',
    image: architect4,
  },
  {
    id: 5,
    name: 'Steven Alon',
    description: 'Blend artistic vision with technical expertise to design and oversee the construction of functional, aesthetically pleasing, and safe structures..',
    contact: '8425091066',
    email: "stevenalon178@gmail.com",
    work: 'design and oversee the construction of buildings, harmonizing functionality and aesthetics.',
    image: architect5,
  },
  {
    id: 6,
    name: 'Rahul Jain',
    description: 'create visionary blueprints, well-designed structures that seamlessly integrate form and function.',
    contact: '9594430719',
    email: "rahul345@gmail.com",
    work: 'Architects envision and design structures, while also overseeing their construction to ensure realization of the intended vision.',
    image: architect6,
  },
];

const Architect = () => {
  return (
    <div>
      <h2>Meet Our Architects</h2>
      <p>Explore profiles of visionary architects and their outstanding works.</p>

      <div className="architects">
        {architects.map(architect => (
          <div className="architect-card" key={architect.id}>
            <div>
              <img src={architect.image} alt={architect.name} className="architect-image" />
              <div className="architect-details">
                <h3>{architect.name}</h3>
                <p className="work">{architect.work}</p>
                <p className="description">{architect.description}</p>
                <p className="contact">Contact: <a href={`tel:${architect.contact}`}>{architect.contact}</a></p>
                <p className="email">Email: <a href={`mailto:${architect.email}`}>{architect.email}</a></p>
              </div>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Architect;