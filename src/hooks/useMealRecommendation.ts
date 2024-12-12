import { useState, useEffect } from 'react';
import { MealRecommendation } from '../types/recommendations';

export const useMealRecommendation = () => {
  const [recommendation, setRecommendation] = useState<MealRecommendation>({
    mealType: 'Dinner',
    mainDish: 'chicken tikka masala',
    sideDish: 'Naan',
    context: 'You have maintained your sugar levels and you have got in the required steps for the day. So time to have something fun at the same time ensuring you get your required protein portion for the day. Here are things you should pick up from the store',
    shoppingList: [
      'Boneless chicken thigh',
      'Tikka masala curry',
      'Naan (frozen)',
      'Garlic',
      'Onion'
    ]
  });

  // In a real app, you would fetch this data based on time of day, user preferences, etc.
  useEffect(() => {
    // Fetch recommendation data here
  }, []);

  return recommendation;
};