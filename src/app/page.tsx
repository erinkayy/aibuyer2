"use client";

import { useState } from 'react';
import DesignOne from '../components/designs/DesignOne';
import DesignTwo from '../components/designs/DesignTwo';
import DesignThree from '../components/designs/DesignThree';

export default function Home() {
  const [activeDesign, setActiveDesign] = useState<1 | 2 | 3>(1);

  return (
    <div className="min-h-screen">
      {/* Design Selector */}
      <div className="fixed top-4 right-4 z-[9999] bg-white shadow-xl rounded-full px-4 py-2 flex items-center gap-2 border-2 border-gray-200">
        <span className="text-sm font-medium">Select Layout:</span>
        <button 
          onClick={() => setActiveDesign(1)}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
            activeDesign === 1 
              ? 'bg-emerald-700 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Layout 1
        </button>
        <button 
          onClick={() => setActiveDesign(2)}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
            activeDesign === 2 
              ? 'bg-rose-600 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Layout 2
        </button>
        <button 
          onClick={() => setActiveDesign(3)}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
            activeDesign === 3 
              ? 'bg-cyan-600 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Layout 3
        </button>
      </div>

      {/* Render the active design */}
      {activeDesign === 1 ? <DesignOne /> : 
       activeDesign === 2 ? <DesignTwo /> : 
       <DesignThree />}
    </div>
  )
} 