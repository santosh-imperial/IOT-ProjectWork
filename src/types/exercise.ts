// Add to existing exercise.ts
export interface ExerciseSchedule {
  id: string;
  name: string;
  targetType: 'reps' | 'duration' | 'weight';
  targetValue: number;
  actualValue?: number;
  completed: boolean;
  timeOfDay: string;
  category: 'strength' | 'cardio' | 'flexibility';
}

export interface DailyExerciseProgress {
  exercises: ExerciseSchedule[];
  totalCompleted: number;
  totalScheduled: number;
}