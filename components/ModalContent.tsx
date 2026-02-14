import React from 'react';
import { GREETINGS } from '../constants';
import { GanzhiCalculator } from './GanzhiCalculator';

export const CalendarModalContent: React.FC = () => {
  return (
    <div className="space-y-8">
       <div className="bg-cny-darkRed text-white p-6 rounded-2xl shadow-lg relative overflow-hidden">
           <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3"></div>
           <h3 className="text-xl font-serif font-bold mb-3 relative z-10">Calculated in China</h3>
           <p className="text-sm relative z-10 leading-relaxed opacity-90">
               The Chinese Calendar is calculated based on the meridian of 120° East (passing through China). 
               This means the exact moment of the New Moon is determined by China Standard Time. 
               If you celebrate on the same day as China, you are following the Chinese Calendar.
           </p>
       </div>
       <GanzhiCalculator />
    </div>
  );
};

export const RitualsModalContent: React.FC = () => {
  return (
    <div className="space-y-8">
       <div className="bg-white p-6 rounded-xl border-l-4 border-cny-red shadow-sm">
          <h4 className="font-bold text-cny-darkRed mb-2 font-serif text-lg">Why Red?</h4>
          <p className="text-gray-600 text-sm leading-relaxed">
              Legend tells of a beast named <em>Nian</em> who feared the color red and loud noises. 
              This is why we wear red clothes, hang red lanterns, and set off firecrackers—to protect our families and invite good fortune.
          </p>
       </div>

       <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
          <div className="bg-orange-50 p-4 border-b border-orange-100">
              <h3 className="text-lg font-bold text-cny-darkRed font-serif">Say it in Chinese</h3>
          </div>
          <div className="divide-y divide-gray-100">
              {GREETINGS.map((item, idx) => (
                  <div key={idx} className="p-4 flex items-center justify-between hover:bg-orange-50/50 transition-colors">
                      <div>
                          <div className="font-bold text-gray-800">{item.phrase}</div>
                          <div className="text-xs text-gray-400 font-bold uppercase tracking-wider mt-1">Meaning</div>
                      </div>
                      <div className="text-right">
                          <div className="text-xl font-serif text-cny-darkRed">{item.chinese}</div>
                          <div className="text-sm text-gray-500 font-mono">{item.pinyin}</div>
                      </div>
                  </div>
              ))}
          </div>
      </div>
    </div>
  );
};

export const NameDebateModalContent: React.FC = () => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-cny-red mb-6">
            <h4 className="font-bold text-cny-darkRed mb-2 text-lg">The Solar Connection</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
                If the calendar were purely lunar (like the Islamic Hijri calendar), the holiday would drift forward by ~11 days every year, eventually occurring in summer, autumn, and winter. 
                The <strong>Chinese Calendar (Nongli)</strong> adds a leap month periodically to realign with the sun and the seasons, ensuring the "Spring Festival" always happens in Spring.
            </p>
        </div>
    );
}
