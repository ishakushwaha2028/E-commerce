const mongoose = require('mongoose');
const connectDB = require('../config/db');
const Product = require('../models/Product');

const sampleProducts = [
  {
    name: "Refrigerator",
    price: 20000,
    description: "| Up to 55% off",
    category: "Refrigerator",
    image: "/image/refri.jpeg",
  },
  {
    name: "Air Conditioner",
    price:25000,
    description: "| Up to 55% off",
    category: "Electronics",
    image: "/image/ac.jpeg",
  },
 {
    name: "Microwave",
    price:25000,
    description: "| Up to 55% off",
    category: "Electronics",
    image: "/image/micro.jpeg",
  },
   {
    name: "Washing Machine",
    price:25000,
    description: "| Up to 55% off",
    category: "Electronics",
    image: "/image/wash.jpeg",
  },
   {
    name: "Cusion",
    price:2500,
    description: "| Up to 55% off",
    category: "Decoroatment",
    image: "/image/cusion.jpeg",
  },
     {
    name: "Vases",
    price:2500,
    description: "| Up to 55% off",
    category: "Decoroatment",
    image: "/image/vases.jpeg",
  },
     {
    name: "Home",
    price:500,
    description: "| Up to 55% off",
    category: "Decoroatment",
    image: "/image/home.jpeg",
  },
     {
    name: "Lights",
    price:250,
    description: "| Up to 55% off",
    category: "Decoroatment",
    image: "/image/light.jpeg",
  },
     {
    name: "boult",
    price:1500,
    description: "| Up to 55% off",
    category: "gadets",
    image: "/image/boult.jpeg",
  },
     {
    name: "boat",
    price:1500,
    description: "| Up to 55% off",
    category: "gadets",
    image: "/image/boat.jpeg",
  },
     {
    name: "noise",
    price:1500,
    description: "| Up to 55% off",
    category: "gadets",
    image: "/image/noise.jpeg",
  },
     {
    name: "zeb",
    price:1500,
    description: "| Up to 55% off",
    category: "gadets",
    image: "/image/zeb.jpeg",
  },
     {
    name: "clean",
    price:1500,
    description: "| Up to 55% off",
    category: "appliances",
    image: "/image/clean.jpeg",
  },

       {
    name: "vaccum",
    price:1500,
    description: "| Up to 55% off",
    category: "appliances",
    image: "/image/vaccum.jpeg",
  },
     {
    name: "helmet",
    price:1500,
    description: "| Up to 55% off",
    category: "safty gadets",
    image: "/image/helmet.jpeg",
  },

     {
    name: "tyre",
    price:1500,
    description: "| Up to 55% off",
    category: "safty gadets",
    image: "/image/tyre.jpeg",
  },
];

const insertData = async () => {
  await connectDB();       
  await Product.insertMany(sampleProducts);
  console.log("Data inserted");
  process.exit();
};

insertData();