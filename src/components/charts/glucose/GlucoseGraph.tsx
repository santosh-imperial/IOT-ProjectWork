import React from 'react';
import { Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { CGMData } from '../../../types/cgm';
import GlucoseTooltip from './GlucoseTooltip';
import MealMarkers from './MealMarkers';
import TargetRange from './TargetRange';
import GlucoseLegend from './GlucoseLegend';

interface GlucoseGraphProps {
  data: CGMData;
}

const GlucoseGraph: React.FC<GlucoseGraphProps> = ({ data }) => {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-700">Glucose Trends</h2>
        <GlucoseLegend />
      </div>
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
              label={{ value: 'mg/dL', angle: -90, position: 'insideLeft' }}
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

export default GlucoseGraph;