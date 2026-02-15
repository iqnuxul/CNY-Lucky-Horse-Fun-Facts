import React, { useState } from 'react';
import { COMPARISON_DETAILS } from '../constants';

export const RealityCheckWidget: React.FC = () => {
  return (
      <div className="bg-cny-paper border border-cny-gold/50 rounded-xl p-6 text-center">
        {/* Title Removed as requested */}
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
  );
};

export const ComparisonSection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-6">
      
      <div className="flex flex-col gap-6">
        {COMPARISON_DETAILS.filter(item => item.id !== 'science').map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            {/* Header */}
            <div className={`${item.headerBg} p-4 flex items-center text-white`}>
               <div className="p-2 bg-white/20 rounded-full mr-3 shrink-0 flex items-center justify-center">
                 <div className="w-6 h-6 flex items-center justify-center [&>svg]:w-full [&>svg]:h-full">{item.icon}</div>
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
              
              {/* Evidence Image */}
              {item.image && (
                 <div className="mt-4 bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <div className="mb-3 text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-2">
                       <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                       {item.imageCaption || "Historical Proof"}
                    </div>
                    <div 
                      className="relative group cursor-zoom-in overflow-hidden rounded shadow-sm border border-gray-300 w-fit mx-auto"
                      onClick={() => setSelectedImage(item.image as string)}
                    >
                        <img 
                          src={item.image} 
                          alt="Historical Evidence" 
                          className="w-full h-auto max-h-[200px] object-contain bg-white"
                        />
                         <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                            <span className="bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-bold opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                View Full Document
                            </span>
                        </div>
                    </div>
                    <p className="text-xs text-gray-400 mt-2 text-center italic">Click image to enlarge</p>
                 </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 animate-in fade-in duration-200"
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