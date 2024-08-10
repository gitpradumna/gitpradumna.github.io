const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const userModel = require('./userModel');
const port = 3000;
const app = express();

app.use(express.static(path.join(__dirname)));
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/blog_page', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Database connected');
});

// Route for the main index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

// Handling form submissions
app.post('/post', async (req, res) => {
    try {
        const email = req.body.email; // Explicitly extract the email field
        const user = new userModel({ email }); // Create a new user instance
        await user.save(); // Save the user to the database
        console.log('Email saved:', user);
        res.send('Email saved Successfully');
    } catch (error) {
        console.error('Error saving email:', error);
        res.status(500).send('Error saving email');
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
