import { useState, useEffect } from 'react';
import { ExerciseData } from '../types/exercise';

export const useExerciseData = () => {
  const [data, setData] = useState<ExerciseData>({
    weeklyData: [
      { day: 'Mon', minutes: 45, target: 30 },
      { day: 'Tue', minutes: 20, target: 30 },
      { day: 'Wed', minutes: 35, target: 30 },
      { day: 'Thu', minutes: 30, target: 30 },
      { day: 'Fri', minutes: 25, target: 30 },
      { day: 'Sat', minutes: 40, target: 30 },
      { day: 'Sun', minutes: 15, target: 30 }
    ],
    weeklyTarget: 210, // 30 minutes * 7 days
    totalMinutes: 210
  });

  useEffect(() => {
    // In a real app, fetch data here
  }, []);

  return data;
};