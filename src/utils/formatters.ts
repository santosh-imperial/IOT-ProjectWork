import { Nutrition } from '../types/cgm';

export const formatTime = (timestamp: string): string => {
  return new Date(timestamp).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });
};

export const formatNutrition = (nutrition: Nutrition): string => {
  return `${nutrition.calories} cal | ${nutrition.carbs}g carbs | ${nutrition.protein}g protein | ${nutrition.fat}g fat`;
};