// backend/__tests__/bugs.test.js

const request = require('supertest');
const app = require('../server');  // Adjust if needed
const mongoose = require('mongoose');
const Bug = require('../models/Bug');
jest.mock('mongoose');  // Mock DB

beforeAll(async () => {
  // Mock connect
  mongoose.connect.mockResolvedValue();
});

describe('Bug API', () => {
  // Unit test example: Validation logic (assume a helper function)
  test('should validate bug data', () => {
    const validateBug = (bug) => !!bug.title && !!bug.description;
    expect(validateBug({ title: 'Test', description: 'Desc' })).toBe(true);
    expect(validateBug({ title: '' })).toBe(false);
  });

  // Integration test: Get all bugs
  test('GET /api/bugs', async () => {
    Bug.find.mockResolvedValue([{ title: 'Test Bug' }]);
    const res = await request(app).get('/api/bugs');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveLength(1);
  });

  // Similar tests for POST, PATCH, DELETE...
  test('POST /api/bugs', async () => {
    const newBug = { title: 'New', description: 'Desc' };
    Bug.prototype.save = jest.fn().mockResolvedValue(newBug);
    const res = await request(app).post('/api/bugs').send(newBug);
    expect(res.statusCode).toEqual(201);
  });
});