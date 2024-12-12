import React from 'react';

interface HeartRateTooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
}

const HeartRateTooltip: React.FC<HeartRateTooltipProps> = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;

  const heartRate = payload[0].value;
  const time = new Date(label).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });

  return (
    <div className="bg-white p-2 shadow-lg rounded-lg border border-gray-100">
      <p className="font-medium text-gray-800">{heartRate} BPM</p>
      <p className="text-sm text-gray-500">{time}</p>
    </div>
  );
};

export default HeartRateTooltip;