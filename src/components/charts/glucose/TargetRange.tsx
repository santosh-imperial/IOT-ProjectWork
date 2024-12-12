import React from 'react';
import { Rectangle } from 'recharts';

interface TargetRangeProps {
  min: number;
  max: number;
}

const TargetRange: React.FC<TargetRangeProps> = ({ min, max }) => {
  return (
    <Rectangle
      y={min}
      height={max - min}
      fill="#4ADE8022"
      fillOpacity={0.3}
    />
  );
};

export default TargetRange;