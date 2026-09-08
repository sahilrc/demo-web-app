import React from 'react';

function DatePicker({ value, onChange, minDate }) {
  return (
    <div className="date-picker">
      <label>Due Date</label>
      <input
        type="date"
        value={value || ''}
        min={minDate || new Date().toISOString().split('T')[0]}
        onChange={(e) => onChange(e.target.value)}
      />
      {value && (
        <button className="clear-date" onClick={() => onChange(null)}>
          ✕ Clear
        </button>
      )}
    </div>
  );
}

export default DatePicker;