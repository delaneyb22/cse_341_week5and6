const express = require('express');
const router = express.Router();
const Collection2 = require('../models/collection2.model');

router.get('/', async (req, res) => {
  try {
    const collection2 = await Collection2.find();
    res.json(collection2);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching collection2' });
  }
});

router.post('/', async (req, res) => {
  try {
    const collection2 = new Collection2(req.body);
    await collection2.save();
    res.json(collection2);
  } catch (error) {
    res.status(400).json({ message: 'Error creating collection2' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const collection2 = await Collection2.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(collection2);
  } catch (error) {
    res.status(400).json({ message: 'Error updating collection2' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Collection2.findByIdAndRemove(req.params.id);
    res.json({ message: 'Collection2 deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Error deleting collection2' });
  }
});

module.exports = router;