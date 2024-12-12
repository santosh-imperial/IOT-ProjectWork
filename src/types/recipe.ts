export interface Ingredient {
  name: string;
  imageUrl?: string;
}

export interface RecipeStep {
  step: number;
  instruction: string;
}

export interface Recipe {
  ingredients: Ingredient[];
  steps: RecipeStep[];
}

export interface ShoppingItem {
  id: string;
  name: string;
  category: string;
  checked: boolean;
}