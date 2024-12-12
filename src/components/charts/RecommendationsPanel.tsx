import React from 'react';
import { Activity, Moon } from 'lucide-react';
import RecommendationItem from './RecommendationItem';
import { Recommendation } from '../../types/recommendations';

const recommendations: Recommendation[] = [
  {
    icon: Activity,
    color: 'blue',
    title: 'Optimal Meal Timing',
    description: 'Consider having dinner before 7 PM to maintain steadier glucose levels and improve sleep quality.'
  },
  {
    icon: Moon,
    color: 'purple',
    title: 'Sleep Schedule',
    description: 'Your sleep pattern shows improvement. Maintain your current bedtime routine for optimal rest.'
  }
];

const RecommendationsPanel = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Recommendations</h2>
      <div className="space-y-4">
        {recommendations.map((recommendation) => (
          <RecommendationItem 
            key={recommendation.title} 
            {...recommendation} 
          />
        ))}
      </div>
    </div>
  );
};

export default RecommendationsPanel;