// Step 1: Import required modules
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Product = require('./models/Product'); // Make sure this file exists

// Step 2: Create express app
const app = express();

// Step 3: Middlewares
app.use(cors());
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("API is running...");
})

// Step 4: Routes
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// Step 5: Connect to MongoDB and start server
mongoose.connect('mongodb://127.0.0.1:27017/ecommerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB Connected');
  app.listen(5000, () => {
    console.log('API is running on http://localhost:5000');
  });
}).catch(err => {
  console.error('DB connection error:',err);
});
