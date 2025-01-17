const express = require('express');
const { getFaqs, createFaq, updateFaq, deleteFaq } = require('../controllers/faqController');

const router = express.Router();
router.route('/').get(getFaqs).post(createFaq);
router.route('/:id').put(updateFaq).delete(deleteFaq);

module.exports = router;
