const express = require('express');
const { createFleet, deleteFleet, getAllFleets, getFleetById, updateFleet } = require('./functions');

const router = express.Router();


// Get a fleet by ID
router.get('/fleet/:id', async (req, res) => {
    try {
        const fleet = await getFleetById(parseInt(req.params.id, 10)); // Ensure `id` is parsed as a number
        res.status(200).json(fleet);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create a new fleet
router.post('/fleet', async (req, res) => {
    try {
        const newFleet = await createFleet(req.body);
        res.status(201).json(newFleet);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update an existing fleet
router.put('/fleet/:id', async (req, res) => {
    try {
        const updatedFleet = await updateFleet(parseInt(req.params.id, 10), req.body); // Ensure `id` is parsed as a number
        res.status(200).json(updatedFleet);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete a fleet
router.delete('/fleet/:id', async (req, res) => {
    try {
        await deleteFleet(parseInt(req.params.id, 10)); // Ensure `id` is parsed as a number
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get all fleets

router.get('/fleets', async (req, res) => {
    try {
        const fleets = await getAllFleets();
        res.status(200).json(fleets);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
module.exports = router;
