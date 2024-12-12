import React from 'react';
import { Coffee, UtensilsCrossed, Pizza } from 'lucide-react';

const GlucoseLegend = () => {
  return (
    <div className="flex items-center space-x-4 text-sm">
      <div className="flex items-center space-x-1">
        <div className="w-4 h-0.5 bg-blue-500" />
        <span className="text-gray-600">Glucose</span>
      </div>
      <div className="flex items-center space-x-1">
        <Coffee className="w-4 h-4 text-gray-600" />
        <span className="text-gray-600">Breakfast</span>
      </div>
      <div className="flex items-center space-x-1">
        <UtensilsCrossed className="w-4 h-4 text-gray-600" />
        <span className="text-gray-600">Lunch/Dinner</span>
      </div>
      <div className="flex items-center space-x-1">
        <Pizza className="w-4 h-4 text-gray-600" />
        <span className="text-gray-600">Snack</span>
      </div>
    </div>
  );
};

export default GlucoseLegend;