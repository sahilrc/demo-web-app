# Task Manager API Documentation

## Base URL
`http://localhost:3001/api`

## Endpoints

### GET /tasks
Returns all tasks. Supports optional query params:
- `status` — filter by status (`todo`, `in-progress`, `done`)
- `priority` — filter by priority (`high`, `medium`, `low`)

### GET /tasks/:id
Returns a single task by ID.

### POST /tasks
Creates a new task.
**Body:** `{ "title": "string", "priority": "high|medium|low" }`

### PUT /tasks/:id
Updates an existing task.
**Body:** Any combination of `title`, `status`, `priority`.

### DELETE /tasks/:id
Deletes a task. Returns `204 No Content`.

## Authentication
All protected endpoints require an `x-api-key` header.
