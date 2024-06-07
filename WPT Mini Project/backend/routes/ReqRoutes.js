const express = require('express');
const router = express.Router();
const RequestCallback = require('../models/RequestCallback');

router.post('/addData', async (req, res) => {
    const { name, phoneNumber, email, location} = req.body;

    if (!name || !phoneNumber || !email || !location ) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const newRequestCallback = new RequestCallback({
            name,
            phoneNumber,
            email,
            location
            
        });

        const savedRequestCallback = await newRequestCallback.save();
        res.status(201).json(savedRequestCallback);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

router.get('/getALLData', async (req, res) => {
    try {
        const requestCallbacks = await RequestCallback.find();
        res.status(200).json(requestCallbacks);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});
router.delete('/remove/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const requestCallback = await RequestCallback.findByIdAndDelete(id);

        if (!requestCallback) {
            return res.status(404).json({ error: 'RequestCallback not found' });
        }

        res.json({ message: 'RequestCallback deleted successfully' });
    } catch (error) {
        console.error('Error deleting RequestCallback:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
module.exports = router;