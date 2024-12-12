import React from 'react';
import { MealEntry } from '../../../types/cgm';

interface GlucoseTooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
  meals: MealEntry[];
}

const GlucoseTooltip: React.FC<GlucoseTooltipProps> = ({ active, payload, label, meals }) => {
  if (!active || !payload?.length) return null;

  const glucose = payload[0].value;
  const timestamp = label;
  const meal = meals.find(m => m.timestamp === timestamp);

  return (
    <div className="bg-white p-3 shadow-lg rounded-lg border border-gray-200">
      <p className="font-semibold text-gray-700">{new Date(timestamp).toLocaleTimeString()}</p>
      <p className="text-blue-600">{glucose} mg/dL</p>
      {meal && (
        <div className="mt-2 border-t pt-2">
          <p className="font-medium text-gray-700">{meal.name}</p>
          {meal.nutrition && (
            <div className="text-sm text-gray-500">
              <p>Carbs: {meal.nutrition.carbs}g</p>
              <p>Protein: {meal.nutrition.protein}g</p>
              <p>Fat: {meal.nutrition.fat}g</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default GlucoseTooltip;