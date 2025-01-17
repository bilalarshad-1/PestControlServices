const Faq = require('../models/faq');


const getFaqs = async (req, res) => {
  try {
    const faqs = await Faq.find();
    res.status(200).json(faqs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const createFaq = async (req, res) => {
  const { question, answer } = req.body;

  if (!question || !answer) {
    return res.status(400).json({ message: 'Both question and answer are required.' });
  }

  try {
    const faq = new Faq({ question, answer });
    const savedFaq = await faq.save();
    res.status(201).json(savedFaq);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};





const deleteFaq = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedFaq = await Faq.findByIdAndDelete(id);
    if (!deletedFaq) {
      return res.status(404).json({ message: 'FAQ not found.' });
    }
    res.status(200).json({ message: 'FAQ deleted successfully.' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getFaqs, createFaq, updateFaq, deleteFaq };
