import React, { useState } from 'react';
import axios from 'axios';
import MetaTags from '../../MetaTags/MetaTags';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            // Correct API endpoint
            const response = await axios.post('http://localhost:5012/api/contact', formData);
            alert('Message sent successfully!');
            setFormData({ name: '', phoneNumber: '', email: '', message: '' });
        } catch (error) {
            alert('Error sending message.');
        }
    };

    return (

        <>  
        <MetaTags 
        title="Professional Toronto Pest Control Services | Safe & Effective"
        description="Eliminate pests from your property with our trusted pest control services in Toronto. Eco-friendly solutions for residential and commercial needs."
        keywords="Toronto pest control, pest control services, pest extermination, eco-friendly pest removal"
        
        
        />
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 border rounded">
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border rounded"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="phoneNumber">Phone Number</label>
                <input
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border rounded"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border rounded"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border rounded"
                />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Send Message</button>
        </form>
        </>
    );
};

export default Contact;
