const express = require('express');
const router = express.Router();
const Collection1 = require('../models/collection1.model');

router.get('/', async (req, res) => {
  try {
    const collection1 = await Collection1.find();
    res.json(collection1);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching collection1' });
  }
});

router.post('/', async (req, res) => {
  try {
    const collection1 = new Collection1(req.body);
    await collection1.save();
    res.json(collection1);
  } catch (error) {
    res.status(400).json({ message: 'Error creating collection1' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const collection1 = await Collection1.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(collection1);
  } catch (error) {
    res.status(400).json({ message: 'Error updating collection1' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Collection1.findByIdAndRemove(req.params.id);
    res.json({ message: 'Collection1 deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Error deleting collection1' });
  }
});

module.exports = router;