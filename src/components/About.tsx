import React from 'react';
const About = () => {
  return <section id="about" className="py-20 bg-[#F5F1E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <h2 className="text-sm md:text-base font-medium text-[#D4AF37] uppercase tracking-widest mb-3">
              Our Legacy
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-[#2E2E2E] mb-6">
              Four Generations of <br />
              <span className="text-[#D4AF37]">Craftsmanship Excellence</span>
            </h3>
            <div className="w-24 h-1 bg-[#D4AF37] mb-6"></div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Since 1947, Ratnakala has been synonymous with exceptional
              craftsmanship and unparalleled quality in fine jewelry. What began
              as a small family workshop in Jaipur has evolved into one of
              India's most respected jewelry houses, while maintaining our
              commitment to traditional techniques and ethical sourcing.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Each piece that bears our name represents the culmination of four
              generations of expertise, innovation, and artistic vision. Our
              master craftsmen, many of whom have been with us for decades,
              bring to life designs that honor India's rich jewelry heritage
              while embracing contemporary aesthetics.
            </p>
            <div className="flex items-center space-x-8 mt-8">
              <div className="text-center">
                <p className="text-4xl font-bold text-[#D4AF37]">75+</p>
                <p className="text-sm text-gray-600 mt-1">
                  Years of Excellence
                </p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-[#D4AF37]">5000+</p>
                <p className="text-sm text-gray-600 mt-1">Happy Clients</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-[#D4AF37]">100%</p>
                <p className="text-sm text-gray-600 mt-1">Ethical Sourcing</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img src="https://images.unsplash.com/photo-1618403088890-3d9ff6f4c8b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Jewelry craftsmanship" className="w-full h-48 object-cover rounded-sm shadow-lg" />
              <img src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Jewelry making" className="w-full h-64 object-cover rounded-sm shadow-lg" />
            </div>
            <div className="space-y-4 mt-8">
              <img src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Jewelry display" className="w-full h-64 object-cover rounded-sm shadow-lg" />
              <img src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Jewelry store" className="w-full h-48 object-cover rounded-sm shadow-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;