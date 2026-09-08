const request = require('supertest');
const app = require('../server/index');

describe('Task API', () => {
  test('GET /api/tasks returns task list', async () => {
    const res = await request(app).get('/api/tasks');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('tasks');
    expect(Array.isArray(res.body.tasks)).toBe(true);
  });

  test('POST /api/tasks creates a new task', async () => {
    const res = await request(app)
      .post('/api/tasks')
      .send({ title: 'Test task', priority: 'high' });
    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe('Test task');
    expect(res.body.status).toBe('todo');
  });

  test('POST /api/tasks without title returns 400', async () => {
    const res = await request(app).post('/api/tasks').send({});
    expect(res.statusCode).toBe(400);
  });

  test('GET /api/tasks/:id returns 404 for unknown id', async () => {
    const res = await request(app).get('/api/tasks/nonexistent');
    expect(res.statusCode).toBe(404);
  });
});