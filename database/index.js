const express = require('express');
const userRouter = require('./services/user/endpoints'); 
const vehiculeRouter = require('./services/vehicule/endpoints');
const deviceRouter = require('./services/device/endpoints');
const fleetRouter = require('./services/fleet/endpoints');
const organisationRouter = require('./services/organisation/endpoints'); 
const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Root endpoint
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// User routes
app.use('/', userRouter);

// Vehicule routes
app.use('/', vehiculeRouter); // Corrected spelling: 'vehicule' to 'vehicle'

// Device routes
app.use('/', deviceRouter);

// Fleet routes
app.use('/', fleetRouter);

// Organization routes
app.use('/', organisationRouter); // Optionally, you can align with "organization" spelling for consistency


// Endpoint for everyone
app.get('/everyone', (req, res) => {
    res.send('Hello, everyone!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
