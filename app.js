const express = require('express');
const app = express();

// Define port
const PORT = 3000;

// Create a basic route
app.get('/', (req, res) => {
    res.send('Hello World! Server is running 🚀');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});