import React, { useEffect, useState } from 'react';
import { COMPARISON_DETAILS, GREETINGS } from '../constants';
import { GanzhiCalculator } from './GanzhiCalculator';
import { GanzhiCycleVisualizer } from './GanzhiCycleVisualizer';
import { RitualsWidget } from './ContentWidgets';
import { RealityCheckWidget } from './ComparisonSection';

export const DetailedSections: React.FC = () => {
  const [rotation, setRotation] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
       // Rotate based on scroll position
       setRotation(window.scrollY * 0.1);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const observatoryData = COMPARISON_DETAILS.find(item => item.id === 'observatory');

  return (
    <div className="space-y-24 py-12 relative overflow-visible">
      
      {/* SECTION 1: NAME DEBATE */}
      <section id="detail-name" className="scroll-mt-24 relative">
         
         {/* Rotating Background - Using provided GitHub URL */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] md:w-[1500px] md:h-[1500px] pointer-events-none z-0 opacity-10">
             <img 
               src="https://github.com/iqnuxul/CNY-Lucky-Horse-Fun-Facts/blob/d2ce00ad2b23a54115aec0dc7df668346eaa4a60/_Image%205.png?raw=true" 
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
                        The <strong>Chinese Calendar (Nongli)</strong> adds a leap month periodically to realign with the sun and the seasons, serving as a crucial guide for agriculture and ensuring the "Spring Festival" always happens in Spring.
                    </p>
                </div>

                {/* THE 2026 REALITY CHECK WIDGET */}
                <div className="mt-6">
                    <RealityCheckWidget />
                </div>

                {/* OBSERVATORY CARD - Moved Here */}
                {observatoryData && (
                    <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 mt-6 not-prose">
                        <div className="flex items-center mb-3">
                            <div className="text-cny-darkRed mr-3">{observatoryData.icon}</div>
                            <h3 className="font-bold text-gray-800 text-lg">{observatoryData.title}</h3>
                        </div>
                        
                        <div className="pl-9 space-y-4">
                          {observatoryData.content.map((point, idx) => (
                            <div key={idx}>
                               <h4 className="text-xs font-bold text-cny-darkRed uppercase tracking-wider mb-1">{point.subtitle}</h4>
                               <p className="text-sm text-gray-600">{point.text}</p>
                            </div>
                          ))}
                        </div>
                    </div>
                )}
             </div>
             
             {/* Visual Comparison Cards Reuse */}
             <div className="flex flex-col gap-4">
                {COMPARISON_DETAILS.filter(item => item.id !== 'science' && item.id !== 'observatory').map((item) => (
                    <div key={item.id} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                        <div className="flex items-center mb-3">
                            <div className="text-cny-darkRed mr-3">{item.icon}</div>
                            <h3 className="font-bold text-gray-800">{item.title}</h3>
                        </div>
                        
                        <div className="pl-9 space-y-4">
                          {item.content.map((point, idx) => (
                            <div key={idx}>
                               <h4 className="text-xs font-bold text-cny-darkRed uppercase tracking-wider mb-1">{point.subtitle}</h4>
                               <p className="text-sm text-gray-600">{point.text}</p>
                            </div>
                          ))}
                        </div>
                        
                        {/* Image Preview if available */}
                        {item.image && (
                           <div className="pl-9 mt-4">
                              <div className="mb-1 text-xs font-bold text-gray-400 uppercase">Evidence:</div>
                              <div 
                                className="relative group cursor-zoom-in overflow-hidden rounded-lg border border-gray-200 shadow-sm" 
                                onClick={() => setSelectedImage(item.image as string)}
                              >
                                <img 
                                  src={item.image} 
                                  alt="Proof" 
                                  className="w-full h-64 object-cover object-top opacity-95 group-hover:opacity-100 transition-opacity bg-gray-50"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                                   <span className="text-white text-xs font-bold bg-black/60 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                      View Full Proof
                                   </span>
                                </div>
                              </div>
                           </div>
                        )}
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
            </div>

         </div>
      </section>

      {/* Lightbox Modal for Detailed Section */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full h-full flex flex-col items-center justify-center">
             <img 
               src={selectedImage} 
               alt="Full Proof" 
               className="max-w-full max-h-[85vh] object-contain rounded shadow-2xl"
               onClick={(e) => e.stopPropagation()}
             />
             <button 
               className="mt-6 bg-white/10 text-white px-6 py-2 rounded-full hover:bg-white/20 transition-colors font-bold flex items-center gap-2 backdrop-blur-md border border-white/20"
               onClick={() => setSelectedImage(null)}
             >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                Close Proof
             </button>
          </div>
        </div>
      )}

    </div>
  );
};