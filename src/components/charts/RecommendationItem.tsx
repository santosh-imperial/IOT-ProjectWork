import React from 'react';
import { Recommendation } from '../../types/recommendations';

const RecommendationItem: React.FC<Recommendation> = ({
  icon: Icon,
  color,
  title,
  description
}) => {
  return (
    <div className="flex items-start space-x-3">
      <div className={`flex-shrink-0 w-8 h-8 bg-${color}-100 rounded-full flex items-center justify-center`}>
        <Icon className={`w-5 h-5 text-${color}-600`} />
      </div>
      <div>
        <h3 className="font-medium text-gray-900">{title}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default RecommendationItem;