import React from 'react';
import { LucideIcon } from 'lucide-react';
import { MetricData } from '../../types/metrics';

const MetricCard: React.FC<MetricData> = ({ 
  title, 
  value, 
  subtitle, 
  icon: Icon, 
  color 
}) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-700">{title}</h2>
        <div className={`p-2 bg-${color}-100 rounded-full`}>
          <Icon className={`w-6 h-6 text-${color}-600`} />
        </div>
      </div>
      <div className="text-3xl font-bold text-gray-900 mb-2">{value}</div>
      <div className="text-sm text-gray-500">{subtitle}</div>
    </div>
  );
};

export default MetricCard;