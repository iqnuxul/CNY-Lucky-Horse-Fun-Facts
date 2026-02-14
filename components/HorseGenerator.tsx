import React, { useState } from 'react';
import { generateHorseImage } from '../services/geminiService';
import { HorseGenerationState, GenerationStatus } from '../types';

const styles = [
  "Traditional Paper Cut",
  "Blue & White Porcelain",
  "Jade Sculpture",
  "Gold Statue",
  "Ink Wash Painting",
  "Pixar 3D Style"
];

export const HorseGenerator: React.FC = () => {
  const [selectedStyle, setSelectedStyle] = useState(styles[0]);
  const [state, setState] = useState<HorseGenerationState>({
    status: GenerationStatus.IDLE,
    imageUrl: null,
    error: null
  });

  const handleGenerate = async () => {
    setState({ ...state, status: GenerationStatus.LOADING, error: null });
    try {
      const imageUrl = await generateHorseImage(selectedStyle);
      setState({
        status: GenerationStatus.SUCCESS,
        imageUrl,
        error: null
      });
    } catch (e) {
      setState({
        status: GenerationStatus.ERROR,
        imageUrl: null,
        error: "Failed. Please try again."
      });
    }
  };

  return (
    <div className="h-full flex flex-col">
      <div className="bg-orange-50 p-4 rounded-lg mb-6 text-sm text-center text-gray-600 border border-orange-100">
         Select an art style below to summon your 2026 guardian using Gemini AI.
      </div>

      <div className="space-y-4 flex-1">
        {/* Style Selection */}
        <div>
          <label className="block text-xs uppercase text-gray-500 font-bold mb-2">Art Style</label>
          <div className="grid grid-cols-2 gap-2">
            {styles.map((style) => (
              <button
                key={style}
                onClick={() => setSelectedStyle(style)}
                className={`px-2 py-2 text-xs md:text-sm rounded border transition-all ${
                  selectedStyle === style
                    ? 'bg-cny-red text-white border-cny-red shadow-md'
                    : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                }`}
              >
                {style}
              </button>
            ))}
          </div>
        </div>
        
        {/* Generate Button */}
        <button
          onClick={handleGenerate}
          disabled={state.status === GenerationStatus.LOADING}
          className={`w-full py-3 rounded-lg font-bold shadow-md transition-all ${
            state.status === GenerationStatus.LOADING
              ? 'bg-gray-300 cursor-not-allowed text-gray-500'
              : 'bg-gradient-to-r from-cny-gold to-orange-400 text-white hover:to-orange-500'
          }`}
        >
          {state.status === GenerationStatus.LOADING ? 'Summoning...' : 'Generate Horse'}
        </button>
        
        {/* Error Message */}
        {state.error && (
          <div className="p-3 bg-red-100 text-red-700 rounded text-xs">
            {state.error}
          </div>
        )}

        {/* Display Area */}
        <div className="mt-4 flex-1 min-h-[250px] bg-gray-50 rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center relative overflow-hidden">
          {state.status === GenerationStatus.IDLE && (
            <div className="text-center text-gray-400">
              <span className="text-4xl block mb-2">🐎</span>
              <p className="text-xs">Preview Area</p>
            </div>
          )}
          
          {state.status === GenerationStatus.LOADING && (
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-2 border-cny-red border-t-transparent mx-auto mb-2"></div>
              <p className="text-xs text-cny-darkRed animate-pulse">Painting...</p>
            </div>
          )}

          {state.status === GenerationStatus.SUCCESS && state.imageUrl && (
            <div className="w-full h-full flex flex-col items-center justify-center bg-black/5 p-2">
               <img 
                src={state.imageUrl} 
                alt="Generated Horse" 
                className="rounded shadow-lg max-h-[250px] object-contain border-4 border-white"
              />
              <a 
                href={state.imageUrl} 
                download="my-horse-2026.png"
                className="mt-2 text-xs text-cny-red underline hover:text-cny-darkRed font-bold"
              >
                Download
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
