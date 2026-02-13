
import React from 'react';
import { DayData } from '../types';
import { Icons } from '../constants';

interface DayCardProps {
  day: DayData;
  isLocked: boolean;
  onClick: () => void;
  onToggleComplete: (e: React.MouseEvent) => void;
}

export const DayCard: React.FC<DayCardProps> = ({ day, isLocked, onClick, onToggleComplete }) => {
  if (isLocked) {
    return (
      <div className="relative p-4 rounded-2xl bg-slate-100 border-2 border-slate-200 opacity-60 flex flex-col items-center justify-center gap-2 h-36">
        <Icons.Lock />
        <span className="text-[10px] font-black text-slate-400">DIA {day.id} BLOQUEADO</span>
      </div>
    );
  }

  return (
    <div 
      onClick={onClick}
      className={`relative group cursor-pointer transition-all duration-300 p-4 rounded-2xl shadow-sm hover:shadow-md border-2 h-36 flex flex-col ${
        day.completed 
        ? 'bg-indigo-50 border-indigo-200' 
        : 'bg-white border-transparent hover:border-slate-200 shadow-slate-100'
      }`}
    >
      <div className="flex justify-between items-start mb-2">
        <span className={`text-[10px] font-black px-2 py-1 rounded-md uppercase tracking-tighter ${
          day.completed ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-600'
        }`}>
          DIA {day.id}
        </span>
        <button 
          onClick={onToggleComplete}
          className={`p-1 rounded-full transition-colors ${
            day.completed ? 'text-indigo-600' : 'text-slate-300 hover:text-indigo-400'
          }`}
        >
          {day.completed ? <Icons.CheckCircle /> : <div className="w-5 h-5 border-2 border-dashed border-slate-300 rounded-full" />}
        </button>
      </div>
      
      <p className="text-[11px] font-black text-slate-800 line-clamp-2 leading-tight uppercase mb-1">
        {day.dayTitle}
      </p>
      
      <p className="text-[10px] text-slate-400 line-clamp-2 leading-tight">
        {day.verse.split('-')[1]?.trim() || day.verse.split(' ').slice(-2).join(' ')}
      </p>
      
      <div className="mt-auto flex gap-1">
        {day.notes && <div className="w-1 h-1 rounded-full bg-indigo-400"></div>}
        {day.completed && <div className="w-1 h-1 rounded-full bg-green-400"></div>}
      </div>
    </div>
  );
};
