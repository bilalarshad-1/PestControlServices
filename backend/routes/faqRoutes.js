const express = require('express');
const { getFaqs, createFaq,  deleteFaq } = require('../controllers/faqController');

const router = express.Router();
router.route('/').get(getFaqs).post(createFaq);
router.route('/:id').delete(deleteFaq);

module.exports = router;
