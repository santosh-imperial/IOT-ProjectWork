import React from 'react';
import { DailyExerciseProgress } from '../../types/exercise';
import ExerciseProgressBar from './ExerciseProgressBar';
import ExerciseList from './ExerciseList';

interface DailyExerciseTrackerProps {
  data: DailyExerciseProgress;
}

const DailyExerciseTracker: React.FC<DailyExerciseTrackerProps> = ({ data }) => {
  const completion = (data.totalCompleted / data.totalScheduled) * 100;

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-800">Today's Exercises</h2>
        <div className="text-sm text-gray-600">
          {data.totalCompleted}/{data.totalScheduled} Completed
        </div>
      </div>
      
      <div className="mb-8">
        <ExerciseProgressBar percentage={completion} />
      </div>

      <ExerciseList exercises={data.exercises} />
    </div>
  );
};

export default DailyExerciseTracker;