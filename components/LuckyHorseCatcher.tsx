import React, { useState } from 'react';
import { HORSE_RESULTS } from '../constants';

export const LuckyHorseCatcher: React.FC = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState<typeof HORSE_RESULTS[0] | null>(null);

  const handleClick = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    setResult(null);

    // Simulate "working" time
    setTimeout(() => {
      const randomHorse = HORSE_RESULTS[Math.floor(Math.random() * HORSE_RESULTS.length)];
      setResult(randomHorse);
      setIsSpinning(false);
    }, 1500);
  };

  const closeResult = () => {
    setResult(null);
  };

  return (
    <div className="relative flex justify-center items-center my-2 md:my-6">
      
      {/* RESULT MODAL (Mini) */}
      {result && (
        <div className="absolute z-20 animate-flip-in">
           <div className="bg-white p-6 rounded-2xl shadow-2xl border-4 border-cny-gold max-w-xs text-center relative">
              <button 
                 onClick={closeResult}
                 className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
              <h3 className="text-xl font-bold font-serif text-cny-darkRed mb-2">{result.name}</h3>
              <div className={`w-32 h-32 md:w-40 md:h-40 mx-auto ${result.placeholderColor} rounded-full mb-4 shadow-inner flex items-center justify-center text-white font-bold opacity-80`}>
                 IMAGE #{result.id}
              </div>
              <p className="text-sm text-gray-600 italic">{result.desc}</p>
              <button onClick={closeResult} className="mt-4 bg-cny-red text-white px-6 py-2 rounded-full font-bold shadow hover:bg-cny-darkRed transition-colors">
                Claim Fortune
              </button>
           </div>
        </div>
      )}

      {/* THE WHEEL CONTAINER */}
      {/* Mobile: w-48 (192px), Desktop: w-64 (256px) */}
      <div 
        className={`relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center cursor-pointer group transition-transform duration-500 ${isSpinning ? 'scale-95' : 'hover:scale-105'} ${result ? 'blur-sm opacity-50 pointer-events-none' : ''}`}
        onClick={handleClick}
      >
        {/* Static Text Ring (U Shape Horseshoe Style) */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
           {/* ViewBox fixed to 256 for consistent coordinate system, handled by container scaling */}
           <svg viewBox="0 0 256 256" className="w-full h-full text-cny-darkRed fill-current">
              <defs>
                 {/* 
                    Path for U shape (bottom arc). 
                    Center 128, 128. Radius ~105.
                 */}
                 <path id="curve-u" d="M 23, 128 A 105, 105 0 0, 0 233, 128" fill="transparent" />
              </defs>
              <text fontSize="14" fontWeight="bold" letterSpacing="3" textAnchor="middle">
                 <textPath href="#curve-u" startOffset="50%">
                    GET YOUR LUCKY HORSE • 2026
                 </textPath>
              </text>
           </svg>
        </div>

        {/* Center Button */}
        {/* Mobile: w-28 (112px) - 58% of container. Desktop: w-40 (160px) - 62% of container. */}
        <div className="absolute w-28 h-28 md:w-40 md:h-40 bg-gradient-to-br from-cny-red to-cny-darkRed rounded-full shadow-2xl border-[4px] md:border-[6px] border-cny-gold flex flex-col items-center justify-center text-white z-10 transition-transform group-active:scale-95 overflow-hidden">
            {/* Inner Texture/Pattern */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/oriental-tiles.png')]"></div>
            
           {isSpinning ? (
             <div className="animate-spin rounded-full h-6 w-6 md:h-8 md:w-8 border-4 border-white border-t-transparent relative z-10"></div>
           ) : (
             <div className="relative z-10 flex flex-col items-center">
               <span className="text-3xl md:text-4xl mb-1 md:mb-2 filter drop-shadow-md">🐎</span>
               <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.15em] text-cny-gold border-b border-cny-gold pb-0.5">Click Me</span>
             </div>
           )}
        </div>
        
        {/* Removed decorative outer rings */}

      </div>
    </div>
  );
};