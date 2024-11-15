const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000; // You can use any port

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve chat.html at the root route
app.get('/', (req, res) => {
 res.sendFile(path.join(__dirname, 'public', 'chat.html'));
});

// Start the server
app.listen(PORT, () => {
 console.log(`Server is running at http://localhost:${PORT}`);
});
