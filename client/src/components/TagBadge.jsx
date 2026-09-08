import React from 'react';

const tagColors = {
  Work: '#3498db',
  Personal: '#9b59b6',
  Urgent: '#e74c3c',
  Health: '#27ae60',
  Finance: '#f39c12',
  Learning: '#1abc9c',
};

function TagBadge({ tag, onRemove }) {
  const color = tagColors[tag] || '#95a5a6';

  return (
    <span className="tag-badge" style={{ backgroundColor: color }}>
      {tag}
      {onRemove && (
        <button className="tag-remove" onClick={() => onRemove(tag)}>✕</button>
      )}
    </span>
  );
}

export default TagBadge;