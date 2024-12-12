import { useState } from 'react';
import { ShoppingItem } from '../types/recipe';

export const useShoppingList = () => {
  const [items, setItems] = useState<ShoppingItem[]>([
    { id: '1', name: 'Milk', category: 'Dairy', checked: false },
    { id: '2', name: 'Bread', category: 'Bakery', checked: false },
    { id: '3', name: 'Eggs', category: 'Dairy', checked: false },
    { id: '4', name: 'Cheese', category: 'Dairy', checked: false }
  ]);

  const toggleItem = (id: string) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  };

  return { items, toggleItem };
};