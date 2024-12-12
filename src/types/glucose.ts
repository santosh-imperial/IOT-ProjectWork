export interface GlucoseRange {
  label: string;
  range: string;
  percentage: number;
  time: string;
  color: string;
}

export interface TimeInRangeData {
  ranges: GlucoseRange[];
  totalTime: string;
}