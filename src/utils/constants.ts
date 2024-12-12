export const CHART_COLORS = {
  primary: '#3B82F6',
  secondary: '#6B7280',
  success: '#10B981',
  warning: '#F59E0B',
  danger: '#EF4444',
  gray: '#E5E5E5'
};

export const GLUCOSE_RANGES = {
  veryLow: { min: 0, max: 54, color: '#EF4444' },
  low: { min: 54, max: 70, color: '#F59E0B' },
  target: { min: 70, max: 180, color: '#10B981' },
  high: { min: 180, max: 250, color: '#F59E0B' },
  veryHigh: { min: 250, max: Infinity, color: '#EF4444' }
};

export const EXERCISE_TYPES = {
  cardio: 'Cardio',
  strength: 'Strength Training',
  flexibility: 'Flexibility'
};