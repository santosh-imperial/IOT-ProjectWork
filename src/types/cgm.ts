export interface GlucoseReading {
  timestamp: string;
  value: number;
}

export interface MealEntry {
  id: string;
  timestamp: string;
  type: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  name: string;
  nutrition?: {
    carbs: number;
    protein: number;
    fat: number;
    calories: number;
  };
}

export interface CGMData {
  readings: GlucoseReading[];
  meals: MealEntry[];
  targetRange: {
    min: number;
    max: number;
  };
}