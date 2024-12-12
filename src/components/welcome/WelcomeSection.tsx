import React from 'react';
import WelcomeMessage from './WelcomeMessage';
import MealRecommendation from './MealRecommendation';
import IngredientList from '../recipe/IngredientList';
import RecipeSteps from '../recipe/RecipeSteps';
import WeeklyShoppingList from '../shopping/WeeklyShoppingList';
import { useMealRecommendation } from '../../hooks/useMealRecommendation';
import { useRecipe } from '../../hooks/useRecipe';
import { useShoppingList } from '../../hooks/useShoppingList';

const WelcomeSection = () => {
  const recommendation = useMealRecommendation();
  const recipe = useRecipe();
  const { items, toggleItem } = useShoppingList();

  return (
    <div className="mb-8">
      <WelcomeMessage userName="Sartosh" />
      <MealRecommendation recommendation={recommendation} />
      <IngredientList ingredients={recipe.ingredients} />
      <RecipeSteps steps={recipe.steps} />
      <WeeklyShoppingList items={items} onToggleItem={toggleItem} />
    </div>
  );
};

export default WelcomeSection;