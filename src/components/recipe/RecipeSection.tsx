import React from 'react';
import { Recipe } from '../../types/recipe';
import { RecipeImage, IngredientList, RecipeSteps } from '../../features/recipe';

interface RecipeSectionProps {
  recipe: Recipe;
}

const RecipeSection: React.FC<RecipeSectionProps> = ({ recipe }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <RecipeImage 
          imageUrl="https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=800&h=600&fit=crop" 
          recipeName="Chicken Tikka Masala"
        />
      </div>
      <div className="space-y-6">
        <IngredientList ingredients={recipe.ingredients} />
        <RecipeSteps steps={recipe.steps} />
      </div>
    </div>
  );
};

export default RecipeSection;