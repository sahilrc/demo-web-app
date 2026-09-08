const { isOverdue, daysRemaining, formatDate } = require('../server/utils/dateHelpers');

describe('Date Helpers', () => {
  test('isOverdue returns false for null date', () => {
    expect(isOverdue(null)).toBe(false);
  });

  test('isOverdue returns true for past date', () => {
    expect(isOverdue('2020-01-01')).toBe(true);
  });

  test('isOverdue returns false for future date', () => {
    expect(isOverdue('2030-12-31')).toBe(false);
  });

  test('daysRemaining returns null for no date', () => {
    expect(daysRemaining(null)).toBeNull();
  });

  test('formatDate returns readable string', () => {
    expect(formatDate('2026-03-15')).toBe('Mar 15, 2026');
  });

  test('formatDate handles null', () => {
    expect(formatDate(null)).toBe('No due date');
  });
});