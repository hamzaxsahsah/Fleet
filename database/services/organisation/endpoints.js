const express = require('express');
const { createOrganisation, deleteOrganisation, getAllOrganisations, getOrganisationById, updateOrganisation } = require('./functions');

const router = express.Router();


// Get a organisation by ID
router.get('/organisation/:id', async (req, res) => {
    try {
        const organisation = await getOrganisationById(parseInt(req.params.id, 10)); // Ensure `id` is parsed as a number
        res.status(200).json(organisation);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create a new organisation
router.post('/organisation', async (req, res) => {
    try {
        const newOrganisation = await createOrganisation(req.body);
        res.status(201).json(newOrganisation);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update an existing organisation
router.put('/organisation/:id', async (req, res) => {
    try {
        const updatedOrganisation = await updateOrganisation(parseInt(req.params.id, 10), req.body); // Ensure `id` is parsed as a number
        res.status(200).json(updatedOrganisation);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete a organisation
router.delete('/organisation/:id', async (req, res) => {
    try {
        await deleteOrganisation(parseInt(req.params.id, 10)); // Ensure `id` is parsed as a number
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get all organisations

router.get('/organisations', async (req, res) => {
    try {
        const organisations = await getAllOrganisations();
        res.status(200).json(organisations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
module.exports = router;
