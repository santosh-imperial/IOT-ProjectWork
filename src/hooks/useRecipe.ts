import { useState, useEffect } from 'react';
import { Recipe } from '../types/recipe';

export const useRecipe = () => {
  const [recipe, setRecipe] = useState<Recipe>({
    ingredients: [
      {
        name: 'Boneless chicken thigh',
        imageUrl: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=300&h=300&fit=crop'
      },
      { name: 'Tikka masala curry' },
      { name: 'Naan frozen' },
      { name: 'Garlic' },
      { name: 'Onion' }
    ],
    steps: [
      { step: 1, instruction: 'Place the chicken in the air fryer for 20 mins' },
      { step: 2, instruction: 'Put the naan in the oven' },
      { step: 3, instruction: 'Once you the chicken is ready, add it to the chicken tikka sauce' },
      { step: 4, instruction: 'Garnish with onion' },
      { step: 5, instruction: 'Once naan is ready, garnish with garlic' }
    ]
  });

  return recipe;
};