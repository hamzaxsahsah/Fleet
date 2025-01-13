const express = require('express');
const { createVehicule, deleteVehicule, getAllVehicules, getVehiculeById, updateVehicule } = require('./functions');

const router = express.Router();


// Get a vehicule by ID
router.get('/vehicule/:id', async (req, res) => {
    try {
        const vehicule = await getVehiculeById(parseInt(req.params.id, 10)); // Ensure `id` is parsed as a number
        res.status(200).json(vehicule);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create a new vehicule
router.post('/vehicule', async (req, res) => {
    try {
        const newVehicule = await createVehicule(req.body);
        res.status(201).json(newVehicule);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update an existing vehicule
router.put('/vehicule/:id', async (req, res) => {
    try {
        const updatedVehicule = await updateVehicule(parseInt(req.params.id, 10), req.body); // Ensure `id` is parsed as a number
        res.status(200).json(updatedVehicule);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete a vehicule
router.delete('/vehicule/:id', async (req, res) => {
    try {
        await deleteVehicule(parseInt(req.params.id, 10)); // Ensure `id` is parsed as a number
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get all vehicules

router.get('/vehicules', async (req, res) => {
    try {
        const vehicules = await getAllVehicules();
        res.status(200).json(vehicules);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
module.exports = router;
