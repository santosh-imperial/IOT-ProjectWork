import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { MealRecommendation } from '../../types/recommendations';

const MealRecommendationSection: React.FC<{ recommendation: MealRecommendation }> = ({ recommendation }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6 mb-8">
      <div className="space-y-4">
        <div className="flex items-start space-x-4">
          <div className="flex-1">
            <p className="text-gray-700 leading-relaxed mb-4">
              For your <span className="font-semibold">{recommendation.mealType}</span>, it is time for your favourite{' '}
              <span className="font-semibold">{recommendation.mainDish}</span> and{' '}
              <span className="font-semibold">{recommendation.sideDish}</span>. {recommendation.context}
            </p>
            
            <div className="mt-4">
              <div className="flex items-center space-x-2 mb-2">
                <ShoppingBag className="w-5 h-5 text-blue-600" />
                <h3 className="font-semibold text-gray-800">Shopping List:</h3>
              </div>
              <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                {recommendation.shoppingList.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealRecommendationSection;