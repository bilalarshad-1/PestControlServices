import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Messages.css';  

const Messages = () => {
    const [messages, setMessages] = useState([]);
    const [selectedMessageId, setSelectedMessageId] = useState(null);


    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const response = await axios.get('http://localhost:5012/api/contact');
                setMessages(response.data);
            } catch (error) {
                console.error('Error fetching messages:', error);
            }
        };
        fetchMessages();
    }, []);

    
    const toggleMessageStatus = (messageId) => {
        setMessages(messages.map(message =>
            message._id === messageId
                ? { ...message, read: !message.read }
                : message
        ));
    };

    const handleRowClick = (messageId) => {
        setSelectedMessageId(selectedMessageId === messageId ? null : messageId); 
    };


    const handleDelete = async (messageId) => {
        try {
            await axios.delete(`http://localhost:5012/api/contact/${messageId}`);
            setMessages(messages.filter(message => message._id !== messageId)); 
        } catch (error) {
            console.error('Error deleting message:', error);
        }
    };

    return (
        <div className="container">
            <h2 className="text-center font-bold text-3xl mb-6"> Contact Messages</h2>

            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>Message</th>
                        <th>Status</th>
                        <th>Actions</th> 
                    </tr>
                </thead>
                <tbody>
                    {messages.length === 0 ? (
                        <tr>
                            <td colSpan="6" className="text-center p-4 text-gray-500">No messages available</td>
                        </tr>
                    ) : (
                        messages.map((message) => (
                            <tr
                                key={message._id}
                                onClick={() => handleRowClick(message._id)}
                                className={`cursor-pointer transition-all duration-200 ease-in-out hover:bg-gray-100 ${selectedMessageId === message._id ? 'selected' : ''}`}
                            >
                                <td>{message.name}</td>
                                <td>{message.phoneNumber}</td>
                                <td>{message.email}</td>
                                <td className="message-preview">{message.message.slice(0, 50)}...</td>
                                <td
                                    onClick={(e) => {
                                        e.stopPropagation(); 
                                        toggleMessageStatus(message._id);
                                    }}
                                    className={message.read ? 'status-read' : 'status-unread'}
                                >
                                    {message.read ? 'Read' : 'Unread'}
                                </td>
                                <td>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation(); 
                                            handleDelete(message._id);
                                        }}
                                        className="delete-btn"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
            {selectedMessageId && (
                <div className="details">
                    <h3>Message Details</h3>
                    {messages.filter((message) => message._id === selectedMessageId).map((message) => (
                        <div key={message._id}>
                            <p><strong>Name:</strong> {message.name}</p>
                            <p><strong>Email:</strong> {message.email}</p>
                            <p><strong>Phone Number:</strong> {message.phoneNumber}</p>
                            <p><strong>Message:</strong> {message.message}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Messages;
