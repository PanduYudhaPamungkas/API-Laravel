require('dotenv').config();
const express = require('express');
const mentorRouter = require('./routes/mentor');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/mentor', mentorRouter);

// Start server
app.listen(PORT, () => {
    console.log(`API Gateway running on port ${PORT}`);
});
