import React from 'react';
import { ShoppingItem } from '../../types/recipe';

interface WeeklyShoppingListProps {
  items: ShoppingItem[];
  onToggleItem: (id: string) => void;
}

const WeeklyShoppingList: React.FC<WeeklyShoppingListProps> = ({ items, onToggleItem }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Shopping List for the Week</h3>
      <div className="space-y-2">
        {items.map((item) => (
          <div key={item.id} className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => onToggleItem(item.id)}
              className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
            />
            <span className={`text-gray-700 ${item.checked ? 'line-through' : ''}`}>
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyShoppingList;