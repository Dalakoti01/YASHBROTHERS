import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import toast from 'react-hot-toast';
const collections = [{
  id: 1,
  name: 'Bridal Collection',
  description: 'Traditional and contemporary designs for the modern Indian bride.',
  image: 'https://images.unsplash.com/photo-1611107683227-e9060eccd846?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  color: 'bg-[#9B111E]'
}, {
  id: 2,
  name: 'Temple Jewelry',
  description: 'Inspired by ancient temple art and South Indian traditions.',
  image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  color: 'bg-[#046307]'
}, {
  id: 3,
  name: 'Diamond Elegance',
  description: 'Premium diamond jewelry for special occasions and everyday luxury.',
  image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  color: 'bg-[#0F52BA]'
}, {
  id: 4,
  name: 'Heritage Collection',
  description: "Timeless pieces that celebrate India's rich jewelry heritage.",
  image: 'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  color: 'bg-[#B76E79]'
}];
const FeaturedCollections = () => {
  const handleViewCollection = name => {
    toast.success(`Viewing the ${name}`, {
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
  return <section id="collections" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm md:text-base font-medium text-[#D4AF37] uppercase tracking-widest mb-3">
            Our Exclusive Collections
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-[#2E2E2E]">
            Discover Timeless Beauty
          </h3>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-6"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {collections.map(collection => <div key={collection.id} className="group relative overflow-hidden rounded-sm shadow-lg">
              <div className="relative h-80 overflow-hidden">
                <img src={collection.image} alt={collection.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300"></div>
                <div className={`absolute bottom-0 left-0 right-0 ${collection.color} h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
              </div>
              <div className="p-6 bg-white">
                <h4 className="text-xl font-semibold mb-2">
                  {collection.name}
                </h4>
                <p className="text-gray-600 mb-4">{collection.description}</p>
                <button onClick={() => handleViewCollection(collection.name)} className="flex items-center text-[#D4AF37] font-medium hover:text-[#2E2E2E] transition-colors">
                  <span>View Collection</span>
                  <ArrowRightIcon size={16} className="ml-2" />
                </button>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default FeaturedCollections;