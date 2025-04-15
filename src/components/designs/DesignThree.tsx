'use client'

import React, { useState, useEffect } from 'react'

export default function DesignThree() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-black text-gray-300 font-sans">
      {/* Navigation */}
      <header className={`border-b border-cyan-900/30 backdrop-blur-md ${scrolled ? 'bg-black/90' : 'bg-black/70'} fixed w-full z-50 transition-colors duration-300`}>
        <div className="container mx-auto flex justify-between items-center py-4 px-4">
          <div className="flex items-center">
            <div className="relative h-10 w-10 mr-3">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-lg blur opacity-70"></div>
              <div className="relative flex items-center justify-center h-full z-10 font-bold text-white">LJ</div>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-600 bg-clip-text text-transparent">
              LE·JARDIN
            </h1>
          </div>
          
          <nav className="hidden md:flex gap-8">
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors relative group">
              <span>BIOMES</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#" className="text-gray-400 hover:text-fuchsia-400 transition-colors relative group">
              <span>FLORA</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-fuchsia-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#" className="text-gray-400 hover:text-violet-400 transition-colors relative group">
              <span>BIOTECH</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors relative group">
              <span>ABOUT</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>
          
          <div className="flex gap-4 items-center">
            <button className="text-gray-400 hover:text-cyan-400 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 hover:text-fuchsia-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="absolute -top-2 -right-2 bg-cyan-500 text-xs text-black font-bold w-4 h-4 flex items-center justify-center rounded-full">3</span>
            </button>
          </div>
        </div>
      </header>

      {/* 1. Hero Section */}
      <section className="pt-24 pb-16 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-fuchsia-900/20 to-transparent"></div>
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-fuchsia-700/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-700/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 border border-fuchsia-500/50 rounded-full text-xs font-medium text-fuchsia-400 mb-2">
              NEW COLLECTION 2077
            </div>
            <h2 className="text-5xl font-bold leading-tight">
              <span className="text-white">Bio-Engineered</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-violet-500 bg-clip-text text-transparent">
                Botanical Systems
              </span>
            </h2>
            <p className="text-gray-400 max-w-md">
              Advanced cultivation techniques meet aesthetic excellence. Our next-gen flora brings vibrant natural elements to your urban environment.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-fuchsia-600 rounded-md blur opacity-70 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative bg-black px-6 py-3 rounded-md">
                  EXPLORE COLLECTION
                </div>
              </button>
              <button className="px-6 py-3 border border-cyan-800 rounded-md hover:border-cyan-500 transition-colors">
                VIEW CATALOG
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-cyan-900/30 to-fuchsia-900/30 rounded-2xl overflow-hidden border border-cyan-800/30 backdrop-blur-sm">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-gray-600 px-10 text-center">
                  [Hero Image: Glowing Bioluminescent Plant]
                </div>
              </div>
              <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-cyan-500/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-fuchsia-500/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </section>

      {/* 2. Shop by Category */}
      <section className="py-16 backdrop-blur-sm bg-black/50 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/5 to-fuchsia-900/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center mb-12">
            <div className="h-px flex-grow bg-gradient-to-r from-transparent via-cyan-800/50 to-transparent"></div>
            <h3 className="text-xl font-bold px-4 tracking-wider text-white">ENGINEERED BIOMES</h3>
            <div className="h-px flex-grow bg-gradient-to-r from-transparent via-fuchsia-800/50 to-transparent"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "NEO TROPICALS", color: "cyan" },
              { name: "AURORA BLOOMS", color: "fuchsia" },
              { name: "SYNTHWAVE SUCCULENTS", color: "violet" },
              { name: "QUANTUM GARDENS", color: "cyan" }
            ].map((category) => (
              <div key={category.name} className="group cursor-pointer">
                <div className={`aspect-square bg-gradient-to-br ${category.color === 'cyan' ? 'from-cyan-900/30 to-cyan-900/10' : category.color === 'fuchsia' ? 'from-fuchsia-900/30 to-fuchsia-900/10' : 'from-violet-900/30 to-violet-900/10'} mb-4 rounded-xl overflow-hidden relative border border-gray-800`}>
                  <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                    [Image: {category.name}]
                  </div>
                  <div className={`absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t ${category.color === 'cyan' ? 'from-cyan-500/20' : category.color === 'fuchsia' ? 'from-fuchsia-500/20' : 'from-violet-500/20'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                </div>
                <h4 className="text-center text-sm font-medium tracking-wider">{category.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Seasonal Favorites */}
      <section className="container mx-auto py-16 px-4">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-violet-500 bg-clip-text text-transparent inline-block">
            TRENDING BIOTECH
          </h3>
          <div className="h-px w-24 mx-auto bg-gradient-to-r from-cyan-500 to-fuchsia-500"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Luminova Orchid", price: "¥12,500", color: "cyan" },
            { name: "Neon Pulse Fern", price: "¥9,800", color: "fuchsia" },
            { name: "Digital Dahlia", price: "¥15,200", color: "violet" }
          ].map((product) => (
            <div key={product.name} className="group relative">
              <div className={`aspect-[3/4] bg-gradient-to-br ${product.color === 'cyan' ? 'from-cyan-900/30 to-cyan-900/10' : product.color === 'fuchsia' ? 'from-fuchsia-900/30 to-fuchsia-900/10' : 'from-violet-900/30 to-violet-900/10'} rounded-xl overflow-hidden border border-gray-800 mb-4 relative`}>
                <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                  [Image: {product.name}]
                </div>
                <div className={`absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t ${product.color === 'cyan' ? 'from-cyan-500/20' : product.color === 'fuchsia' ? 'from-fuchsia-500/20' : 'from-violet-500/20'} to-transparent`}></div>
                
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="relative group/btn">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-fuchsia-600 rounded-md blur opacity-70 group-hover/btn:opacity-100 transition duration-500"></div>
                    <div className="relative bg-black px-5 py-2 rounded-md text-sm">
                      ADD TO CART
                    </div>
                  </button>
                </div>
              </div>
              
              <div className="flex justify-between items-baseline">
                <h4 className="font-medium text-white">{product.name}</h4>
                <span className={`${product.color === 'cyan' ? 'text-cyan-400' : product.color === 'fuchsia' ? 'text-fuchsia-400' : 'text-violet-400'} font-mono`}>{product.price}</span>
              </div>
              <div className={`h-px w-full bg-gradient-to-r ${product.color === 'cyan' ? 'from-transparent via-cyan-800/30 to-transparent' : product.color === 'fuchsia' ? 'from-transparent via-fuchsia-800/30 to-transparent' : 'from-transparent via-violet-800/30 to-transparent'} mt-2`}></div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Reviews/Quotes */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 to-fuchsia-900/10"></div>
        <div className="container mx-auto px-4 max-w-3xl text-center relative z-10">
          <div className="inline-block mb-8">
            <div className="relative h-16 w-16 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-full blur opacity-30"></div>
              <div className="relative h-full flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
            </div>
          </div>
          <blockquote className="text-2xl font-light mb-8 leading-relaxed">
            <span className="text-white">"The bioluminescent orchids from Le Jardin have transformed my</span>
            <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent"> living space into a Neo-Tokyo dream.</span>
            <span className="text-white"> Truly cutting-edge botanical engineering."</span>
          </blockquote>
          <div className="inline-block">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-fuchsia-600 rounded-full blur-sm opacity-50"></div>
              <cite className="relative text-sm tracking-widest uppercase not-italic bg-black px-6 py-2 rounded-full inline-block">
                — Eliza Reeves, Night City
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Social Feed */}
      <section className="py-16 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-700/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-700/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="flex items-center justify-between mb-10">
            <h3 className="text-2xl font-bold text-white flex items-center">
              <span className="text-cyan-400 mr-2">#</span>LeJardinNeoFlora
            </h3>
            <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors">
              <span>VIEW FEED</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((item, index) => (
              <div key={item} className="group relative aspect-square overflow-hidden rounded-xl border border-gray-800">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center text-gray-600">
                  [Social Image {item}]
                </div>
                <div className={`absolute inset-0 bg-gradient-to-br opacity-40 ${index % 2 === 0 ? 'from-cyan-900/20 to-fuchsia-900/20' : 'from-fuchsia-900/20 to-cyan-900/20'}`}></div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="text-white text-sm bg-black/70 px-3 py-1 rounded-full backdrop-blur-sm">
                    View Post
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Newsletter */}
      <section className="bg-gradient-to-r from-cyan-900/30 to-fuchsia-900/30 py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-gray-800 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-cyan-600 via-fuchsia-600 to-violet-600"></div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-600"></div>
            
            <div className="relative z-10 text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Join the Biotech Revolution</h3>
              <p className="text-gray-400 max-w-xl mx-auto">
                Subscribe to receive advanced access to limited editions, growth optimization tips, and exclusive biotech updates.
              </p>
            </div>
            
            <form className="max-w-md mx-auto relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-fuchsia-600 rounded-lg blur opacity-30"></div>
              <div className="relative flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-black text-white placeholder-gray-500 flex-1 px-4 py-3 rounded-l-lg focus:outline-none border-y border-l border-gray-800"
                />
                <button type="submit" className="bg-gradient-to-r from-cyan-500 to-fuchsia-600 text-white px-6 py-3 rounded-r-lg font-medium">
                  SUBSCRIBE
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* 7. Location/Hours/Map */}
      <section className="container mx-auto py-16 px-4">
        <div className="flex items-center mb-12">
          <div className="h-px flex-grow bg-gradient-to-r from-transparent via-cyan-800/50 to-transparent"></div>
          <h3 className="text-xl font-bold px-4 tracking-wider text-white">VISIT OUR LAB</h3>
          <div className="h-px flex-grow bg-gradient-to-r from-transparent via-fuchsia-800/50 to-transparent"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden h-80 relative">
            <div className="absolute inset-0 flex items-center justify-center text-gray-600">
              [Map Location: Neo District]
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/5 to-fuchsia-900/5 backdrop-blur-[1px]"></div>
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-cyan-600/40 to-fuchsia-600/40"></div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-fuchsia-600/40 to-cyan-600/40"></div>
          </div>
          
          <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-gray-800">
            <h4 className="text-2xl bg-gradient-to-r from-cyan-400 to-fuchsia-600 bg-clip-text text-transparent font-bold mb-6">Neo District Showroom</h4>
            
            <div className="space-y-6">
              <div>
                <h5 className="text-white text-sm tracking-wider mb-2 font-medium">LOCATION</h5>
                <address className="not-italic text-gray-400 space-y-1">
                  <p>Neo District, Block 512B</p>
                  <p>Night City, NC 77777</p>
                </address>
              </div>
              
              <div>
                <h5 className="text-white text-sm tracking-wider mb-2 font-medium">CONTACT</h5>
                <div className="text-gray-400 space-y-1">
                  <p>contact@lejardin.neo</p>
                  <p>+1 (777) 555-0123</p>
                </div>
              </div>
              
              <div>
                <h5 className="text-white text-sm tracking-wider mb-2 font-medium">HOURS</h5>
                <div className="grid grid-cols-2 gap-y-1 text-sm">
                  <span className="text-gray-400">MON - FRI:</span>
                  <span className="text-gray-300">10:00 - 22:00</span>
                  <span className="text-gray-400">SAT:</span>
                  <span className="text-gray-300">09:00 - 23:00</span>
                  <span className="text-gray-400">SUN:</span>
                  <span className="text-gray-300">10:00 - 18:00</span>
                </div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-cyan-500 to-fuchsia-600 text-white py-3 rounded-lg font-medium">
                GET DIRECTIONS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Footer */}
      <footer className="bg-black border-t border-gray-800 py-8 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-10 mb-10">
            <div>
              <div className="flex items-center mb-6">
                <div className="relative h-8 w-8 mr-3">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-lg blur opacity-70"></div>
                  <div className="relative flex items-center justify-center h-full z-10 font-bold text-white text-sm">LJ</div>
                </div>
                <h4 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-600 bg-clip-text text-transparent">
                  LE·JARDIN
                </h4>
              </div>
              <p className="text-gray-500 text-sm mb-6">
                Advanced botanical systems for the discerning technophile. Bringing nature and technology together since 2077.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-fuchsia-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-violet-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-2.102.144-6.784.144-8.883 0C5.282 16.736 5.017 15.622 5 12c.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0C18.718 7.264 18.982 8.378 19 12c-.018 3.629-.285 4.736-2.559 4.892zM10 9.658l4.917 2.338L10 14.342V9.658z" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h5 className="text-white font-medium mb-4 text-sm tracking-widest">COLLECTIONS</h5>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors text-sm">Neo Tropicals</a></li>
                <li><a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors text-sm">Aurora Blooms</a></li>
                <li><a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors text-sm">Synthwave Succulents</a></li>
                <li><a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors text-sm">Quantum Gardens</a></li>
                <li><a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors text-sm">Limited Editions</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-white font-medium mb-4 text-sm tracking-widest">INFORMATION</h5>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-500 hover:text-fuchsia-400 transition-colors text-sm">About Us</a></li>
                <li><a href="#" className="text-gray-500 hover:text-fuchsia-400 transition-colors text-sm">Sustainability</a></li>
                <li><a href="#" className="text-gray-500 hover:text-fuchsia-400 transition-colors text-sm">Biotech Research</a></li>
                <li><a href="#" className="text-gray-500 hover:text-fuchsia-400 transition-colors text-sm">Corporate Installations</a></li>
                <li><a href="#" className="text-gray-500 hover:text-fuchsia-400 transition-colors text-sm">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-white font-medium mb-4 text-sm tracking-widest">LEGAL</h5>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-500 hover:text-violet-400 transition-colors text-sm">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-500 hover:text-violet-400 transition-colors text-sm">Terms of Service</a></li>
                <li><a href="#" className="text-gray-500 hover:text-violet-400 transition-colors text-sm">Cookie Preferences</a></li>
                <li><a href="#" className="text-gray-500 hover:text-violet-400 transition-colors text-sm">Licensing</a></li>
              </ul>
            </div>
          </div>
          
          <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-800 to-transparent mb-8"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-xs">&copy; 2077 Le Jardin BioTech. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-600 hover:text-gray-400 transition-colors text-xs">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-gray-400 transition-colors text-xs">Terms of Service</a>
              <a href="#" className="text-gray-600 hover:text-gray-400 transition-colors text-xs">Cookie Preferences</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 