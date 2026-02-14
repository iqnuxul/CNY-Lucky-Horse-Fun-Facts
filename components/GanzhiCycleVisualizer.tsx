import React, { useState } from 'react';
import { GANZHI_STEMS, GANZHI_BRANCHES } from '../constants';

const HISTORICAL_EVENTS: Record<number, { event: string; desc: string }> = {
  1894: { event: "Jiawu War", desc: "First Sino-Japanese War (Year of the Wood Horse)" },
  1898: { event: "Wuxu Reform", desc: "Hundred Days' Reform (Year of the Earth Dog)" },
  1911: { event: "Xinhai Revolution", desc: "Overthrew the Qing Dynasty (Year of the Metal Pig)" },
  2026: { event: "Year of the Fire Horse", desc: "The coming year (Bing-Wu)" }
};

export const GanzhiCycleVisualizer: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<number>(2026);

  const getGanzhi = (year: number) => {
    // 4 AD is start of cycle (Jia-Zi)
    const stemIndex = (year - 4) % 10;
    const branchIndex = (year - 4) % 12;
    
    // Fix negative modulo for BCE years if needed (though slider is restricted)
    const sIdx = stemIndex >= 0 ? stemIndex : stemIndex + 10;
    const bIdx = branchIndex >= 0 ? branchIndex : branchIndex + 12;

    return { 
      stem: GANZHI_STEMS[sIdx], 
      branch: GANZHI_BRANCHES[bIdx],
      sIdx, 
      bIdx 
    };
  };

  const { stem, branch, sIdx, bIdx } = getGanzhi(selectedYear);
  const historicalInfo = HISTORICAL_EVENTS[selectedYear];

  return (
    <div className="space-y-8">
      
      {/* 1. VISUALIZER */}
      <div className="bg-gray-900 text-white rounded-2xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
         <div className="absolute top-0 right-0 opacity-10 font-serif font-bold text-9xl select-none pointer-events-none -mr-10 -mt-10">
           {stem.char}{branch.char}
         </div>

         <div className="relative z-10">
           <h3 className="text-cny-gold font-bold uppercase tracking-widest text-sm mb-6 border-b border-gray-700 pb-2">
             Interactive Cycle Visualizer
           </h3>

           {/* Year Control */}
           <div className="mb-10">
              <div className="flex justify-between items-end mb-4">
                <label className="text-gray-400 text-sm">Select Year</label>
                <div className="text-4xl font-serif font-bold text-white">{selectedYear}</div>
              </div>
              <input 
                type="range"
                min="1890"
                max="2050"
                value={selectedYear}
                onChange={(e) => setSelectedYear(parseInt(e.target.value))}
                className="w-full accent-cny-red h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-2 font-mono">
                 <span>1890</span>
                 <span>2050</span>
              </div>
           </div>

           {/* The Gears UI - Always Row */}
           <div className="flex flex-row items-center justify-center gap-4 md:gap-12">
              
              {/* Stems Gear */}
              <div className="text-center relative">
                 <div className="text-xs text-gray-400 uppercase mb-2 font-bold tracking-wider">Stem</div>
                 <div className="w-28 h-40 bg-gray-800 rounded-xl border border-gray-600 flex flex-col items-center justify-center relative overflow-hidden shadow-inner">
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-transparent to-gray-900 z-10 pointer-events-none"></div>
                    {/* Simplified Slot Effect */}
                    <div className="space-y-4 opacity-30 blur-[1px] scale-75 absolute -top-8">
                       {GANZHI_STEMS[(sIdx - 1 + 10) % 10].char}
                    </div>
                    
                    <div className="text-5xl font-bold text-cny-gold z-20 font-serif mb-1">
                       {stem.char}
                    </div>
                    {/* Pinyin */}
                    <div className="text-lg text-white font-bold z-20 leading-none">{stem.name}</div>
                    {/* Element */}
                    <div className="text-[10px] text-cny-gold uppercase tracking-widest z-20 mt-2 font-bold bg-black/40 px-2 py-0.5 rounded border border-cny-gold/20">
                      {stem.element}
                    </div>

                    <div className="space-y-4 opacity-30 blur-[1px] scale-75 absolute -bottom-8">
                       {GANZHI_STEMS[(sIdx + 1) % 10].char}
                    </div>
                 </div>
              </div>

              <div className="text-2xl text-gray-600 font-light">+</div>

              {/* Branches Gear */}
              <div className="text-center relative">
                 <div className="text-xs text-gray-400 uppercase mb-2 font-bold tracking-wider">Branch</div>
                 <div className="w-28 h-40 bg-cny-darkRed rounded-xl border border-red-900 flex flex-col items-center justify-center relative overflow-hidden shadow-inner">
                    <div className="absolute inset-0 bg-gradient-to-b from-red-950 via-transparent to-red-950 z-10 pointer-events-none"></div>
                    <div className="space-y-4 opacity-30 text-white blur-[1px] scale-75 absolute -top-8">
                       {GANZHI_BRANCHES[(bIdx - 1 + 12) % 12].char}
                    </div>
                    
                    <div className="text-5xl font-bold text-white z-20 font-serif mb-1">
                       {branch.char}
                    </div>
                    {/* Pinyin */}
                    <div className="text-lg text-white font-bold z-20 leading-none">
                        {(branch as any).pinyin}
                    </div>
                    {/* Animal */}
                    <div className="text-[10px] text-cny-gold uppercase tracking-widest z-20 mt-2 font-bold bg-black/20 px-2 py-0.5 rounded border border-white/10">
                        {branch.name}
                    </div>

                    <div className="space-y-4 opacity-30 text-white blur-[1px] scale-75 absolute -bottom-8">
                       {GANZHI_BRANCHES[(bIdx + 1) % 12].char}
                    </div>
                 </div>
              </div>
           </div>

           {/* Result & Historical Context */}
           <div className="mt-10 text-center">
              <div className="inline-block bg-white/5 backdrop-blur-md rounded-lg p-4 border border-white/10">
                 <div className="text-sm text-gray-400 uppercase tracking-widest mb-1">Combined Era Name</div>
                 <div className="text-3xl font-bold text-white font-serif">
                    {stem.element} {branch.name} Year ({stem.char}{branch.char}年)
                 </div>
              </div>
              
              {historicalInfo && (
                <div className="mt-4 animate-flip-in">
                   <span className="bg-cny-gold text-cny-darkRed text-xs font-bold px-2 py-1 rounded mr-2">HISTORICAL EVENT</span>
                   <span className="text-gray-300 text-sm">
                      <strong className="text-white">{historicalInfo.event}</strong> - {historicalInfo.desc}
                   </span>
                </div>
              )}
           </div>

         </div>
      </div>

      {/* 2. IMPORTANT CONCEPTS GRID */}
      <div className="grid md:grid-cols-3 gap-6">
         {/* Concept 1: Structure */}
         <div className="bg-white p-6 rounded-xl border-l-4 border-cny-gold shadow-sm hover:shadow-md transition-shadow">
            <div className="text-cny-gold mb-3">
               <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
            </div>
            <h4 className="font-bold text-gray-800 text-lg mb-2">The 60-Year Cycle</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
               The 10 Stems and 12 Branches combine in sequence (e.g., Jia-Zi, Yi-Chou). 
               Since the lowest common multiple of 10 and 12 is 60, the cycle repeats exactly every 60 years.
               This is called a "Jiazi" (甲子).
            </p>
         </div>

         {/* Concept 2: Recording History */}
         <div className="bg-white p-6 rounded-xl border-l-4 border-cny-darkRed shadow-sm hover:shadow-md transition-shadow">
            <div className="text-cny-darkRed mb-3">
               <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
            </div>
            <h4 className="font-bold text-gray-800 text-lg mb-2">Recording History</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
               Chinese history uses these names. 
               The <strong>Xinhai Revolution</strong> (1911) is named after the "Xin-Hai" year. 
               The <strong>Jiawu War</strong> (1894) is named after the "Jia-Wu" year.
            </p>
         </div>

         {/* Concept 3: Time & Bazi */}
         <div className="bg-white p-6 rounded-xl border-l-4 border-gray-800 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-gray-800 mb-3">
               <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h4 className="font-bold text-gray-800 text-lg mb-2">Time & Destiny</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
               It's not just for years. Each day has 12 "Shichen" (2-hour periods) named after the Branches.
               <strong>Bazi</strong> (Four Pillars) uses the Year, Month, Day, and Hour Ganzhi to predict destiny.
            </p>
         </div>
      </div>

    </div>
  );
};
