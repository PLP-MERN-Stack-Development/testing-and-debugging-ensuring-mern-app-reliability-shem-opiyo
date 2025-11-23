const express = require('express');
const Bug = require('../models/Bug');
const router = express.Router();

// Get all bugs
router.get('/', async (req, res) => {
  try {
    const bugs = await Bug.find();
    res.json(bugs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create bug
router.post('/', async (req, res) => {
  const bug = new Bug(req.body);
  try {
    const newBug = await bug.save();
    res.status(201).json(newBug);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update bug
router.patch('/:id', async (req, res) => {
  try {
    const updatedBug = await Bug.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedBug);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete bug
router.delete('/:id', async (req, res) => {
  try {
    await Bug.findByIdAndDelete(req.params.id);
    res.json({ message: 'Bug deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;