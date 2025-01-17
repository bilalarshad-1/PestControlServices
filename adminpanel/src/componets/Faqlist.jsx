import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Faqlist.css'; 

const Faqlist = () => {
  const [faqs, setFaqs] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const response = await axios.get('/api/faqs');
        setFaqs(response.data);
      } catch (error) {
        setMessage('Error fetching FAQs');
      }
    };

    fetchFAQs();
  }, []); 
  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/faqs/${id}`);
      setFaqs(faqs.filter(faq => faq._id !== id));
      setMessage('FAQ deleted successfully');
    } catch (error) {
      setMessage('Error deleting FAQ');
    }
  };

  return (
    <div>
      <h2>FAQ List</h2>
      {message && <p>{message}</p>}
      <table className="faq-table">
        <thead>
          <tr>
            <th>Question</th>
            <th>Answer</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {faqs.map((faq) => (
            <tr key={faq._id}>
              <td>{faq.question}</td>
              <td>{faq.answer}</td>
              <td>
                <button className="delete-btn" onClick={() => handleDelete(faq._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Faqlist;
