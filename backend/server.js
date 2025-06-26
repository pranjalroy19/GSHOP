const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const paymentRoutes = require("./routes/paymentRoutes");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/payment", paymentRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const userRoutes = require('./routes/users');
const cartRoutes = require('./routes/cart');
const authRoute = require('./routes/auth');
const productRoutes = require('./routes/products');

app.use('/api/users', userRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/auth', authRoute); 
app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
  res.send('API is running');
});

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('✅ MongoDB connected');
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`🚀 Server started on port ${PORT}`));
})
.catch((err) => {
  console.error('❌ MongoDB connection error:', err);
});

console.log("ENV TEST:");
console.log("MONGO_URI:", process.env.MONGO_URI ? "✅ Loaded" : "❌ Missing");
console.log("JWT_SECRET:", process.env.JWT_SECRET ? "✅ Loaded" : "❌ Missing");
console.log("PASS_SEC:", process.env.PASS_SEC ? "✅ Loaded" : "❌ Missing");
