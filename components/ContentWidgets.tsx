import React from 'react';
import { RITUALS, CALENDAR_FACTS } from '../constants';

export const RitualsWidget: React.FC = () => {
  return (
    <div className="grid gap-6">
      <div className="bg-orange-50 p-4 rounded-lg border border-orange-100 mb-4 text-center">
        <p className="italic text-gray-600">"Food and family are the heart of the celebration."</p>
      </div>
      {RITUALS.map((ritual, i) => (
        <div key={i} className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="text-cny-red shrink-0 mt-1">{ritual.icon}</div>
          <div>
            <h4 className="font-bold text-cny-darkRed font-serif mb-1">{ritual.title}</h4>
            <p className="text-gray-600 text-sm leading-relaxed">{ritual.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export const CalendarFactsWidget: React.FC = () => {
  return (
    <div className="grid gap-4">
      {CALENDAR_FACTS.map((fact, i) => (
        <div key={i} className="bg-gray-800 text-white p-5 rounded-xl border border-gray-700 shadow-md">
          <div className="flex items-center mb-2">
            <span className="text-cny-gold text-2xl mr-3 opacity-50">{i + 1}.</span>
            <h4 className="text-cny-gold font-serif font-bold">{fact.title}</h4>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed pl-8 border-l-2 border-gray-600">{fact.content}</p>
        </div>
      ))}
       <div className="mt-4 p-4 bg-cny-darkRed/10 rounded-lg border border-cny-darkRed/30 text-center">
          <p className="text-sm italic text-gray-600">
            Official Authority: <strong>Purple Mountain Observatory</strong>
          </p>
       </div>
    </div>
  );
};
