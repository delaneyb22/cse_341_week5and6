const express = require('express');
const router = express.Router();
const Collection4 = require('../models/collection4');

// GET /api/collection4
router.get('/', async (req, res) => {
  try {
    const collection4 = await Collection4.find().exec();
    res.json(collection4);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching collection4' });
  }
});

// POST /api/collection4
router.post('/', async (req, res) => {
  try {
    const { name, description } = req.body;
    const collection4 = new Collection4({ name, description });
    await collection4.save();
    res.json(collection4);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: 'Error creating collection4' });
  }
});

// PUT /api/collection4/:id
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;
    const collection4 = await Collection4.findByIdAndUpdate(id, { name, description }, { new: true });
    res.json(collection4);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: 'Error updating collection4' });
  }
});

// DELETE /api/collection4/:id
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Collection4.findByIdAndRemove(id);
    res.json({ message: 'Collection4 deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: 'Error deleting collection4' });
  }
});

module.exports = router;