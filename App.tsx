import React, { useState } from 'react';
import { HERO_TEXT } from './constants';
import { LuckyHorseCatcher } from './components/LuckyHorseCatcher';
import { TopicCard } from './components/TopicCard';
import { DetailModal } from './components/DetailModal';
import { ComparisonSection } from './components/ComparisonSection';
import { RitualsWidget } from './components/ContentWidgets';
import { CalendarModalContent, RitualsModalContent, NameDebateModalContent } from './components/ModalContent';
import { DetailedSections } from './components/DetailedSections';

function App() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const closeModal = () => setActiveModal(null);

  return (
    <div className="min-h-screen text-gray-800 font-sans selection:bg-cny-red selection:text-white pb-20">
      
      {/* Header / Nav Removed as requested */}

      <main className="max-w-5xl mx-auto px-4 pt-10 md:pt-20">
        
        {/* HERO TITLE - Standard Font */}
        <div className="text-center mb-2 md:mb-6">
           <div className="inline-block px-2 py-0.5 md:px-3 md:py-1 bg-cny-gold/20 text-cny-darkRed text-[10px] md:text-xs font-bold rounded-full mb-1 md:mb-3 border border-cny-gold/40">
             {HERO_TEXT.subtitle}
           </div>
           
           <h1 className="text-4xl md:text-7xl font-serif font-bold text-cny-darkRed mb-2 drop-shadow-sm leading-tight">
             {HERO_TEXT.title}
           </h1>
           
           <p className="text-sm md:text-xl text-gray-600 max-w-xl mx-auto mt-2">{HERO_TEXT.intro}</p>
        </div>

        {/* CENTERPIECE: LUCKY HORSE CATCHER */}
        <div className="mb-4 md:mb-8">
           <LuckyHorseCatcher />
        </div>

        {/* TOPIC GRID (Topic Cards that open Modals) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-8 md:mb-16">
           
           <TopicCard 
             title="Why Chinese, Not Lunar?"
             onClick={() => setActiveModal('name')}
           />

           <TopicCard 
             title="Calendar Secrets"
             onClick={() => setActiveModal('calendar')}
           />

           <TopicCard 
             title="How We Celebrate"
             onClick={() => setActiveModal('rituals')}
           />

        </div>

        {/* DETAILED SECTIONS */}
        <DetailedSections />

      </main>

      <footer className="text-center text-gray-400 text-xs md:text-sm py-8 md:py-12 border-t border-gray-200 mt-8 md:mt-12 bg-cny-paper/80">
        <p>Happy Chinese New Year 2026</p>
      </footer>

      {/* MODALS WITH RICH CONTENT */}
      
      {/* 1. Name Debate Modal */}
      <DetailModal 
        isOpen={activeModal === 'name'} 
        onClose={closeModal}
        title="The Name Debate"
        icon={<svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>}
      >
        <NameDebateModalContent />
        <ComparisonSection />
      </DetailModal>

      {/* 2. Calendar Secrets Modal */}
      <DetailModal 
        isOpen={activeModal === 'calendar'} 
        onClose={closeModal}
        title="Calendar Secrets"
        icon={<svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>}
      >
        <CalendarModalContent />
      </DetailModal>

      {/* 3. Rituals Modal */}
      <DetailModal 
        isOpen={activeModal === 'rituals'} 
        onClose={closeModal}
        title="Rituals & Food"
        icon={<svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
      >
        <div className="space-y-8">
            <RitualsWidget />
            <RitualsModalContent />
        </div>
      </DetailModal>

    </div>
  );
}

export default App;