
import { DayData, AppState } from '../types';
import { generateDefaultDays } from '../constants';

const STORAGE_KEY = 'jornada_42_v2';

export const saveState = (state: AppState) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
};

export const loadState = (): AppState => {
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) return { days: generateDefaultDays(), startDate: null };
  try {
    return JSON.parse(data);
  } catch (e) {
    return { days: generateDefaultDays(), startDate: null };
  }
};
