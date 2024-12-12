import React from 'react';
import { RecipeStep } from '../../types/recipe';

const RecipeSteps: React.FC<{ steps: RecipeStep[] }> = ({ steps }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Recipe</h3>
      <ol className="list-decimal list-inside space-y-3">
        {steps.map((step) => (
          <li key={step.step} className="text-gray-700">
            {step.instruction}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeSteps;