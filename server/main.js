const express = require('express');
const userRouter = require('./services/user/user_endpoint/user_endpoint'); // Remove `.ts` extension

const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Root endpoint
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// User router
app.use('/user', userRouter);

// Endpoint for everyone
app.get('/everyone', (req, res) => {
    res.send('Hello, everyone!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
