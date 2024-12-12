import React from 'react';
import { GlucoseRange } from '../../types/glucose';

interface TimeInRangeChartProps {
  ranges: GlucoseRange[];
}

const TimeInRangeChart: React.FC<TimeInRangeChartProps> = ({ ranges }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Time in Ranges</h2>
      <div className="space-y-4">
        {ranges.map((range, index) => (
          <div key={index} className="space-y-1">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-2">
                <div className={`w-3 h-3 ${range.color} rounded-sm`}></div>
                <span className="font-medium">{range.label}</span>
                <span className="text-gray-500">({range.range})</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-medium">{range.percentage}%</span>
                <span className="text-gray-500">({range.time})</span>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className={`h-2.5 rounded-full ${range.color}`}
                style={{ width: `${range.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeInRangeChart;