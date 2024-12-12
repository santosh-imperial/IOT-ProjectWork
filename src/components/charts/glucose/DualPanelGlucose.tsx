import React from 'react';
import GlucoseGraph from './GlucoseGraph';
import MealLog from './MealLog';
import { CGMData } from '../../../types/cgm';

interface DualPanelGlucoseProps {
  data: CGMData;
}

const DualPanelGlucose: React.FC<DualPanelGlucoseProps> = ({ data }) => {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="border-b border-gray-200">
        <GlucoseGraph data={data} />
      </div>
      <MealLog meals={data.meals} />
    </div>
  );
};

export default DualPanelGlucose;