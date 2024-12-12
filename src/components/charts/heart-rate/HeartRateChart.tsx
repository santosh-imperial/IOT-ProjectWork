import React from 'react';
import { Area, AreaChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Heart } from 'lucide-react';
import { HeartRateData } from '../../../types/heartRate';
import HeartRateTooltip from './HeartRateTooltip';

interface HeartRateChartProps {
  data: HeartRateData;
}

const HeartRateChart: React.FC<HeartRateChartProps> = ({ data }) => {
  return (
    <div className="bg-white rounded-xl shadow p-4 mt-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Heart className="w-5 h-5 text-[#FF6B6B]" />
          <h2 className="text-lg font-semibold text-gray-800">Heart Rate</h2>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-[#FF6B6B]">{data.currentBPM}</span>
          <span className="text-gray-500">BPM</span>
        </div>
      </div>

      <div className="h-[200px] md:h-[160px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data.readings}
            margin={{ top: 10, right: 16, left: 16, bottom: 0 }}
          >
            <defs>
              <linearGradient id="heartRateGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FF6B6B" stopOpacity={0.2} />
                <stop offset="100%" stopColor="#FF6B6B" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="timestamp"
              tickFormatter={(time) => new Date(time).getHours().toString().padStart(2, '0')}
              stroke="#E5E5E5"
              tick={{ fill: '#6B7280', fontSize: 12 }}
              axisLine={{ stroke: '#E5E5E5' }}
              tickLine={{ stroke: '#E5E5E5' }}
            />
            <YAxis
              domain={[40, 200]}
              ticks={[40, 60, 80, 100, 120, 140, 160, 180, 200]}
              stroke="#E5E5E5"
              tick={{ fill: '#6B7280', fontSize: 12 }}
              axisLine={{ stroke: '#E5E5E5' }}
              tickLine={{ stroke: '#E5E5E5' }}
            />
            <Tooltip content={<HeartRateTooltip />} />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#FF6B6B"
              strokeWidth={2}
              fill="url(#heartRateGradient)"
              activeDot={{
                r: 6,
                fill: "#FF6B6B",
                stroke: "#FFFFFF",
                strokeWidth: 2
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-2 text-right text-sm text-gray-500">
        Last updated: {new Date(data.lastUpdated).toLocaleTimeString()}
      </div>
    </div>
  );
};

export default HeartRateChart;