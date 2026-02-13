
import React, { useState, useEffect, useMemo } from 'react';
import { DayData, AppTab, AppState } from './types';
import { TOTAL_DAYS, Icons, TOTAL_WEEKS, DAYS_PER_WEEK } from './constants';
import { loadState, saveState } from './services/storage';
import { DayCard } from './components/DayCard';
import { DayModal } from './components/DayModal';

const App: React.FC = () => {
  const [state, setState] = useState<AppState>({ days: [], startDate: null });
  const [activeTab, setActiveTab] = useState<AppTab>(AppTab.DASHBOARD);
  const [selectedDay, setSelectedDay] = useState<DayData | null>(null);
  const [selectedWeek, setSelectedWeek] = useState<number | 'all'>('all');

  useEffect(() => {
    setState(loadState());
  }, []);

  const startJourney = () => {
    const newState = { ...state, startDate: new Date().toISOString() };
    setState(newState);
    saveState(newState);
  };

  const daysSinceStart = useMemo(() => {
    if (!state.startDate) return -1;
    // Set both dates to 00:00:00 to calculate full calendar days difference
    const start = new Date(state.startDate);
    start.setHours(0, 0, 0, 0);
    
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    
    const diffTime = now.getTime() - start.getTime();
    return Math.floor(diffTime / (1000 * 60 * 60 * 24));
  }, [state.startDate]);

  // Unlock logic: Modified for testing - All days are now unlocked
  const isDayLocked = (dayId: number) => {
    // Para testes, todos os dias retornam false (desbloqueados)
    return false;
  };

  const progress = useMemo(() => {
    if (state.days.length === 0) return 0;
    const completed = state.days.filter(d => d.completed).length;
    return Math.round((completed / TOTAL_DAYS) * 100);
  }, [state.days]);

  const filteredDays = useMemo(() => {
    if (selectedWeek === 'all') return state.days;
    return state.days.filter(d => d.week === selectedWeek);
  }, [state.days, selectedWeek]);

  const handleUpdateDay = (updatedDay: DayData) => {
    const newDays = state.days.map(d => d.id === updatedDay.id ? updatedDay : d);
    const newState = { ...state, days: newDays };
    setState(newState);
    saveState(newState);
  };

  const toggleDayComplete = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    if (isDayLocked(id)) return;
    const newDays = state.days.map(d => d.id === id ? { ...d, completed: !d.completed } : d);
    const newState = { ...state, days: newDays };
    setState(newState);
    saveState(newState);
  };

  const currentDayId = useMemo(() => {
    const firstIncomplete = state.days.find(d => !d.completed && !isDayLocked(d.id));
    // If all unlocked are completed, point to the latest unlocked one
    if (!firstIncomplete) {
        return Math.min(daysSinceStart + 1, TOTAL_DAYS);
    }
    return firstIncomplete.id;
  }, [state.days, state.startDate, daysSinceStart]);

  if (!state.startDate && activeTab === AppTab.DASHBOARD) {
    return (
      <div className="min-h-screen bg-indigo-600 flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-white rounded-[3rem] p-10 text-center shadow-2xl">
          <div className="w-20 h-20 bg-indigo-100 rounded-3xl flex items-center justify-center text-indigo-600 font-black text-3xl mx-auto mb-6">42</div>
          <h1 className="text-3xl font-black text-slate-800 mb-4 tracking-tight">Modo de Teste Ativo</h1>
          <p className="text-slate-500 mb-10 leading-relaxed">Prepare seu coração para os próximos 42 dias. (Nesta versão de teste, todos os dias estão liberados imediatamente).</p>
          <button 
            onClick={startJourney}
            className="w-full py-5 bg-indigo-600 text-white font-black rounded-2xl shadow-xl shadow-indigo-100 hover:bg-indigo-700 active:scale-95 transition-all uppercase tracking-widest"
          >
            Iniciar Testes
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col pb-24 md:pb-0 md:pt-16">
      {/* Top Header */}
      <header className="hidden md:flex fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b z-40 px-8 py-3 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold">42</div>
          <h1 className="text-xl font-bold text-slate-800 tracking-tight">Jornada 42 (Teste)</h1>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => setActiveTab(AppTab.DASHBOARD)}
            className={`px-5 py-2 rounded-xl text-sm font-black transition-all ${activeTab === AppTab.DASHBOARD ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100' : 'text-slate-500 hover:bg-slate-100'}`}
          >
            INÍCIO
          </button>
          <button 
            onClick={() => setActiveTab(AppTab.JOURNEY)}
            className={`px-5 py-2 rounded-xl text-sm font-black transition-all ${activeTab === AppTab.JOURNEY ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100' : 'text-slate-500 hover:bg-slate-100'}`}
          >
            CALENDÁRIO
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-5xl mx-auto w-full p-4 md:p-10">
        
        {activeTab === AppTab.DASHBOARD && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-700">
            {/* Progress Card */}
            <section className="bg-indigo-600 rounded-[3rem] p-10 text-white shadow-2xl shadow-indigo-200 relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-4xl font-black mb-2 tracking-tight">Modo de Teste</h2>
                <p className="text-indigo-100 mb-10 text-lg opacity-90">Todos os 42 dias foram liberados para sua revisão.</p>
                
                <div className="flex items-end justify-between mb-4">
                  <div>
                    <span className="text-6xl font-black">{progress}%</span>
                    <span className="ml-2 text-indigo-100 font-bold uppercase tracking-wider text-sm">concluído</span>
                  </div>
                  <div className="text-right">
                    <div className="text-indigo-200 text-xs font-black uppercase mb-1">Acesso Livre</div>
                    <div className="text-white font-bold">Tudo Desbloqueado</div>
                  </div>
                </div>
                
                <div className="w-full bg-white/20 h-4 rounded-full overflow-hidden backdrop-blur-sm p-1">
                  <div 
                    className="h-full bg-white rounded-full transition-all duration-1000 shadow-[0_0_15px_rgba(255,255,255,0.5)]" 
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </section>

            {/* Current Focus */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <section>
                <h3 className="text-slate-800 font-black text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full"></span> Foco Sugerido
                </h3>
                <div 
                  onClick={() => !isDayLocked(currentDayId) && setSelectedDay(state.days[currentDayId - 1])}
                  className="bg-white p-6 rounded-[2.5rem] border border-slate-200 shadow-sm cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="bg-amber-100 text-amber-700 text-[10px] font-black px-3 py-1 rounded-lg uppercase">Dia {currentDayId}</span>
                  </div>
                  <h4 className="text-xl font-black text-slate-800 mb-3 leading-tight uppercase">
                    {state.days[currentDayId - 1]?.dayTitle}
                  </h4>
                  <p className="text-slate-500 text-sm line-clamp-2 leading-relaxed">
                    {state.days[currentDayId - 1]?.devotional}
                  </p>
                </div>
              </section>

              <section>
                <h3 className="text-slate-800 font-black text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span> Estatísticas
                </h3>
                <div className="bg-white p-6 rounded-[2.5rem] border border-slate-200 shadow-sm grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-slate-50 rounded-2xl">
                    <div className="text-2xl font-black text-indigo-600">{state.days.filter(d => d.completed).length}</div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Concluídos</div>
                  </div>
                   <div className="text-center p-4 bg-slate-50 rounded-2xl">
                    <div className="text-2xl font-black text-slate-800">{TOTAL_DAYS - state.days.filter(d => d.completed).length}</div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Restantes</div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        )}

        {activeTab === AppTab.JOURNEY && (
          <div className="animate-in slide-in-from-bottom-4 duration-500">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-10">
              <h2 className="text-4xl font-black text-slate-800 tracking-tighter">O Caminho (Liberado)</h2>
              
              <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 w-full sm:w-auto no-scrollbar">
                <button 
                  onClick={() => setSelectedWeek('all')}
                  className={`px-5 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${selectedWeek === 'all' ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-100' : 'bg-white text-slate-400 border border-slate-200'}`}
                >
                  Tudo
                </button>
                {[1,2,3,4,5,6].map(w => (
                  <button 
                    key={w}
                    onClick={() => setSelectedWeek(w)}
                    className={`px-5 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${selectedWeek === w ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-100' : 'bg-white text-slate-400 border border-slate-200'}`}
                  >
                    Semana {w}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {filteredDays.map(day => (
                <DayCard 
                  key={day.id} 
                  day={day}
                  isLocked={isDayLocked(day.id)}
                  onClick={() => setSelectedDay(day)}
                  onToggleComplete={(e) => toggleDayComplete(e, day.id)}
                />
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Bottom Tab Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-100 px-6 py-4 flex justify-around items-center z-40 shadow-[0_-10px_20px_rgba(0,0,0,0.02)]">
        <button 
          onClick={() => setActiveTab(AppTab.DASHBOARD)}
          className={`flex flex-col items-center gap-1.5 transition-all ${activeTab === AppTab.DASHBOARD ? 'text-indigo-600' : 'text-slate-400'}`}
        >
          <Icons.Home />
          <span className="text-[9px] font-black uppercase tracking-[0.15em]">Home</span>
        </button>
        
        <div className="relative -top-8">
          <button 
            onClick={() => setSelectedDay(state.days[currentDayId - 1])}
            className={`w-16 h-16 rounded-[2rem] flex items-center justify-center text-white shadow-2xl transition-all active:scale-90 bg-indigo-600 shadow-indigo-200`}
          >
             <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        <button 
          onClick={() => setActiveTab(AppTab.JOURNEY)}
          className={`flex flex-col items-center gap-1.5 transition-all ${activeTab === AppTab.JOURNEY ? 'text-indigo-600' : 'text-slate-400'}`}
        >
          <Icons.Calendar />
          <span className="text-[9px] font-black uppercase tracking-[0.15em]">Diário</span>
        </button>
      </nav>

      {/* Modal View */}
      {selectedDay && (
        <DayModal 
          day={selectedDay} 
          onClose={() => setSelectedDay(null)} 
          onSave={handleUpdateDay}
        />
      )}
    </div>
  );
};

export default App;
