import { useState, useEffect } from 'react';
import { CGMData } from '../types/cgm';

export const useGlucoseData = () => {
  const [data, setData] = useState<CGMData>({
    readings: [
      { timestamp: '2024-01-11T00:00:00', value: 120 },
      { timestamp: '2024-01-11T03:00:00', value: 110 },
      { timestamp: '2024-01-11T06:00:00', value: 95 },
      { timestamp: '2024-01-11T09:00:00', value: 130 },
      { timestamp: '2024-01-11T12:00:00', value: 140 },
      { timestamp: '2024-01-11T15:00:00', value: 125 },
      { timestamp: '2024-01-11T18:00:00', value: 110 },
      { timestamp: '2024-01-11T21:00:00', value: 105 },
      { timestamp: '2024-01-11T23:59:59', value: 115 }
    ],
    meals: [
      {
        id: '1',
        timestamp: '2024-01-11T07:00:00',
        type: 'breakfast',
        name: 'Oatmeal with berries',
        nutrition: {
          carbs: 45,
          protein: 8,
          fat: 5,
          calories: 280
        }
      },
      {
        id: '2',
        timestamp: '2024-01-11T12:00:00',
        type: 'lunch',
        name: 'Chicken salad',
        nutrition: {
          carbs: 20,
          protein: 35,
          fat: 15,
          calories: 420
        }
      },
      {
        id: '3',
        timestamp: '2024-01-11T18:00:00',
        type: 'dinner',
        name: 'Salmon with vegetables',
        nutrition: {
          carbs: 25,
          protein: 40,
          fat: 20,
          calories: 460
        }
      }
    ],
    targetRange: {
      min: 70,
      max: 180
    }
  });

  // Add loading state management
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        // In a real app, you would fetch data here
        setIsLoading(false);
      } catch (err) {
        setError(err as Error);
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  if (error) {
    console.error('Error loading glucose data:', error);
    return null;
  }

  if (isLoading) {
    return null;
  }

  return data;
};