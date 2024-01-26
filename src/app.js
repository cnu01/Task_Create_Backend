const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const config = require('./config');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect(config.database)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error(err));

// Routes
app.use('/api/auth', authRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Server Error' });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () =>
    console.log(`Server running on port ${PORT}`)
);
