import React from 'react';

interface TopicCardProps {
  title: string;
  onClick: () => void;
}

export const TopicCard: React.FC<TopicCardProps> = ({ title, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="bg-cny-darkRed rounded-lg shadow-md border border-cny-red hover:shadow-lg hover:border-cny-gold transition-all duration-300 cursor-pointer group flex items-center justify-between px-4 py-3 md:py-4 w-full h-auto active:scale-95"
    >
      <h3 className="text-sm md:text-base font-serif font-bold text-white group-hover:text-cny-gold transition-colors text-left flex-1 pr-2">
        {title}
      </h3>

      <div className="text-cny-gold/80 group-hover:text-cny-gold transition-colors flex-shrink-0">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth={2.5} 
          stroke="currentColor" 
          className="w-6 h-6 md:w-8 md:h-8 transition-transform group-hover:translate-x-1"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </div>
    </div>
  );
};