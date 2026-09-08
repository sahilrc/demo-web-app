import React from 'react';

const priorityColors = { high: '#e74c3c', medium: '#f39c12', low: '#27ae60' };

function TaskList({ tasks, onRefresh }) {
  if (tasks.length === 0) return <p className="empty">No tasks found.</p>;

  return (
    <ul className="task-list">
      {tasks.map(task => (
        <li key={task.id} className={`task-item ${task.status}`}>
          <span className="priority-dot" style={{ backgroundColor: priorityColors[task.priority] }} />
          <span className="task-title">{task.title}</span>
          <span className="task-status">{task.status}</span>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;