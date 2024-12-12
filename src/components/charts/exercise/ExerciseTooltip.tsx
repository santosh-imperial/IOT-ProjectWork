import React from 'react';

interface ExerciseTooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
}

const ExerciseTooltip: React.FC<ExerciseTooltipProps> = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;

  const actual = payload[0].value;
  const target = payload[1]?.value;

  return (
    <div className="bg-white p-3 shadow-lg rounded-lg border border-gray-100">
      <p className="font-medium text-gray-800 mb-1">{label}</p>
      <p className="text-sm text-blue-600">
        Actual: {actual} minutes
      </p>
      {target && (
        <p className="text-sm text-red-600">
          Target: {target} minutes
        </p>
      )}
    </div>
  );
};

export default ExerciseTooltip;