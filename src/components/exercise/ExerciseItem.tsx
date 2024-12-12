import React from 'react';
import { CheckCircle, XCircle, Clock, Dumbbell, Heart, Activity } from 'lucide-react';
import { ExerciseSchedule } from '../../types/exercise';

interface ExerciseItemProps {
  exercise: ExerciseSchedule;
}

const ExerciseItem: React.FC<ExerciseItemProps> = ({ exercise }) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'strength':
        return <Dumbbell className="w-5 h-5" />;
      case 'cardio':
        return <Heart className="w-5 h-5" />;
      case 'flexibility':
        return <Activity className="w-5 h-5" />; // Changed from Stretch to Activity
      default:
        return null;
    }
  };

  const getStatusColor = () => {
    if (!exercise.completed) return 'bg-gray-100';
    return exercise.actualValue >= exercise.targetValue ? 'bg-green-100' : 'bg-yellow-100';
  };

  const formatValue = (value: number) => {
    switch (exercise.targetType) {
      case 'duration':
        return `${value} min`;
      case 'reps':
        return `${value} reps`;
      case 'weight':
        return `${value} kg`;
      default:
        return value;
    }
  };

  return (
    <div className={`rounded-lg p-4 ${getStatusColor()}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className={`text-${exercise.completed ? 'blue' : 'gray'}-600`}>
            {getCategoryIcon(exercise.category)}
          </div>
          <div>
            <h3 className="font-medium text-gray-900">{exercise.name}</h3>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <Clock className="w-4 h-4" />
              <span>{exercise.timeOfDay}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="text-right">
            <div className="text-sm font-medium text-gray-900">
              Target: {formatValue(exercise.targetValue)}
            </div>
            {exercise.actualValue && (
              <div className="text-sm text-gray-500">
                Actual: {formatValue(exercise.actualValue)}
              </div>
            )}
          </div>

          {exercise.completed ? (
            <CheckCircle className="w-6 h-6 text-green-500" />
          ) : (
            <XCircle className="w-6 h-6 text-gray-400" />
          )}
        </div>
      </div>

      {exercise.completed && exercise.actualValue && (
        <div className="mt-2">
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className={`h-full ${exercise.actualValue >= exercise.targetValue ? 'bg-green-500' : 'bg-yellow-500'}`}
              style={{ width: `${Math.min((exercise.actualValue / exercise.targetValue) * 100, 100)}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ExerciseItem;