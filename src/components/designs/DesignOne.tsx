export default function DesignOne() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-800 font-serif">
      {/* Navigation */}
      <header className="border-b border-stone-200">
        <div className="container mx-auto flex justify-between items-center py-6 px-4">
          <h1 className="text-2xl tracking-widest uppercase">Le Jardin</h1>
          <nav className="hidden md:flex gap-8">
            <a href="#" className="hover:underline decoration-1 underline-offset-4">Collections</a>
            <a href="#" className="hover:underline decoration-1 underline-offset-4">Plants</a>
            <a href="#" className="hover:underline decoration-1 underline-offset-4">Flowers</a>
            <a href="#" className="hover:underline decoration-1 underline-offset-4">Accessories</a>
            <a href="#" className="hover:underline decoration-1 underline-offset-4">Care</a>
          </nav>
          <div className="flex gap-4 items-center">
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="sr-only">Cart</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto py-16 px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-5xl font-light">Bring nature's elegance to your space</h2>
          <p className="text-lg text-stone-600">
            Carefully curated plants and flowers to transform your home into a living sanctuary.
          </p>
          <button className="bg-emerald-700 text-white px-8 py-3 rounded-none hover:bg-emerald-800 transition">
            Explore Collection
          </button>
        </div>
        <div className="aspect-[4/5] bg-stone-200 relative">
          <div className="absolute inset-0 flex items-center justify-center text-stone-400">
            [Hero Image: Elegant Arrangement]
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl mb-12 text-center font-light tracking-wide">Shop by Category</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Indoor Plants", "Cut Flowers", "Planters", "Care Products"].map((category) => (
              <div key={category} className="group cursor-pointer">
                <div className="aspect-square bg-stone-100 mb-3 overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center text-stone-400">
                    [Image: {category}]
                  </div>
                  <div className="absolute inset-0 bg-emerald-800/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h4 className="text-center text-lg font-light">{category}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto py-16 px-4">
        <h3 className="text-2xl mb-12 text-center font-light tracking-wide">Seasonal Favorites</h3>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { name: "Monstera Deliciosa", price: "$65" },
            { name: "Peace Lily Bouquet", price: "$80" },
            { name: "Terracotta Planter Set", price: "$45" }
          ].map((product) => (
            <div key={product.name} className="group cursor-pointer">
              <div className="aspect-[3/4] bg-stone-100 mb-4 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-stone-400">
                  [Image: {product.name}]
                </div>
                <button className="absolute bottom-0 left-0 right-0 bg-white py-3 text-sm uppercase tracking-wider translate-y-full group-hover:translate-y-0 transition-transform">
                  Add to Cart
                </button>
              </div>
              <div className="flex justify-between items-baseline">
                <h4 className="font-light">{product.name}</h4>
                <span className="text-emerald-700">{product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-stone-100 py-20">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <svg className="w-10 h-10 mx-auto mb-6 text-stone-300" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <blockquote className="text-2xl font-light italic mb-8">
            "The plants from Le Jardin have transformed my apartment into a vibrant, peaceful retreat. Their care advice has been invaluable."
          </blockquote>
          <cite className="text-sm tracking-wide uppercase not-italic">— Marie Dubois, Paris</cite>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="container mx-auto py-16 px-4">
        <div className="flex items-center justify-center gap-4 mb-10">
          <h3 className="text-2xl font-light tracking-wide">Follow Our Journey</h3>
          <a href="#" className="text-emerald-700 flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
            </svg>
            @lejardin
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="aspect-square bg-stone-100 relative">
              <div className="absolute inset-0 flex items-center justify-center text-stone-400">
                [Instagram Image {item}]
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl mb-12 text-center font-light tracking-wide">Visit Our Boutique</h3>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="aspect-[4/3] bg-stone-100 relative rounded-sm shadow-sm">
              <div className="absolute inset-0 flex items-center justify-center text-stone-400">
                [Store Location Map]
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h4 className="text-xl mb-6 font-light">Le Jardin Fleuriste</h4>
              <address className="not-italic text-stone-600 mb-6">
                <p>123 Rue des Fleurs</p>
                <p>75004 Paris, France</p>
                <p className="mt-4">+33 1 23 45 67 89</p>
              </address>
              <div className="mb-6">
                <h5 className="font-medium mb-3">Opening Hours</h5>
                <ul className="space-y-1 text-stone-600">
                  <li className="flex justify-between max-w-xs">
                    <span>Monday - Friday</span>
                    <span>10:00 - 19:00</span>
                  </li>
                  <li className="flex justify-between max-w-xs">
                    <span>Saturday</span>
                    <span>09:00 - 20:00</span>
                  </li>
                  <li className="flex justify-between max-w-xs">
                    <span>Sunday</span>
                    <span>10:00 - 16:00</span>
                  </li>
                </ul>
              </div>
              <button className="bg-emerald-700 text-white px-8 py-3 self-start rounded-none hover:bg-emerald-800 transition">
                Get Directions
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Store Information */}
      <section className="bg-emerald-800 text-white py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-12">
          <div>
            <h4 className="text-xl mb-4 tracking-wide">Visit Our Boutique</h4>
            <address className="not-italic">
              <p>123 Rue des Fleurs</p>
              <p>75004 Paris, France</p>
              <p className="mt-4">+33 1 23 45 67 89</p>
            </address>
          </div>
          <div>
            <h4 className="text-xl mb-4 tracking-wide">Opening Hours</h4>
            <ul className="space-y-1">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span>10:00 - 19:00</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>09:00 - 20:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>10:00 - 16:00</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl mb-4 tracking-wide">Newsletter</h4>
            <p className="mb-4">Subscribe to receive updates on new arrivals and seasonal care tips.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 bg-emerald-900 text-white placeholder-emerald-300 flex-1"
              />
              <button type="submit" className="bg-white text-emerald-800 px-4">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-900 text-emerald-200 py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <p className="text-sm">&copy; 2023 Le Jardin. All rights reserved.</p>
            <div className="flex gap-4">
              {["Terms", "Privacy", "Shipping", "Returns"].map((item) => (
                <a key={item} href="#" className="text-sm hover:text-white">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
} 