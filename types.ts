
export interface DayData {
  id: number;
  week: number;
  weekTitle: string;    // Added from PDF
  dayTitle: string;     // Added from PDF
  verse: string;
  devotional: string;
  spiritualAction: string;
  challenge: string;
  physicalAction: string;
  notes: string;
  notesPrompt: string;  // Added from PDF
  completed: boolean;
}

export interface AppState {
  days: DayData[];
  startDate: string | null;
}

export enum AppTab {
  DASHBOARD = 'dashboard',
  JOURNEY = 'journey'
}
