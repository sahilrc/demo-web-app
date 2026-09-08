const express = require('express');
const router = express.Router();

// Default tags
let tags = [
  { id: 1, name: 'Work', color: '#3498db' },
  { id: 2, name: 'Personal', color: '#9b59b6' },
  { id: 3, name: 'Urgent', color: '#e74c3c' },
  { id: 4, name: 'Health', color: '#27ae60' },
  { id: 5, name: 'Finance', color: '#f39c12' },
  { id: 6, name: 'Learning', color: '#1abc9c' },
];

let nextId = 7;

// GET all tags
router.get('/', (req, res) => {
  res.json({ tags, total: tags.length });
});

// POST create tag
router.post('/', (req, res) => {
  const { name, color } = req.body;
  if (!name) return res.status(400).json({ error: 'Tag name is required' });
  if (tags.find(t => t.name.toLowerCase() === name.toLowerCase())) {
    return res.status(409).json({ error: 'Tag already exists' });
  }
  const tag = { id: nextId++, name, color: color || '#95a5a6' };
  tags.push(tag);
  res.status(201).json(tag);
});

// DELETE tag
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = tags.findIndex(t => t.id === id);
  if (index === -1) return res.status(404).json({ error: 'Tag not found' });
  tags.splice(index, 1);
  res.status(204).send();
});

module.exports = router;