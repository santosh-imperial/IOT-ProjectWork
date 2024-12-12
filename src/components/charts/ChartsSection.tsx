import React from 'react';
import DualPanelGlucose from './glucose/DualPanelGlucose';
import TimeInRangeChart from './TimeInRangeChart';
import RecommendationsPanel from './RecommendationsPanel';
import HeartRateChart from './heart-rate/HeartRateChart';
import ExerciseChart from './exercise/ExerciseChart';
import DailyExerciseTracker from '../exercise/DailyExerciseTracker';
import { useTimeInRange } from '../../hooks/useTimeInRange';
import { useGlucoseData } from '../../hooks/useGlucoseData';
import { useHeartRateData } from '../../hooks/useHeartRateData';
import { useExerciseData } from '../../hooks/useExerciseData';
import { useDailyExercises } from '../../hooks/useDailyExercises';

const ChartsSection = () => {
  const timeInRangeData = useTimeInRange();
  const glucoseData = useGlucoseData();
  const heartRateData = useHeartRateData();
  const exerciseData = useExerciseData();
  const dailyExercises = useDailyExercises();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="space-y-6">
        {glucoseData ? (
          <DualPanelGlucose data={glucoseData} />
        ) : (
          <div className="bg-white rounded-lg shadow p-6 h-80 flex items-center justify-center">
            <p className="text-gray-500">Loading glucose data...</p>
          </div>
        )}
        <TimeInRangeChart ranges={timeInRangeData} />
        <HeartRateChart data={heartRateData} />
        <ExerciseChart data={exerciseData} />
        <DailyExerciseTracker data={dailyExercises} />
      </div>
      <RecommendationsPanel />
    </div>
  );
};

export default ChartsSection;