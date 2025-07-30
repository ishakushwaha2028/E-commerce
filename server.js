// backend/server.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./routes/config/db'); // Path to your db connection
const productRoutes = require('./routes/productRoutes'); // Path to your product routes

dotenv.config(); // Load environment variables


const app = express();

// --- Middleware ---
app.use(cors({origin:"http//localhost:5173", methods:['GET','POST','PUT','DELETE'],
 })); // Enable CORS
app.use(express.json()); // Body parser for JSON
app.use(express.urlencoded({extended:true}));

// --- Routes ---
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Mount your product routes
app.use('/api/products', productRoutes);

// --- Error Handling (Optional, but good practice) ---
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke on the server!');
});

// --- Start the Server ---
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => 
  console.log(`Server running on port${5000}`));
connectDB();
