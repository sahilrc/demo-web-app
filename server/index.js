const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// In-memory task store
let tasks = [
  { id: uuidv4(), title: 'Set up project', status: 'done', priority: 'high', createdAt: new Date().toISOString() },
  { id: uuidv4(), title: 'Build API endpoints', status: 'in-progress', priority: 'high', createdAt: new Date().toISOString() },
  { id: uuidv4(), title: 'Design frontend UI', status: 'todo', priority: 'medium', createdAt: new Date().toISOString() },
];

// GET all tasks — now supports search query
app.get('/api/tasks', (req, res) => {
  const { status, priority, q } = req.query;
  let filtered = tasks;
  if (status) filtered = filtered.filter(t => t.status === status);
  if (priority) filtered = filtered.filter(t => t.priority === priority);
  if (q) filtered = filtered.filter(t => t.title.toLowerCase().includes(q.toLowerCase()));
  res.json({ tasks: filtered, total: filtered.length });
});

// GET single task
app.get('/api/tasks/:id', (req, res) => {
  const task = tasks.find(t => t.id === req.params.id);
  if (!task) return res.status(404).json({ error: 'Task not found' });
  res.json(task);
});

// POST new task
app.post('/api/tasks', (req, res) => {
  const { title, priority = 'medium' } = req.body;
  if (!title) return res.status(400).json({ error: 'Title is required' });
  const task = { id: uuidv4(), title, status: 'todo', priority, createdAt: new Date().toISOString() };
  tasks.push(task);
  res.status(201).json(task);
});

// PUT update task
app.put('/api/tasks/:id', (req, res) => {
  const index = tasks.findIndex(t => t.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Task not found' });
  tasks[index] = { ...tasks[index], ...req.body, id: tasks[index].id };
  res.json(tasks[index]);
});

// DELETE task
app.delete('/api/tasks/:id', (req, res) => {
  const index = tasks.findIndex(t => t.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Task not found' });
  tasks.splice(index, 1);
  res.status(204).send();
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;