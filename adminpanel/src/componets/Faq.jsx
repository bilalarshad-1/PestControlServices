import React, { useState } from 'react';
import axios from 'axios';
import './Faq.css'; 

const Faq = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/faqs', { question, answer });
      setMessage('FAQ added successfully!');
      setQuestion('');
      setAnswer('');
    } catch (error) {
      setMessage('Error adding FAQ.');
    }
  };

  return (
    <div className="faq-container">
      <h2>Post a New FAQ</h2>
      <form onSubmit={handleSubmit} className="faq-form">
        <div className="form-group">
          <label>Question</label>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label>Answer</label>
          <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            required
            className="input-field"
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">Submit FAQ</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default Faq;
