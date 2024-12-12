import React from 'react';
import { Ingredient } from '../../types/recipe';

const IngredientList: React.FC<{ ingredients: Ingredient[] }> = ({ ingredients }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Ingredient List</h3>
      <div className="space-y-4">
        {ingredients.map((ingredient, index) => (
          <div key={index} className="flex items-center space-x-4">
            {ingredient.imageUrl && (
              <div className="w-16 h-16 rounded-lg overflow-hidden">
                <img 
                  src={ingredient.imageUrl} 
                  alt={ingredient.name}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <span className="text-gray-700">{ingredient.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IngredientList;