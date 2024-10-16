require('dotenv').config(); 
const express = require('express'); 
const app = express(); 

app.use(express.json()); 
const authRoutes = require('./back-end/routes/authRoutes'); 
const userRoutes = require('./back-end/routes/userRoutes');

app.use('/api/auth', authRoutes); 
app.use('/api/users', userRoutes);
module.exports = app;