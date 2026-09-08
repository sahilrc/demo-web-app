/**
 * Check if a date string is overdue
 * @param {string} dateStr - ISO date string (YYYY-MM-DD)
 * @returns {boolean}
 */
function isOverdue(dateStr) {
  if (!dateStr) return false;
  const due = new Date(dateStr);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return due < today;
}

/**
 * Get days remaining until due date
 * @param {string} dateStr - ISO date string
 * @returns {number|null}
 */
function daysRemaining(dateStr) {
  if (!dateStr) return null;
  const due = new Date(dateStr);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const diff = due - today;
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

/**
 * Format date for display
 * @param {string} dateStr - ISO date string
 * @returns {string}
 */
function formatDate(dateStr) {
  if (!dateStr) return 'No due date';
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

module.exports = { isOverdue, daysRemaining, formatDate };