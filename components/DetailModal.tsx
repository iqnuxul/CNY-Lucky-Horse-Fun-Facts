import React from 'react';

interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export const DetailModal: React.FC<DetailModalProps> = ({ isOpen, onClose, title, icon, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      ></div>

      {/* 3D Flip Container */}
      <div className="relative w-full max-w-2xl [perspective:1000px]">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-h-[85vh] flex flex-col overflow-hidden animate-flip-in origin-center">
          
          {/* Header */}
          <div className="bg-cny-darkRed text-white p-6 flex justify-between items-center shadow-md z-10">
             <div className="flex items-center gap-3">
               {icon && <div className="text-cny-gold w-6 h-6">{icon}</div>}
               <h2 className="text-2xl font-serif font-bold">{title}</h2>
             </div>
             <button 
               onClick={onClose}
               className="p-2 hover:bg-white/10 rounded-full transition-colors"
             >
               <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
             </button>
          </div>

          {/* Scrollable Content */}
          <div className="overflow-y-auto p-6 md:p-8 bg-cny-paper custom-scrollbar">
             {children}
          </div>

          {/* Footer */}
          <div className="p-4 bg-white border-t border-gray-100 flex justify-end">
             <button 
               onClick={onClose}
               className="px-6 py-2 bg-gray-100 text-gray-700 font-bold rounded-lg hover:bg-gray-200 transition-colors"
             >
               Close
             </button>
          </div>

        </div>
      </div>
    </div>
  );
};
