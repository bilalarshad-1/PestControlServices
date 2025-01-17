const express = require('express');
const { getContacts, createContact, deleteContact } = require('../controllers/contactController');

const router = express.Router();

router.get('/contacts', getContacts);
router.post('/contacts', createContact);
router.delete('/contacts/:id', deleteContact);  // Ensure this is correct

module.exports = router;
