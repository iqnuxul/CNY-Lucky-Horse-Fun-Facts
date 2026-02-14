import React from 'react';

interface FactCardProps {
  title: string;
  content: string;
  icon?: React.ReactNode;
}

export const FactCard: React.FC<FactCardProps> = ({ title, content, icon }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border-b-4 border-cny-red group">
      <div className="flex items-start">
        {icon && (
          <div className="text-cny-red mr-4 group-hover:scale-110 transition-transform mt-1">
            {icon}
          </div>
        )}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2 font-serif">{title}</h3>
          <p className="text-gray-600 leading-relaxed text-sm">{content}</p>
        </div>
      </div>
    </div>
  );
};
