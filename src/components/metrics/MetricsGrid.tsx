import React from 'react';
import MetricCard from './MetricCard';
import { Activity, Heart, Moon, Utensils } from 'lucide-react';
import { MetricData } from '../../types/metrics';

const metrics: MetricData[] = [
  {
    title: 'Blood Glucose',
    value: '95 mg/dL',
    subtitle: 'Last reading 5 mins ago',
    icon: Activity,
    color: 'blue'
  },
  {
    title: 'Heart Rate',
    value: '72 BPM',
    subtitle: 'Resting heart rate',
    icon: Heart,
    color: 'red'
  },
  {
    title: 'Sleep',
    value: '7h 23m',
    subtitle: "Last night's sleep",
    icon: Moon,
    color: 'purple'
  },
  {
    title: 'Meals',
    value: '1,850 cal',
    subtitle: 'Daily intake',
    icon: Utensils,
    color: 'green'
  }
];

const MetricsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {metrics.map((metric) => (
        <MetricCard key={metric.title} {...metric} />
      ))}
    </div>
  );
};

export default MetricsGrid;