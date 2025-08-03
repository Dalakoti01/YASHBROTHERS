import React, { useState } from 'react';
import { CheckIcon } from 'lucide-react';
import toast from 'react-hot-toast';
const CustomDesign = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [description, setDescription] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    toast.success('Your custom design request has been submitted. Our design team will contact you shortly.', {
      duration: 5000,
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
    // Reset form
    setName('');
    setEmail('');
    setPhone('');
    setDescription('');
  };
  return <section id="custom" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 lg:pr-16 mb-10 lg:mb-0">
            <h2 className="text-sm md:text-base font-medium text-[#D4AF37] uppercase tracking-widest mb-3">
              Bespoke Creations
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Your Vision, <br />
              <span className="text-[#D4AF37]">Our Craftsmanship</span>
            </h3>
            <div className="w-24 h-1 bg-[#D4AF37] mb-8"></div>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Turn your dream jewelry into reality with our custom design
              service. Whether it's a unique engagement ring, a special
              anniversary gift, or a family heirloom reimagined, our master
              craftsmen will work closely with you to create a piece that tells
              your story.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-[#D4AF37] rounded-full p-1">
                  <CheckIcon className="h-5 w-5 text-white" />
                </div>
                <div className="ml-3">
                  <h4 className="text-lg font-medium">Personal Consultation</h4>
                  <p className="text-gray-400">
                    One-on-one sessions with our design experts
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-[#D4AF37] rounded-full p-1">
                  <CheckIcon className="h-5 w-5 text-white" />
                </div>
                <div className="ml-3">
                  <h4 className="text-lg font-medium">Detailed Sketches</h4>
                  <p className="text-gray-400">
                    Visual representations of your custom piece
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-[#D4AF37] rounded-full p-1">
                  <CheckIcon className="h-5 w-5 text-white" />
                </div>
                <div className="ml-3">
                  <h4 className="text-lg font-medium">Expert Craftsmanship</h4>
                  <p className="text-gray-400">
                    Handcrafted by our master artisans
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-[#D4AF37] rounded-full p-1">
                  <CheckIcon className="h-5 w-5 text-white" />
                </div>
                <div className="ml-3">
                  <h4 className="text-lg font-medium">Lifetime Guarantee</h4>
                  <p className="text-gray-400">
                    Quality assurance for generations to come
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 bg-[#2E2E2E] rounded-sm p-8 shadow-xl">
            <h4 className="text-2xl font-bold mb-6 text-center">
              Request Custom Design
            </h4>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Your Name
                </label>
                <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37] text-white" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email Address
                </label>
                <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37] text-white" required />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                  Phone Number
                </label>
                <input type="tel" id="phone" value={phone} onChange={e => setPhone(e.target.value)} className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37] text-white" required />
              </div>
              <div className="mb-6">
                <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-1">
                  Design Description
                </label>
                <textarea id="description" value={description} onChange={e => setDescription(e.target.value)} rows={4} className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37] text-white" required></textarea>
              </div>
              <button type="submit" className="w-full bg-[#D4AF37] text-white py-3 rounded-sm hover:bg-opacity-90 transition-all font-medium">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>;
};
export default CustomDesign;