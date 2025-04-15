'use client'

import React from 'react'

export const CartButton = ({ count = 0 }) => {
  return (
    <button className="relative">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
      {count > 0 && (
        <span className="absolute -top-2 -right-2 bg-cyan-500 text-xs text-black font-bold w-4 h-4 flex items-center justify-center rounded-full">
          {count}
        </span>
      )}
    </button>
  )
} 