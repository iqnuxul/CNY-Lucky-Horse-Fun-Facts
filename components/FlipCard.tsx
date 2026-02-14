import React, { useState } from 'react';

interface FlipCardProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  themeColor: 'red' | 'gold' | 'darkRed' | 'paper';
  children: React.ReactNode;
}

const themeStyles = {
  red: {
    bg: 'bg-cny-red',
    text: 'text-white',
    border: 'border-cny-red',
    subText: 'text-red-100',
    iconBg: 'bg-red-800/30'
  },
  gold: {
    bg: 'bg-cny-gold',
    text: 'text-cny-darkRed',
    border: 'border-cny-gold',
    subText: 'text-red-900/70',
    iconBg: 'bg-yellow-600/20'
  },
  darkRed: {
    bg: 'bg-cny-darkRed',
    text: 'text-cny-gold',
    border: 'border-cny-darkRed',
    subText: 'text-white/60',
    iconBg: 'bg-black/20'
  },
  paper: {
    bg: 'bg-[#FDF5E6]',
    text: 'text-cny-darkRed',
    border: 'border-orange-200',
    subText: 'text-gray-600',
    iconBg: 'bg-cny-gold/20'
  }
};

export const FlipCard: React.FC<FlipCardProps> = ({ title, subtitle, icon, themeColor, children }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const theme = themeStyles[themeColor];

  return (
    <div className="group h-80 md:h-96 w-full [perspective:1000px]">
      <div 
        className={`relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] shadow-lg hover:shadow-2xl rounded-2xl ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}
      >
        
        {/* FRONT */}
        <div 
          className={`absolute inset-0 h-full w-full rounded-2xl ${theme.bg} ${theme.border} border-4 flex flex-col items-center justify-center p-6 text-center [backface-visibility:hidden] cursor-pointer`} 
          onClick={() => setIsFlipped(true)}
        >
          {/* Decorative Pattern Background */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/oriental-tiles.png')]"></div>
          
          <div className={`w-16 h-16 rounded-full ${theme.iconBg} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm`}>
             <div className={`${theme.text} w-8 h-8`}>{icon}</div>
          </div>
          
          <h3 className={`text-2xl font-serif font-bold mb-2 ${theme.text}`}>{title}</h3>
          <p className={`text-sm ${theme.subText} mb-6 leading-relaxed line-clamp-3`}>{subtitle}</p>
          
          <div className={`mt-auto text-xs font-bold uppercase tracking-widest ${theme.subText} border-b border-current pb-0.5`}>
            Tap to Flip
          </div>
        </div>

        {/* BACK */}
        <div className={`absolute inset-0 h-full w-full rounded-2xl bg-white text-gray-800 [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-hidden flex flex-col border-4 ${theme.border}`}>
           {/* Back Header */}
           <div className={`flex justify-between items-center p-3 border-b ${theme.bg} ${theme.text}`}>
              <h4 className="font-serif font-bold text-sm truncate pr-2">{title}</h4>
              <button 
                onClick={(e) => { e.stopPropagation(); setIsFlipped(false); }}
                className="p-1 hover:bg-black/10 rounded-full transition-colors flex items-center gap-1 text-xs font-bold"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
           </div>
           
           {/* Back Content */}
           <div className="flex-1 overflow-y-auto custom-scrollbar p-6 flex flex-col justify-center items-center text-center">
               {children}
           </div>
        </div>

      </div>
    </div>
  );
};
