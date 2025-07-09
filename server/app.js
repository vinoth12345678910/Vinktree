require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();
app.use(express.json());
const cors = require('cors')

app.use(cors({ origin: true, credentials: true }));

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB");
}).catch(err => {
    console.error("MongoDB connection error:", err);
});

//Routes
const register_route = require('./Routes/register');
const login_route = require('./Routes/Login');
const dashboard_route = require('./Routes/dashboard');
const links_route = require('./Routes/links');
const stripeRoutes = require('./Routes/stripe');
const webhookRoutes = require('./Routes/webhook');

app.use('/api', register_route);
app.use('/api', login_route);
app.use('/api', dashboard_route);
app.use('/api', links_route);
app.use('/api/stripe', stripeRoutes);
app.use('/api/stripe', webhookRoutes);

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});