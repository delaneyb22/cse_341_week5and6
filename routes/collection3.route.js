const express = require('express');
const router = express.Router();
const Collection3 = require('../models/collection3');

// GET /api/collection3
router.get('/', async (req, res) => {
  try {
    const collection3 = await Collection3.find().exec();
    res.json(collection3);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching collection3' });
  }
});

// POST /api/collection3
router.post('/', async (req, res) => {
  try {
    const { name, description } = req.body;
    const collection3 = new Collection3({ name, description });
    await collection3.save();
    res.json(collection3);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: 'Error creating collection3' });
  }
});

// PUT /api/collection3/:id
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;
    const collection3 = await Collection3.findByIdAndUpdate(id, { name, description }, { new: true });
    res.json(collection3);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: 'Error updating collection3' });
  }
});

// DELETE /api/collection3/:id
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Collection3.findByIdAndRemove(id);
    res.json({ message: 'Collection3 deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: 'Error deleting collection3' });
  }
});

module.exports = router;