import React from 'react';
import { Bar, Line, ComposedChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { ExerciseData } from '../../../types/exercise';
import ExerciseTooltip from './ExerciseTooltip';

interface ExerciseChartProps {
  data: ExerciseData;
}

const ExerciseChart: React.FC<ExerciseChartProps> = ({ data }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Weekly Exercise Progress</h2>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data.weeklyData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E5E5" />
            <XAxis 
              dataKey="day"
              tick={{ fill: '#6B7280' }}
              axisLine={{ stroke: '#E5E5E5' }}
            />
            <YAxis
              domain={[0, 60]}
              ticks={[0, 15, 30, 45, 60]}
              tick={{ fill: '#6B7280' }}
              axisLine={{ stroke: '#E5E5E5' }}
              label={{ 
                value: 'Minutes',
                angle: -90,
                position: 'insideLeft',
                style: { fill: '#6B7280' }
              }}
            />
            <Tooltip content={<ExerciseTooltip />} />
            <Legend />
            <Bar
              dataKey="minutes"
              name="Actual Exercise"
              fill="#007BFF"
              radius={[4, 4, 0, 0]}
              barSize={30}
            />
            <Line
              dataKey="target"
              name="Target Goal"
              stroke="#DC3545"
              strokeWidth={2}
              dot={false}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 flex justify-between text-sm text-gray-600">
        <span>Weekly Target: {data.weeklyTarget} minutes</span>
        <span>Total Completed: {data.totalMinutes} minutes</span>
      </div>
    </div>
  );
};

export default ExerciseChart;