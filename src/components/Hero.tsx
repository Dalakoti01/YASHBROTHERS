import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import toast from 'react-hot-toast';
const Hero = () => {
  const handleExplore = () => {
    toast.success('Exploring our exclusive collections', {
      style: {
        border: '1px solid #D4AF37',
        padding: '16px',
        color: '#2E2E2E'
      },
      iconTheme: {
        primary: '#D4AF37',
        secondary: '#FFFFFF'
      }
    });
  };
  return <section id="home" className="relative w-full h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <img src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Luxury jewelry display" className="w-full h-full object-cover" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-2xl">
          <h2 className="text-sm md:text-base font-bold font-medium text-[#D4AF37] uppercase tracking-widest mb-3">
            Timeless Elegance
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Exquisite Jewelry <br />
            <span className="text-[#D4AF37]">For Generations</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-lg">
            Discover our handcrafted masterpieces that blend traditional Indian
            craftsmanship with contemporary designs.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <button onClick={handleExplore} className="bg-[#D4AF37] text-white px-8 py-3 rounded-sm flex items-center justify-center space-x-2 hover:bg-opacity-90 transition-all">
              <span>Explore Collections</span>
              <ArrowRightIcon size={18} />
            </button>
            <a href="#custom" className="border border-white text-white px-8 py-3 rounded-sm flex items-center justify-center hover:bg-white hover:bg-opacity-10 transition-all">
              Custom Design
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a href="#collections" className="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>;
};
export default Hero;