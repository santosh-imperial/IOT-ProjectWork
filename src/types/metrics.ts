import { LucideIcon } from 'lucide-react';

export interface MetricData {
  title: string;
  value: string;
  subtitle: string;
  icon: LucideIcon;
  color: 'blue' | 'red' | 'purple' | 'green';
}

export interface HealthMetric {
  time: string;
  value: number;
}