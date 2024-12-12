import React from 'react';

interface ExerciseProgressBarProps {
  percentage: number;
}

const ExerciseProgressBar: React.FC<ExerciseProgressBarProps> = ({ percentage }) => {
  return (
    <div className="relative pt-1">
      <div className="flex items-center justify-between mb-2">
        <div className="text-sm font-medium text-gray-700">
          Overall Progress
        </div>
        <div className="text-sm font-medium text-blue-600">
          {Math.round(percentage)}%
        </div>
      </div>
      <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-100">
        <div
          style={{ width: `${percentage}%` }}
          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600 transition-all duration-500"
        />
      </div>
    </div>
  );
};

export default ExerciseProgressBar;