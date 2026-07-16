const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
require('dotenv').config();

const app = express();

app.use(express.json());

// Fixed CORS setup for Vercel production & Local development
app.use(cors({
  origin: [
    'https://event-hub-red.vercel.app',
    'http://localhost:5173'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Inject routes endpoints
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('EventHub Backend Server operational.');
});

const PORT = process.env.PORT || 5000;

// Express Server Start (No MongoDB/Mongoose connection needed here because Prisma handles DB inside controllers!)
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});