import React from 'react';
import { MealEntry } from '../../../types/cgm';
import { formatTime, formatNutrition } from '../../../utils/formatters';

interface MealLogProps {
  meals: MealEntry[];
}

const MealLog: React.FC<MealLogProps> = ({ meals }) => {
  return (
    <div className="p-6">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">Meal Log</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Time</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Meal</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Type</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Nutrition</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {meals.map((meal) => (
              <tr key={meal.id}>
                <td className="px-4 py-3 text-sm text-gray-900">
                  {formatTime(meal.timestamp)}
                </td>
                <td className="px-4 py-3 text-sm text-gray-900 font-medium">
                  {meal.name}
                </td>
                <td className="px-4 py-3 text-sm text-gray-900 capitalize">
                  {meal.type}
                </td>
                <td className="px-4 py-3 text-sm text-gray-500">
                  {meal.nutrition ? formatNutrition(meal.nutrition) : '-'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MealLog;