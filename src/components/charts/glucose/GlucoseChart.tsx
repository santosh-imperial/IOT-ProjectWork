import React from 'react';
import { Line } from 'recharts';
import { LineChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { CGMData } from '../../../types/cgm';
import GlucoseTooltip from './GlucoseTooltip';
import MealMarkers from './MealMarkers';
import TargetRange from './TargetRange';

interface GlucoseChartProps {
  data: CGMData;
}

const GlucoseChart: React.FC<GlucoseChartProps> = ({ data }) => {
  // Add error boundary
  if (!data?.readings?.length) {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Glucose Trends</h2>
        <div className="h-80 flex items-center justify-center">
          <p className="text-gray-500">No glucose data available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Glucose Trends</h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data.readings} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="timestamp"
              tickFormatter={(time) => new Date(time).toLocaleTimeString([], { 
                hour: '2-digit', 
                minute: '2-digit', 
                hour12: false 
              })}
            />
            <YAxis 
              domain={[40, 250]}
              ticks={[40, 70, 100, 130, 160, 190, 220, 250]}
            />
            <Tooltip content={<GlucoseTooltip meals={data.meals} />} />
            <TargetRange min={data.targetRange.min} max={data.targetRange.max} />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#3B82F6"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 8 }}
            />
            <MealMarkers meals={data.meals} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default GlucoseChart;