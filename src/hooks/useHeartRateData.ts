import { useState, useEffect } from 'react';
import { HeartRateData } from '../types/heartRate';

export const useHeartRateData = () => {
  const [data, setData] = useState<HeartRateData>({
    readings: [
      { timestamp: '2024-01-11T00:00:00', value: 62 },
      { timestamp: '2024-01-11T03:00:00', value: 58 },
      { timestamp: '2024-01-11T06:00:00', value: 65 },
      { timestamp: '2024-01-11T09:00:00', value: 85 },
      { timestamp: '2024-01-11T12:00:00', value: 95 },
      { timestamp: '2024-01-11T15:00:00', value: 78 },
      { timestamp: '2024-01-11T18:00:00', value: 72 },
      { timestamp: '2024-01-11T21:00:00', value: 63 },
      { timestamp: '2024-01-11T23:59:59', value: 60 }
    ],
    currentBPM: 63,
    lastUpdated: new Date().toISOString()
  });

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      setData(prev => ({
        ...prev,
        currentBPM: Math.floor(Math.random() * (75 - 60) + 60),
        lastUpdated: new Date().toISOString()
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return data;
};