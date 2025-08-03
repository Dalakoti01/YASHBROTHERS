import React, { useEffect, useState } from 'react';
import { MenuIcon, X as CloseIcon, ShoppingBagIcon, PhoneIcon } from 'lucide-react';
import toast from 'react-hot-toast';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleAppointment = () => {
    toast.success("Appointment request received. We'll contact you shortly.", {
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
  return <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-black bg-opacity-95 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-2xl md:text-3xl font-bold tracking-wider">
              <span className="text-[#D4AF37]">YASH</span>
              <span>BROTHER</span>
            </h1>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="hover:text-[#D4AF37] transition-colors duration-300">
              Home
            </a>
            <a href="#collections" className="hover:text-[#D4AF37] transition-colors duration-300">
              Collections
            </a>
            <a href="#about" className="hover:text-[#D4AF37] transition-colors duration-300">
              About Us
            </a>
            <a href="#custom" className="hover:text-[#D4AF37] transition-colors duration-300">
              Custom Design
            </a>
            <a href="#contact" className="hover:text-[#D4AF37] transition-colors duration-300">
              Contact
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <button onClick={handleAppointment} className="bg-[#D4AF37] text-white px-4 py-2 rounded flex items-center space-x-2 hover:bg-opacity-90 transition-all">
              <PhoneIcon size={16} />
              <span>Book Appointment</span>
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
              {isOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && <div className="md:hidden bg-black bg-opacity-95 text-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-base font-medium hover:text-[#D4AF37]">
              Home
            </a>
            <a href="#collections" className="block px-3 py-2 text-base font-medium hover:text-[#D4AF37]">
              Collections
            </a>
            <a href="#about" className="block px-3 py-2 text-base font-medium hover:text-[#D4AF37]">
              About Us
            </a>
            <a href="#custom" className="block px-3 py-2 text-base font-medium hover:text-[#D4AF37]">
              Custom Design
            </a>
            <a href="#contact" className="block px-3 py-2 text-base font-medium hover:text-[#D4AF37]">
              Contact
            </a>
            <button onClick={handleAppointment} className="w-full mt-4 bg-[#D4AF37] text-white px-4 py-2 rounded flex items-center justify-center space-x-2">
              <PhoneIcon size={16} />
              <span>Book Appointment</span>
            </button>
          </div>
        </div>}
    </nav>;
};
export default Navbar;