const express = require('express');
const { createUser, deleteUser, getAllUsers, getUserById, updateUser } = require('./functions');

const router = express.Router();


// Get a user by ID
router.get('/user/:id', async (req, res) => {
    try {
        const user = await getUserById(parseInt(req.params.id, 10)); // Ensure `id` is parsed as a number
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create a new user
router.post('/user', async (req, res) => {
    try {
        const newUser = await createUser(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update an existing user
router.put('/user/:id', async (req, res) => {
    try {
        const updatedUser = await updateUser(parseInt(req.params.id, 10), req.body); // Ensure `id` is parsed as a number
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete a user
router.delete('/user/:id', async (req, res) => {
    try {
        await deleteUser(parseInt(req.params.id, 10)); // Ensure `id` is parsed as a number
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get all users

router.get('/users', async (req, res) => {
    try {
        const users = await getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
module.exports = router;
