import { useState, useEffect } from 'react';
import { DailyExerciseProgress } from '../types/exercise';

export const useDailyExercises = () => {
  const [data, setData] = useState<DailyExerciseProgress>({
    exercises: [
      {
        id: '1',
        name: 'Morning Walk',
        targetType: 'duration',
        targetValue: 30,
        actualValue: 35,
        completed: true,
        timeOfDay: '07:00',
        category: 'cardio'
      },
      {
        id: '2',
        name: 'Push-ups',
        targetType: 'reps',
        targetValue: 20,
        actualValue: 20,
        completed: true,
        timeOfDay: '09:00',
        category: 'strength'
      },
      {
        id: '3',
        name: 'Yoga',
        targetType: 'duration',
        targetValue: 20,
        actualValue: 15,
        completed: true,
        timeOfDay: '12:00',
        category: 'flexibility'
      },
      {
        id: '4',
        name: 'Evening Run',
        targetType: 'duration',
        targetValue: 25,
        timeOfDay: '18:00',
        category: 'cardio',
        completed: false
      }
    ],
    totalCompleted: 3,
    totalScheduled: 4
  });

  return data;
};