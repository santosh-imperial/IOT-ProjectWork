import { LucideIcon } from 'lucide-react';

export interface Recommendation {
  icon: LucideIcon;
  color: string;
  title: string;
  description: string;
}

export interface MealRecommendation {
  mealType: string;
  mainDish: string;
  sideDish: string;
  context: string;
  shoppingList: string[];
}