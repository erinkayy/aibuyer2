export default function Home() {
  return (
    <div className="min-h-screen bg-amber-50 font-sans">
      {/* Sticky Header */}
      <header className="fixed w-full z-50 bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="flex justify-between items-center px-4 py-3">
          <div className="relative h-12 w-12 rounded-full bg-rose-600 flex items-center justify-center">
            <span className="font-bold text-white text-xl">LJ</span>
          </div>
          
          <button className="bg-rose-600 text-white px-3 py-1 rounded-full text-sm">
            Cart (0)
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Banner */}
        <section className="pt-20 pb-10 px-4 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-lime-300 rounded-full opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-rose-400 rounded-full opacity-20"></div>
          
          <h1 className="text-5xl font-bold text-rose-600 mt-16 leading-tight">
            Le Jardin
            <br />
            <span className="text-lime-700">Fleuriste</span>
          </h1>
          
          <p className="mt-4 text-slate-700 max-w-xs">
            Bringing the beauty of nature to your doorstep since 2005
          </p>
          
          <div className="mt-10 flex gap-3">
            <button className="bg-rose-600 text-white px-6 py-3 rounded-full font-medium">
              Shop Plants
            </button>
            <button className="bg-lime-600 text-white px-6 py-3 rounded-full font-medium">
              Shop Flowers
            </button>
          </div>
        </section>

        {/* Featured Collection */}
        <section className="py-10 px-4">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-3xl font-bold text-slate-800">The Spring Collection</h2>
            <a href="#" className="text-rose-600 underline decoration-dashed underline-offset-4">View all</a>
          </div>
          
          <div className="relative h-80 rounded-3xl overflow-hidden bg-lime-100 mb-6">
            <div className="absolute inset-0 flex items-center justify-center text-slate-400">
              [Feature Image: Spring Collection]
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
              <h3 className="text-white text-2xl font-bold">Spring Euphoria</h3>
              <p className="text-white/70">Vibrant tulips and daffodils</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-amber-100 rounded-3xl p-4 relative aspect-square">
              <div className="absolute inset-0 flex items-center justify-center text-slate-400 m-4">
                [Image: Tulips]
              </div>
              <div className="absolute bottom-4 left-4">
                <h4 className="font-medium">Tulip Bundle</h4>
                <p className="text-rose-600 font-bold">$24.99</p>
              </div>
            </div>
            <div className="bg-lime-100 rounded-3xl p-4 relative aspect-square">
              <div className="absolute inset-0 flex items-center justify-center text-slate-400 m-4">
                [Image: Daffodils]
              </div>
              <div className="absolute bottom-4 left-4">
                <h4 className="font-medium">Daffodil Set</h4>
                <p className="text-rose-600 font-bold">$19.99</p>
              </div>
            </div>
          </div>
        </section>

        {/* Plant Care Tips */}
        <section className="bg-white py-12 px-4">
          <div className="bg-lime-50 rounded-3xl p-6 relative">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
              <svg className="w-6 h-6 text-lime-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Plant Care Tip of the Day
            </h2>
            
            <p className="text-slate-700 mb-8">
              Water your orchids with ice cubes instead of liquid water to ensure slow and even moisture distribution.
            </p>
            
            <button className="bg-lime-600 text-white px-5 py-2 rounded-full text-sm inline-flex items-center">
              More Tips
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            <div className="absolute -top-4 -right-2 w-20 h-20 bg-lime-300 rounded-full opacity-30"></div>
          </div>
        </section>

        {/* Categories Slider */}
        <section className="py-12 px-4">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">Explore Categories</h2>
          
          <div className="flex overflow-x-auto gap-4 pb-4 snap-x">
            {["Indoor Plants", "Bouquets", "Planters", "Accessories", "Gift Sets"].map((category, idx) => (
              <div 
                key={category} 
                className="min-w-[200px] h-40 rounded-2xl flex-shrink-0 snap-start relative overflow-hidden"
                style={{ backgroundColor: ['#fecaca', '#d9f99d', '#bfdbfe', '#fef3c7', '#ddd6fe'][idx % 5] }}
              >
                <div className="absolute inset-0 flex items-center justify-center text-slate-500">
                  [Image: {category}]
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black/30 text-white p-3">
                  <p className="font-medium">{category}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Instagram Feed */}
        <section className="py-10 px-4 bg-rose-50">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-slate-800">
              <span className="text-rose-600">#</span>LeJardinFlowers
            </h2>
            <a href="#" className="text-rose-600 font-medium flex items-center">
              Follow Us
              <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
              </svg>
            </a>
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="aspect-square bg-rose-100 rounded-xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                  [Instagram Image {item}]
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-12 px-4">
          <div className="bg-white rounded-3xl p-6 shadow-lg relative">
            <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center absolute -top-6 left-6">
              <svg className="w-6 h-6 text-rose-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            
            <p className="text-slate-700 mb-4 mt-4">
              "Le Jardin has the most beautiful selection of plants I've ever seen. Their arrangements always brighten my day!"
            </p>
            
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-amber-200 mr-3">
                <div className="flex items-center justify-center h-full text-slate-400">
                  [Photo]
                </div>
              </div>
              <div>
                <p className="font-medium">Sophie Martin</p>
                <p className="text-slate-500 text-sm">Customer since 2018</p>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="bg-rose-600 py-12 px-4 text-white">
          <h2 className="text-2xl font-bold mb-3">Join Our Garden Club</h2>
          <p className="mb-6 text-rose-100">
            Get exclusive offers, seasonal tips, and early access to new collections.
          </p>
          
          <form className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Your name"
              className="px-4 py-3 rounded-full bg-rose-700 text-white placeholder:text-rose-300 border border-rose-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-3 rounded-full bg-rose-700 text-white placeholder:text-rose-300 border border-rose-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button type="submit" className="bg-white text-rose-600 font-bold py-3 rounded-full">
              Subscribe Now
            </button>
          </form>
        </section>

        {/* Store Location */}
        <section className="py-10 px-4">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Visit Our Store</h2>
          
          <div className="bg-slate-200 rounded-3xl h-48 mb-4 relative">
            <div className="absolute inset-0 flex items-center justify-center text-slate-500">
              [Map Location]
            </div>
          </div>
          
          <div className="bg-white rounded-3xl p-5 shadow-md">
            <h3 className="font-bold text-lg text-rose-600">Le Jardin Fleuriste</h3>
            <address className="not-italic mt-2 text-slate-700">
              <p>123 Rue des Fleurs, 75004 Paris, France</p>
              <p className="mt-1">+33 1 23 45 67 89</p>
            </address>
            
            <div className="mt-4">
              <h4 className="font-medium mb-2">Hours:</h4>
              <div className="grid grid-cols-2 gap-y-1 text-sm">
                <span>Monday - Friday:</span>
                <span>10:00 - 19:00</span>
                <span>Saturday:</span>
                <span>09:00 - 20:00</span>
                <span>Sunday:</span>
                <span>10:00 - 16:00</span>
              </div>
            </div>
            
            <button className="mt-4 bg-lime-600 text-white w-full py-2 rounded-full">
              Get Directions
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 px-4">
        <div className="flex justify-between items-center mb-6">
          <div className="relative h-12 w-12 rounded-full bg-rose-600 flex items-center justify-center">
            <span className="font-bold text-white text-xl">LJ</span>
          </div>
          
          <div className="flex gap-3">
            <a href="#" className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
              </svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.07l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 text-sm mb-6">
          <a href="#" className="text-slate-300 hover:text-white">Shop</a>
          <a href="#" className="text-slate-300 hover:text-white">About Us</a>
          <a href="#" className="text-slate-300 hover:text-white">Plant Care</a>
          <a href="#" className="text-slate-300 hover:text-white">Contact</a>
          <a href="#" className="text-slate-300 hover:text-white">Delivery</a>
          <a href="#" className="text-slate-300 hover:text-white">Returns</a>
        </div>
        
        <p className="text-xs text-slate-400 pt-4 border-t border-slate-800">
          &copy; 2023 Le Jardin Fleuriste. All rights reserved.
        </p>
      </footer>
    </div>
  );
} 