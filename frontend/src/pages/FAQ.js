import React, { useState } from 'react';
import '../styles/FAQ.css'; 

const FAQ = () => {

  const faqData = [
    {
      id: 1,
      question: 'How do I get started with a home renovation project?',
      answer: 'Begin by defining your goals and budget. Consult with a professional to assess your space and discuss design ideas.',
    },
    {
      id: 2,
      question: 'What types of home renovations are common?',
      answer: 'Common renovations include kitchen and bathroom upgrades, room additions, flooring changes, and exterior improvements.',
    },
    {
        id: 3,
        question: 'How long does a typical home renovation take?',
        answer: 'The duration varies based on the scope of the project. Small projects may take a few weeks, while larger renovations could span several months.',
      },
      {
        id: 4,
        question: 'What is the average cost of a home renovation?',
        answer: 'Costs vary widely, depending on the scope of the project. Small renovations may cost a few thousand dollars, while major remodels can exceed tens of thousands.',
      },
      {
        id: 5,
        question: 'What permits do I need for a home renovation?',
        answer: 'Permit requirements vary by location and project scope. Check with your local municipality and consult with your contractor to ensure compliance.',
      },
      {
        id: 6,
        question: 'What should I do if I encounter issues during the renovation?',
        answer: 'Communicate promptly with your contractor. Address concerns as they arise to ensure a smooth renovation process.',
      },
      
    
  ];

  const [faqList, setFaqList] = useState(faqData);

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <ul className="faq-list">
        {faqList.map((faq) => (
          <li key={faq.id} className="faq-item">
            <div className="question">{faq.question}</div>
            <div className="answer">{faq.answer}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;