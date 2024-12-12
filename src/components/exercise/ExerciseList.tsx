import React from 'react';
import { ExerciseSchedule } from '../../types/exercise';
import ExerciseItem from './ExerciseItem';

interface ExerciseListProps {
  exercises: ExerciseSchedule[];
}

const ExerciseList: React.FC<ExerciseListProps> = ({ exercises }) => {
  return (
    <div className="space-y-4">
      {exercises.map((exercise) => (
        <ExerciseItem key={exercise.id} exercise={exercise} />
      ))}
    </div>
  );
};

export default ExerciseList;