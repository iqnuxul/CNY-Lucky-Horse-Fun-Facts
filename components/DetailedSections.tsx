import React, { useEffect, useState } from 'react';
import { COMPARISON_DETAILS, GREETINGS } from '../constants';
import { GanzhiCalculator } from './GanzhiCalculator';
import { GanzhiCycleVisualizer } from './GanzhiCycleVisualizer';
import { RitualsWidget } from './ContentWidgets';

export const DetailedSections: React.FC = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
       // Rotate based on scroll position
       setRotation(window.scrollY * 0.1);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="space-y-24 py-12 relative overflow-visible">
      
      {/* SECTION 1: NAME DEBATE */}
      <section id="detail-name" className="scroll-mt-24 relative">
         
         {/* Rotating Background - Using public/rotating_horses.png */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] md:w-[1500px] md:h-[1500px] pointer-events-none z-0 opacity-10">
             <img 
               src="public/rotating_horses.png" 
               alt="Rotating Horses" 
               className="w-full h-full object-contain will-change-transform"
               style={{ transform: `rotate(${rotation}deg)` }}
             />
         </div>

         <div className="flex items-center mb-8 relative z-10">
            <div className="w-12 h-1 bg-cny-gold mr-4"></div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-cny-darkRed">Why "Chinese New Year"?</h2>
         </div>
         
         <div className="grid md:grid-cols-2 gap-8 relative z-10">
             <div className="prose prose-lg text-gray-600">
                <p>
                    The debate between "Chinese New Year" and "Lunar New Year" is not just semantics; it is about scientific accuracy and historical origin.
                    The term <strong>"Lunar New Year"</strong> is scientifically incorrect for this festival because the calendar used is not purely lunar.
                </p>
                <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-cny-red my-6">
                    <h4 className="font-bold text-cny-darkRed mb-2">The Solar Connection</h4>
                    <p className="text-sm">
                        If the calendar were purely lunar (like the Islamic Hijri calendar), the holiday would drift forward by ~11 days every year, eventually occurring in summer, autumn, and winter. 
                        The <strong>Chinese Calendar (Nongli)</strong> adds a leap month periodically to realign with the sun and the seasons, ensuring the "Spring Festival" always happens in Spring.
                    </p>
                </div>

                {/* THE 2026 REALITY CHECK WIDGET */}
                <div className="bg-cny-paper border border-cny-gold/50 rounded-xl p-6 text-center mt-6">
                    <div className="flex flex-col gap-4">
                        <div className="bg-white p-3 rounded-lg shadow-sm border border-cny-red/20">
                            <div className="text-xs text-gray-500 font-bold mb-1">Chinese New Year</div>
                            <div className="text-2xl font-bold text-cny-red">Feb 17, 2026</div>
                            <div className="text-[10px] text-cny-gold font-bold">LUNISOLAR</div>
                        </div>
                        <div className="text-gray-400 font-bold text-sm">VS</div>
                        <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                            <div className="text-xs text-gray-500 font-bold mb-1">Pure Lunar Date</div>
                            <div className="text-2xl font-bold text-gray-500">June 27, 2026</div>
                            <div className="text-[10px] text-gray-400 font-bold">LUNAR ONLY</div>
                        </div>
                    </div>
                </div>
             </div>
             
             {/* Visual Comparison Cards Reuse */}
             <div className="flex flex-col gap-4">
                {COMPARISON_DETAILS.map((item) => (
                    <div key={item.id} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                        <div className="flex items-center mb-2">
                            <div className="text-cny-darkRed mr-3">{item.icon}</div>
                            <h3 className="font-bold text-gray-800">{item.title}</h3>
                        </div>
                        <p className="text-sm text-gray-600 pl-9">{item.content[0].text}</p>
                    </div>
                ))}
             </div>
         </div>
      </section>

      {/* SECTION 2: CALENDAR SECRETS & GANZHI */}
      <section id="detail-calendar" className="scroll-mt-24">
         <div className="flex items-center mb-8">
            <div className="w-12 h-1 bg-cny-gold mr-4"></div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-cny-darkRed">
                The Ganzhi System (天干地支)
            </h2>
         </div>

         {/* Introduction Text */}
         <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-12">
             <div className="prose prose-lg text-gray-600 max-w-none">
                 <p className="leading-relaxed">
                     The <strong>Ganzhi</strong> (Stem-Branch) system is an ancient Chinese method for recording years, months, days, and hours. 
                     Originating from thousands of years of astronomical observation, it remains a pillar of traditional Chinese culture.
                     It combines two sets of characters:
                 </p>
                 <ul className="grid md:grid-cols-2 gap-4 list-none pl-0 my-6">
                     <li className="bg-orange-50 p-4 rounded-lg border border-orange-100">
                         <span className="font-bold text-cny-darkRed block mb-1">10 Heavenly Stems (天干)</span>
                         <span className="text-sm">甲 (Jia), 乙 (Yi), 丙 (Bing), 丁 (Ding), 戊 (Wu), 己 (Ji), 庚 (Geng), 辛 (Xin), 壬 (Ren), 癸 (Gui).</span>
                     </li>
                     <li className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                         <span className="font-bold text-gray-800 block mb-1">12 Earthly Branches (地支)</span>
                         <span className="text-sm">子 (Zi), 丑 (Chou), 寅 (Yin), 卯 (Mao)... also known as the 12 Zodiac Animals (Rat, Ox, Tiger...).</span>
                     </li>
                 </ul>
                 <p>
                    These combine in a strict sequence to form a <strong>60-year cycle</strong> known as the "Sixty Jiazi". 
                    This system was historically used to record major events, like the <em>Jiawu War</em> or the <em>Xinhai Revolution</em>.
                 </p>
             </div>
         </div>

         {/* CALCULATOR + VISUALIZER */}
         <div className="flex flex-col gap-12">
            
            {/* 1. Simple Birthday Lookup */}
            <div>
               <h3 className="text-2xl font-serif font-bold text-gray-800 mb-6">Find Your Ganzhi Birth Year</h3>
               <GanzhiCalculator />
            </div>

            {/* 2. Advanced Cycle Visualizer */}
            <div>
                <h3 className="text-2xl font-serif font-bold text-gray-800 mb-6">Explore the 60-Year Cycle</h3>
                <GanzhiCycleVisualizer />
            </div>
         </div>
      </section>

      {/* SECTION 3: RITUALS & LANGUAGE */}
      <section id="detail-rituals" className="scroll-mt-24">
         <div className="flex items-center mb-8">
             <div className="w-12 h-1 bg-cny-gold mr-4"></div>
             <h2 className="text-3xl md:text-4xl font-serif font-bold text-cny-darkRed">Rituals & Language</h2>
         </div>

         <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Left: Rituals Content */}
            <div>
               <h3 className="text-xl font-bold mb-6 text-gray-800">Ancient Traditions</h3>
               <RitualsWidget />
               <div className="mt-8 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                  <h4 className="font-bold text-cny-darkRed mb-2 font-serif">Why Red?</h4>
                  <p className="text-gray-600 text-sm">
                      Legend tells of a beast named <em>Nian</em> who feared the color red and loud noises. 
                      This is why we wear red clothes, hang red lanterns, and set off firecrackers—to protect our families and invite good fortune.
                  </p>
               </div>
            </div>

            {/* Right: Language Learning */}
            <div className="bg-white rounded-2xl shadow-lg border-2 border-cny-paper overflow-hidden">
                <div className="bg-cny-gold/10 p-6 border-b border-cny-gold/20">
                    <h3 className="text-xl font-bold text-cny-darkRed font-serif">Say it in Chinese</h3>
                    <p className="text-sm text-gray-600">Impress your friends with these authentic greetings.</p>
                </div>
                <div className="divide-y divide-gray-100">
                    {GREETINGS.map((item, idx) => (
                        <div key={idx} className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors group">
                            <div>
                                <div className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Meaning</div>
                                <div className="font-bold text-gray-800">{item.phrase}</div>
                            </div>
                            <div className="text-right">
                                <div className="text-2xl font-serif text-cny-darkRed mb-1">{item.chinese}</div>
                                <div className="text-sm text-gray-500 font-mono group-hover:text-cny-gold transition-colors">{item.pinyin}</div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="p-4 bg-gray-50 text-center text-xs text-gray-400">
                    Tip: "Gong Xi Fa Cai" means "Wishing you wealth", not strictly "Happy New Year"!
                </div>
            </div>

         </div>
      </section>

    </div>
  );
};