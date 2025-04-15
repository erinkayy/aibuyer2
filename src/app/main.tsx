"use client";

import { useState } from 'react';

export default function Main() {
  const [activeDesign, setActiveDesign] = useState<1 | 2 | 3>(1);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Le Jardin Design Selector</h1>
      
      {/* Design Selector */}
      <div className="bg-white shadow-lg rounded-xl p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Select a Design:</h2>
        <div className="flex gap-4">
          <button 
            onClick={() => setActiveDesign(1)}
            className={`px-5 py-2 rounded-lg font-medium transition-colors ${
              activeDesign === 1 
                ? 'bg-emerald-700 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Elegant
          </button>
          <button 
            onClick={() => setActiveDesign(2)}
            className={`px-5 py-2 rounded-lg font-medium transition-colors ${
              activeDesign === 2 
                ? 'bg-rose-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Vibrant
          </button>
          <button 
            onClick={() => setActiveDesign(3)}
            className={`px-5 py-2 rounded-lg font-medium transition-colors ${
              activeDesign === 3 
                ? 'bg-cyan-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Cyberpunk
          </button>
        </div>
      </div>
      
      {/* Display the current selection */}
      <div className="bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">Selected Design:</h2>
        <div className="p-4 border rounded-lg">
          {activeDesign === 1 && <div className="p-4 bg-emerald-100 text-emerald-800 rounded-lg">Elegant Design Selected</div>}
          {activeDesign === 2 && <div className="p-4 bg-rose-100 text-rose-800 rounded-lg">Vibrant Design Selected</div>}
          {activeDesign === 3 && <div className="p-4 bg-cyan-100 text-cyan-800 rounded-lg">Cyberpunk Design Selected</div>}
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <p>Once this works, we'll integrate the actual design components.</p>
      </div>
    </div>
  );
} 