import React from 'react';
const Footer = () => {
  return <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h1 className="text-2xl font-bold tracking-wider mb-6">
              <span className="text-[#D4AF37]">YASH</span>
              <span>BROTHER</span>
            </h1>
            <p className="text-gray-400 mb-6">
              Exquisite jewelry crafted with passion, precision, and a deep
              respect for India's rich heritage.
            </p>
            <p className="text-gray-400">
              © {new Date().getFullYear()} Yash Brother Jewellers.
              <br />
              All rights reserved.
            </p>
          </div>
          <div>
            <h5 className="text-lg font-medium mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#collections" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                  Collections
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#custom" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                  Custom Design
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-medium mb-4">Collections</h5>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                  Bridal Collection
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                  Temple Jewelry
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                  Diamond Elegance
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                  Heritage Collection
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                  Gemstone Treasures
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-medium mb-4">Services</h5>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                  Custom Design
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                  Jewelry Cleaning
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                  Jewelry Valuation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                  Repair Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                  Jewelry Buyback
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              Designed with ♥ for the love of Indian craftsmanship
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm">
                Shipping Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;