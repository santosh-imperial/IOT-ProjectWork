export interface HeartRateReading {
  timestamp: string;
  value: number;
}

export interface HeartRateData {
  readings: HeartRateReading[];
  currentBPM: number;
  lastUpdated: string;
}