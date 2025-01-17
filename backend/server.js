const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const contactRoutes = require('./routes/contactRoutes'); // Correct import
const faqRoutes = require('./routes/faqRoutes');

dotenv.config();
const app = express();

connectDB();  

app.use(express.json());  
app.use(cors());  



app.use('/api/contact', contactRoutes);
app.use('/api/faqs', faqRoutes);  

app.get('/', (req, res) => {
  res.send('Server is up and running!');
});

app.get('/', (req, res) => {
  res.send('Server is up and running!');
});

const PORT = process.env.PORT || 5012;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
