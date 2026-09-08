import React, { useState } from 'react';
import TagBadge from './TagBadge';

const AVAILABLE_TAGS = ['Work', 'Personal', 'Urgent', 'Health', 'Finance', 'Learning'];

function TagSelector({ selectedTags = [], onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleTag = (tag) => {
    const updated = selectedTags.includes(tag)
      ? selectedTags.filter(t => t !== tag)
      : [...selectedTags, tag];
    onChange(updated);
  };

  return (
    <div className="tag-selector">
      <button type="button" className="tag-trigger" onClick={() => setIsOpen(!isOpen)}>
        🏷️ Tags ({selectedTags.length})
      </button>
      {isOpen && (
        <div className="tag-dropdown">
          {AVAILABLE_TAGS.map(tag => (
            <label key={tag} className="tag-option">
              <input
                type="checkbox"
                checked={selectedTags.includes(tag)}
                onChange={() => toggleTag(tag)}
              />
              <TagBadge tag={tag} />
            </label>
          ))}
        </div>
      )}
      <div className="selected-tags">
        {selectedTags.map(tag => (
          <TagBadge key={tag} tag={tag} onRemove={(t) => toggleTag(t)} />
        ))}
      </div>
    </div>
  );
}

export default TagSelector;