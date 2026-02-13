
import React, { useState } from 'react';
import { DayData } from '../types';

interface DayModalProps {
  day: DayData;
  onClose: () => void;
  onSave: (updatedDay: DayData) => void;
}

export const DayModal: React.FC<DayModalProps> = ({ day, onClose, onSave }) => {
  const [localNotes, setLocalNotes] = useState(day.notes);
  const [isCompleted, setIsCompleted] = useState(day.completed);

  const handleSave = () => {
    onSave({ ...day, notes: localNotes, completed: isCompleted });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
      <div className="bg-white w-full max-w-3xl max-h-[95vh] rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col">
        {/* Header */}
        <div className="p-6 border-b flex justify-between items-center bg-indigo-600 text-white">
          <div>
            <p className="text-indigo-100 text-[10px] font-black uppercase tracking-[0.2em] mb-1">{day.weekTitle}</p>
            <h2 className="text-2xl font-black tracking-tight uppercase">DIA {day.id}: {day.dayTitle}</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-3 bg-white/10 hover:bg-white/20 rounded-2xl transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Section 1: Verse (Full Width) */}
          <section className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
            <h3 className="text-indigo-600 text-[10px] font-black uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
              <span className="w-4 h-[2px] bg-indigo-600"></span> Versículo
            </h3>
            <p className="text-slate-800 italic text-xl font-medium leading-snug">
              {day.verse}
            </p>
          </section>

          {/* Section 2: Spiritual (2 Columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-amber-50 p-5 rounded-3xl border border-amber-100">
              <h3 className="text-amber-800 text-[10px] font-black uppercase tracking-wider mb-2">Devocional</h3>
              <p className="text-slate-700 text-sm leading-relaxed">{day.devotional}</p>
            </div>
            <div className="bg-indigo-50 p-5 rounded-3xl border border-indigo-100">
              <h3 className="text-indigo-800 text-[10px] font-black uppercase tracking-wider mb-2">Ação Espiritual</h3>
              <p className="text-slate-700 text-sm leading-relaxed">{day.spiritualAction}</p>
            </div>
          </div>

          {/* Section 3: Physical (2 Columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-emerald-50 p-5 rounded-3xl border border-emerald-100">
              <h3 className="text-emerald-800 text-[10px] font-black uppercase tracking-wider mb-2">Desafio</h3>
              <p className="text-slate-700 text-sm leading-relaxed">{day.challenge}</p>
            </div>
            <div className="bg-blue-50 p-5 rounded-3xl border border-blue-100">
              <h3 className="text-blue-800 text-[10px] font-black uppercase tracking-wider mb-2">Ação Física</h3>
              <p className="text-slate-700 text-sm leading-relaxed">{day.physicalAction}</p>
            </div>
          </div>

          {/* Section 4: Notes (Full Width) */}
          <section className="space-y-3">
            <h3 className="text-slate-500 text-[10px] font-black uppercase tracking-wider flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Anotações
            </h3>
            <textarea
              className="w-full h-32 p-5 rounded-3xl border-2 border-slate-100 focus:border-indigo-300 focus:ring-0 focus:outline-none transition-all text-slate-700 placeholder-slate-400 bg-slate-50"
              placeholder={day.notesPrompt}
              value={localNotes}
              onChange={(e) => setLocalNotes(e.target.value)}
            />
          </section>
        </div>

        {/* Footer */}
        <div className="p-6 border-t bg-slate-50 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <label 
            className="flex items-center gap-3 cursor-pointer select-none"
            onClick={() => setIsCompleted(!isCompleted)}
          >
            <div className={`w-7 h-7 rounded-xl border-2 flex items-center justify-center transition-all ${isCompleted ? 'bg-green-500 border-green-500 shadow-lg shadow-green-100' : 'bg-white border-slate-300'}`}>
              {isCompleted && (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </div>
            <span className={`text-sm font-bold ${isCompleted ? 'text-green-700' : 'text-slate-500'}`}>
              Meta concluída com sucesso!
            </span>
          </label>
          <button 
            onClick={handleSave}
            className="w-full sm:w-auto px-10 py-4 bg-indigo-600 text-white font-black rounded-2xl shadow-xl shadow-indigo-100 hover:bg-indigo-700 active:scale-95 transition-all text-sm uppercase tracking-widest"
          >
            Salvar Progresso
          </button>
        </div>
      </div>
    </div>
  );
};
