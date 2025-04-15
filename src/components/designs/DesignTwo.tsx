'use client';

import { useState, useEffect } from 'react';

export default function DesignTwo() {
  // Animation for the marquee effect
  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-amber-50 font-sans overflow-hidden">
      {/* Sticky Header */}
      <header className="fixed w-full z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-tr from-rose-600 to-lime-500 rounded-full blur-sm opacity-70"></div>
                <div className="relative h-12 w-12 rounded-full bg-gradient-to-tr from-rose-500 to-rose-600 flex items-center justify-center">
                  <span className="font-bold text-white text-xl">LJ</span>
                </div>
              </div>
            </div>
            
            <nav className="flex items-center">
              <div className="flex space-x-6">
                <a href="#" className="text-gray-700 hover:text-rose-600 transition-colors font-semibold text-sm">Collections</a>
                <a href="#" className="text-gray-700 hover:text-rose-600 transition-colors font-semibold text-sm">Plants</a>
                <a href="#" className="text-gray-700 hover:text-rose-600 transition-colors font-semibold text-sm">Flowers</a>
                <a href="#" className="text-gray-700 hover:text-rose-600 transition-colors font-semibold text-sm">Accessories</a>
                <a href="#" className="text-gray-700 hover:text-rose-600 transition-colors font-semibold text-sm">Care</a>
              </div>
            </nav>
            
            <div className="flex items-center gap-4">
              <button className="text-gray-700 hover:text-rose-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-rose-600 to-rose-400 rounded-full blur-sm opacity-70 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-rose-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-rose-500 transition-colors">
                  Cart (0)
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Container to create space for fixed header */}
      <div className="h-24"></div>

      {/* Sale Announcement Bar */}
      <div className="bg-gradient-to-r from-lime-500 to-lime-400 text-white py-2 px-4 text-center font-bold text-sm uppercase tracking-wider shadow-inner">
        20% OFF HECK YEAH!! Our Spring Sale is here!
      </div>

      {/* Text Marquee */}
      <div className="overflow-hidden bg-gradient-to-r from-rose-500 to-rose-600 text-white py-3 whitespace-nowrap shadow-lg">
        <div className="animate-marquee inline-block">
          <span className="text-lg font-bold px-4">Fresh flowers, delivered daily</span>
          <span className="text-lg px-4">•</span>
          <span className="text-lg font-bold px-4">Family owned since 2005</span>
          <span className="text-lg px-4">•</span>
          <span className="text-lg font-bold px-4">Sustainably sourced</span>
          <span className="text-lg px-4">•</span>
          <span className="text-lg font-bold px-4">Local varieties</span>
          <span className="text-lg px-4">•</span>
          <span className="text-lg font-bold px-4">Fresh flowers, delivered daily</span>
          <span className="text-lg px-4">•</span>
          <span className="text-lg font-bold px-4">Family owned since 2005</span>
        </div>
      </div>

      {/* Hero Banner */}
      <section className="pt-16 pb-20 px-6 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-lime-300 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-rose-400 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        
        <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-rose-600 via-rose-500 to-rose-700 mt-12 leading-tight max-w-2xl mx-auto text-center">
          Le Jardin
          <span className="block text-transparent bg-clip-text bg-gradient-to-br from-lime-600 via-lime-500 to-lime-700">Fleuriste</span>
        </h1>
        
        <p className="mt-6 text-slate-700 max-w-md mx-auto text-center text-lg font-light">
          Bringing the beauty of nature to your doorstep since 2005
        </p>
        
        <div className="mt-12 flex gap-5 justify-center">
          <button className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-br from-rose-600 to-rose-400 rounded-full blur opacity-80 group-hover:opacity-100 transition duration-200"></div>
            <div className="relative bg-rose-600 text-white px-8 py-4 rounded-full font-bold hover:bg-rose-500 transition-all hover:scale-105 transform">
              Shop Plants
            </div>
          </button>
          <button className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-br from-lime-600 to-lime-400 rounded-full blur opacity-80 group-hover:opacity-100 transition duration-200"></div>
            <div className="relative bg-lime-600 text-white px-8 py-4 rounded-full font-bold hover:bg-lime-500 transition-all hover:scale-105 transform">
              Shop Flowers
            </div>
          </button>
        </div>
      </section>

      {/* Products with Graza-style layout */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-32 bg-gradient-to-b from-amber-50 to-transparent z-10"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-amber-200 rounded-full opacity-30 blur-3xl"></div>
        
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-rose-700 to-rose-500 inline-block mb-3">OUR BESTSELLERS</h2>
          <div className="h-1 w-24 bg-lime-500 mx-auto rounded-full"></div>
          <p className="text-lg text-slate-600 mt-4 italic font-light">Fresh is best!</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
          {/* Product 1 */}
          <div className="group">
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-400 to-rose-600"></div>
              <div className="aspect-square bg-rose-50 rounded-2xl overflow-hidden relative mb-6 group-hover:shadow-md transition-all">
                <div className="absolute inset-0 flex items-center justify-center text-slate-500">
                  [Image: Spring Bouquet]
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-rose-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h3 className="font-bold text-2xl text-rose-700">"Bloom" Spring Bouquet</h3>
              <p className="text-rose-600 font-extrabold text-2xl mt-2">$45</p>
              <p className="text-slate-600 mt-3 font-light">Vibrant collection of seasonal blooms</p>
              <button className="mt-6 w-full bg-gradient-to-r from-rose-500 to-rose-600 text-white font-bold py-3 rounded-full hover:from-rose-600 hover:to-rose-700 transition-all shadow-md">
                Add to Cart
              </button>
            </div>
          </div>
          
          {/* Product 2 */}
          <div className="group mt-8 md:mt-0">
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-lime-400 to-lime-600"></div>
              <div className="aspect-square bg-lime-50 rounded-2xl overflow-hidden relative mb-6 group-hover:shadow-md transition-all">
                <div className="absolute inset-0 flex items-center justify-center text-slate-500">
                  [Image: Succulent Set]
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-lime-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h3 className="font-bold text-2xl text-lime-700">"Verde" Succulent Set</h3>
              <p className="text-lime-600 font-extrabold text-2xl mt-2">$35</p>
              <p className="text-slate-600 mt-3 font-light">Low-maintenance plants for your space</p>
              <button className="mt-6 w-full bg-gradient-to-r from-lime-500 to-lime-600 text-white font-bold py-3 rounded-full hover:from-lime-600 hover:to-lime-700 transition-all shadow-md">
                Add to Cart
              </button>
            </div>
          </div>
          
          {/* Product 3 */}
          <div className="group mt-8 md:mt-4">
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-amber-600"></div>
              <div className="aspect-square bg-amber-50 rounded-2xl overflow-hidden relative mb-6 group-hover:shadow-md transition-all">
                <div className="absolute inset-0 flex items-center justify-center text-slate-500">
                  [Image: Rose Bundle]
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-amber-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h3 className="font-bold text-2xl text-amber-700">"Amore" Rose Bundle</h3>
              <p className="text-rose-600 font-extrabold text-2xl mt-2">$50</p>
              <p className="text-slate-600 mt-3 font-light">Classic roses in premium packaging</p>
              <button className="mt-6 w-full bg-gradient-to-r from-rose-500 to-rose-600 text-white font-bold py-3 rounded-full hover:from-rose-600 hover:to-rose-700 transition-all shadow-md">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Fun Facts Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-rose-100 to-rose-50 relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-white rounded-full opacity-70 blur-2xl"></div>
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white rounded-full opacity-70 blur-2xl"></div>
        
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-rose-500 mb-10 text-center relative z-10">Did You Know?</h2>
        
        <div className="max-w-xl mx-auto">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-rose-200 to-lime-200 rounded-2xl blur-lg opacity-80"></div>
            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-rose-500 to-lime-500 rounded-full p-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-xl italic text-slate-700 leading-relaxed">
                "Roses can live for over 35 years with proper care. That's a lot of birthdays!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="bg-gradient-to-r from-lime-500 to-lime-400 py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOHY2YzYuNjMgMCAxMiA1LjM3IDEyIDEyaC02YzAgNi42MyA1LjM3IDEyIDEyIDEyIDYuNjMgMCAxMi01LjM3IDEyLTEyaC02eiIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIi8+PC9nPjwvc3ZnPg==')] bg-center opacity-10"></div>
        
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6 leading-tight">Made by people who take flowers <span className="italic">very</span> seriously.</h2>
          <button className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-white to-lime-100 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-200"></div>
            <div className="relative bg-white text-lime-600 font-bold py-4 px-10 rounded-full hover:bg-lime-50 transition-colors text-lg">
              Learn More About Us
            </div>
          </button>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-20 px-6 bg-gradient-to-b from-rose-50 to-white relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-rose-100 rounded-full opacity-50 blur-3xl"></div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-slate-800">
              <span className="text-rose-600 text-4xl mr-1">#</span>LeJardinFlowers
            </h2>
            <a href="#" className="text-rose-600 font-medium flex items-center group">
              <span className="group-hover:underline">Follow Us</span>
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
              </svg>
            </a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((item, index) => (
              <div 
                key={item} 
                className={`aspect-square bg-white rounded-2xl overflow-hidden relative hover:scale-[0.98] transition-transform shadow-lg ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
              >
                <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                  [Instagram Image {item}]
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-4 text-white">
                    <svg className="w-6 h-6 mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
                    </svg>
                    <p className="text-sm font-light">View on Instagram</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gradient-to-br from-rose-600 to-rose-500 py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIiBjeD0iMzAiIGN5PSIzMCIgcj0iMTUiLz48L2c+PC9zdmc+')] bg-center opacity-20"></div>
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-rose-400 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-rose-400 rounded-full opacity-50 blur-3xl"></div>
        
        <div className="relative z-10 max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-3">Join Our Garden Club</h2>
          <p className="mb-8 text-rose-100 font-light text-lg">
            Get exclusive offers, seasonal tips, and early access to new collections.
          </p>
          
          <form className="space-y-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-6 py-4 rounded-full bg-rose-700/50 text-white placeholder:text-rose-200 border border-rose-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all"
              />
            </div>
            <div className="relative">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-6 py-4 rounded-full bg-rose-700/50 text-white placeholder:text-rose-200 border border-rose-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all"
              />
            </div>
            <button type="submit" className="relative group w-full">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-white to-rose-100 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-200"></div>
              <div className="relative bg-white text-rose-600 font-bold py-4 rounded-full hover:bg-rose-50 transition-colors text-lg">
                Subscribe Now
              </div>
            </button>
          </form>
        </div>
      </section>

      {/* Store Location */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-lime-100 rounded-full opacity-30 blur-3xl"></div>
        
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-slate-800 mb-10 text-center">Visit Our Store</h2>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-5 gap-6">
            <div className="md:col-span-3 bg-slate-200 rounded-3xl h-80 relative overflow-hidden shadow-lg">
              <div className="absolute inset-0 flex items-center justify-center text-slate-500">
                [Map Location]
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            <div className="md:col-span-2">
              <div className="bg-white rounded-3xl p-6 shadow-lg h-full relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-400 to-lime-400"></div>
                
                <h3 className="font-bold text-xl text-rose-600 mb-4">Le Jardin Fleuriste</h3>
                <address className="not-italic mt-2 text-slate-700">
                  <p>123 Rue des Fleurs, 75004 Paris, France</p>
                  <p className="mt-2 flex items-center">
                    <svg className="w-4 h-4 mr-2 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +33 1 23 45 67 89
                  </p>
                </address>
                
                <div className="mt-6">
                  <h4 className="font-medium mb-3 flex items-center">
                    <svg className="w-4 h-4 mr-2 text-lime-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Hours:
                  </h4>
                  <div className="grid grid-cols-2 gap-y-1 text-sm text-slate-600">
                    <span>Monday - Friday:</span>
                    <span className="font-medium">10:00 - 19:00</span>
                    <span>Saturday:</span>
                    <span className="font-medium">09:00 - 20:00</span>
                    <span>Sunday:</span>
                    <span className="font-medium">10:00 - 16:00</span>
                  </div>
                </div>
                
                <button className="mt-6 w-full bg-gradient-to-r from-lime-500 to-lime-600 text-white py-3 rounded-full font-medium hover:from-lime-600 hover:to-lime-700 transition-all shadow-md flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOHY2YzYuNjMgMCAxMiA1LjM3IDEyIDEyaC02YzAgNi42MyA1LjM3IDEyIDEyIDEyIDYuNjMgMCAxMi01LjM3IDEyLTEyaC02eiIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKSIvPjwvZz48L3N2Zz4=')] bg-center"></div>
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-lime-500/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex justify-between items-center mb-12 border-b border-white/10 pb-8">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-tr from-rose-600 to-lime-500 rounded-full blur-sm opacity-70"></div>
              <div className="relative h-14 w-14 rounded-full bg-gradient-to-tr from-rose-500 to-rose-600 flex items-center justify-center">
                <span className="font-bold text-white text-2xl">LJ</span>
              </div>
            </div>
            
            <div className="flex gap-4">
              <a href="#" className="group">
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-tr from-rose-600 to-rose-400 rounded-full blur opacity-0 group-hover:opacity-70 transition duration-300"></div>
                  <div className="relative w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <span className="sr-only">Instagram</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
                    </svg>
                  </div>
                </div>
              </a>
              <a href="#" className="group">
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-tr from-lime-600 to-lime-400 rounded-full blur opacity-0 group-hover:opacity-70 transition duration-300"></div>
                  <div className="relative w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <span className="sr-only">Twitter</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </div>
                </div>
              </a>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-gray-400 mb-4">&copy; 2023 Le Jardin Fleuriste. All rights reserved.</p>
            <div className="flex justify-center gap-8 mt-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 