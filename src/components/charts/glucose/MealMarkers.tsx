import React from 'react';
import { MealEntry } from '../../../types/cgm';
import { Coffee, UtensilsCrossed, Pizza } from 'lucide-react';

interface MealMarkersProps {
  meals: MealEntry[];
}

const MealMarkers: React.FC<MealMarkersProps> = ({ meals }) => {
  const getMealIcon = (type: string) => {
    switch (type) {
      case 'breakfast':
        return Coffee;
      case 'lunch':
      case 'dinner':
        return UtensilsCrossed;
      default:
        return Pizza;
    }
  };

  return (
    <>
      {meals.map((meal) => {
        const Icon = getMealIcon(meal.type);
        return (
          <g key={meal.id}>
            <Icon className="w-6 h-6 text-gray-700" />
          </g>
        );
      })}
    </>
  );
};

export default MealMarkers;