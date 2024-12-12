import { useState } from 'react';
import { GlucoseRange } from '../types/glucose';

export const useTimeInRange = () => {
  const [ranges] = useState<GlucoseRange[]>([
    {
      label: 'Very High',
      range: '>250 mg/dL',
      percentage: 20,
      time: '4h 48min',
      color: 'bg-amber-400'
    },
    {
      label: 'High',
      range: '181-250 mg/dL',
      percentage: 23,
      time: '5h 31min',
      color: 'bg-yellow-300'
    },
    {
      label: 'Target Range',
      range: '70-180 mg/dL',
      percentage: 47,
      time: '11h 17min',
      color: 'bg-green-500'
    },
    {
      label: 'Low',
      range: '54-69 mg/dL',
      percentage: 4,
      time: '58min',
      color: 'bg-red-400'
    },
    {
      label: 'Very Low',
      range: '<54 mg/dL',
      percentage: 6,
      time: '1h 26min',
      color: 'bg-red-600'
    }
  ]);

  return ranges;
};