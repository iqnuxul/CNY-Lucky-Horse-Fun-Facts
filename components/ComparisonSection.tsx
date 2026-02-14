import React from 'react';
import { COMPARISON_DETAILS } from '../constants';

export const ComparisonSection: React.FC = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="text-center mb-4">
        <p className="text-gray-600 italic">
          Why "Lunar New Year" is scientifically inaccurate for this festival.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {COMPARISON_DETAILS.map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            {/* Header */}
            <div className={`${item.headerBg} p-4 flex items-center text-white`}>
               <div className="p-2 bg-white/20 rounded-full mr-3">
                 <div className="w-5 h-5">{item.icon}</div>
               </div>
               <h3 className="text-lg font-bold font-serif">{item.title}</h3>
            </div>
            
            {/* Content */}
            <div className="p-5 flex flex-col gap-4">
              {item.content.map((point, idx) => (
                <div key={idx} className="relative pl-4 border-l-4 border-gray-200">
                  <h4 className="text-sm font-bold text-cny-darkRed mb-1 uppercase tracking-wide">{point.subtitle}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {point.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-cny-paper border border-cny-gold/50 rounded-xl p-6 text-center mt-2">
        <h3 className="text-lg font-bold text-cny-darkRed mb-3 font-serif">The 2026 Reality Check</h3>
        <div className="flex flex-col gap-4">
            <div className="bg-white p-3 rounded-lg shadow-sm border border-cny-red/20">
                <div className="text-xs text-gray-500 font-bold mb-1">Chinese New Year </div>
                <div className="text-2xl font-bold text-cny-red">Feb 17, 2026</div>
                <div className="text-[10px] text-cny-gold font-bold">LUNISOLAR</div>
            </div>
            <div className="text-gray-400 font-bold text-sm">VS</div>
             <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                <div className="text-xs text-gray-500 font-bold mb-1">Pure Lunar Date </div>
                <div className="text-2xl font-bold text-gray-500">June 27, 2026</div>
                <div className="text-[10px] text-gray-400 font-bold">LUNAR ONLY</div>
            </div>
        </div>
      </div>
    </div>
  );
};
