const express = require('express');
const { createDevice, deleteDevice, getAllDevices, getDeviceById, updateDevice } = require('./functions');

const router = express.Router();


// Get a device by ID
router.get('/device/:id', async (req, res) => {
    try {
        const device = await getDeviceById(parseInt(req.params.id, 10)); // Ensure `id` is parsed as a number
        res.status(200).json(device);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create a new device
router.post('/device', async (req, res) => {
    try {
        const newDevice = await createDevice(req.body);
        res.status(201).json(newDevice);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update an existing device
router.put('/device/:id', async (req, res) => {
    try {
        const updatedDevice = await updateDevice(parseInt(req.params.id, 10), req.body); // Ensure `id` is parsed as a number
        res.status(200).json(updatedDevice);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete a device
router.delete('/device/:id', async (req, res) => {
    try {
        await deleteDevice(parseInt(req.params.id, 10)); // Ensure `id` is parsed as a number
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get all devices

router.get('/devices', async (req, res) => {
    try {
        const devices = await getAllDevices();
        res.status(200).json(devices);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
module.exports = router;
