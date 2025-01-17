const Contact = require('../models/contactModel');


const getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.json(contacts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateContact = async (req, res) => {
    const { id } = req.params; 
    const { name, phoneNumber, email, message } = req.body;

    try {
        const updatedContact = await Contact.findByIdAndUpdate(
            id, 
            { name, phoneNumber, email, message }, 
            { new: true, runValidators: true } 
        );

        if (!updatedContact) {
            return res.status(404).json({ message: 'Contact not found' });
        }

        res.json(updatedContact); 
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const createContact = async (req, res) => {
    const { name, phoneNumber, email, message } = req.body;
    try {
        const newContact = new Contact({
            name,
            phoneNumber,
            email,
            message
        });
        await newContact.save();
        res.status(201).json(newContact);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};



const deleteContact = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedContact = await Contact.findByIdAndDelete(id);
        if (!deletedContact) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        res.json({ message: 'Contact deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    getContacts,
    createContact,
    updateContact,
    deleteContact
};
