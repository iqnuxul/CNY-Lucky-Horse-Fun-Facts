import React, { useState } from 'react';
import { HORSE_RESULTS } from '../constants';

export const LuckyHorseCatcher: React.FC = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState<typeof HORSE_RESULTS[0] | null>(null);

  const handleClick = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    setResult(null); // Clear previous result to show spinner/reset

    // Simulate "working" time
    setTimeout(() => {
      const randomHorse = HORSE_RESULTS[Math.floor(Math.random() * HORSE_RESULTS.length)];
      setResult(randomHorse);
      setIsSpinning(false);
    }, 1000); 
  };

  return (
    <div className="flex flex-col items-center my-6">
      
      {/* THE WHEEL CONTAINER */}
      <div 
        className={`relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center cursor-pointer`}
        onClick={handleClick}
      >
        {/* Static Text Ring - Hides after interaction */}
        <div className={`absolute inset-0 w-full h-full pointer-events-none z-0 transition-opacity duration-500 ${result || isSpinning ? 'opacity-0' : 'opacity-100'}`}>
           <svg viewBox="0 0 256 256" className="w-full h-full text-cny-darkRed fill-current">
              <defs>
                 <path id="curve-u" d="M 23, 128 A 105, 105 0 0, 0 233, 128" fill="transparent" />
              </defs>
              <text fontSize="14" fontWeight="bold" letterSpacing="3" textAnchor="middle">
                 <textPath href="#curve-u" startOffset="50%">
                    GET YOUR LUCKY HORSE • 2026
                 </textPath>
              </text>
           </svg>
        </div>

        {/* Center Button / Display Area */}
        <div className="absolute w-28 h-28 md:w-40 md:h-40 bg-gradient-to-br from-cny-red to-cny-darkRed rounded-full shadow-2xl border-[4px] md:border-[6px] border-cny-gold flex flex-col items-center justify-center text-white z-10 overflow-hidden relative">
            
            {/* Inner Texture */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/oriental-tiles.png')] pointer-events-none"></div>
            
           {isSpinning ? (
             <div className="animate-spin rounded-full h-8 w-8 md:h-10 md:w-10 border-4 border-white border-t-transparent relative z-20"></div>
           ) : result ? (
             // Show Image
             <img 
               src={result.imageUrl} 
               alt={result.name}
               className="w-full h-full object-cover animate-flip-in z-20 bg-cny-red"
             />
           ) : (
             // Show "Click Me" / Default State
             <div className="relative z-20 flex flex-col items-center animate-pulse">
               <span className="text-3xl md:text-4xl mb-1 md:mb-2 filter drop-shadow-md">🐎</span>
               <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.15em] text-cny-gold border-b border-cny-gold pb-0.5">Click Me</span>
             </div>
           )}
        </div>
      </div>

      {/* Result Text (Good Wish) */}
      <div className="mt-1 min-h-[3rem] text-center px-4 transition-all duration-500 max-w-md">
         {result ? (
            <div className="animate-flip-in">
                <p className="text-cny-darkRed font-serif font-bold text-lg md:text-xl italic whitespace-pre-line leading-relaxed">
                  {result.desc}
                </p>
            </div>
         ) : null}
      </div>

    </div>
  );
};