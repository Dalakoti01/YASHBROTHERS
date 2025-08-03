import React from 'react';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedCollections from './components/FeaturedCollections';
import About from './components/About';
import CustomDesign from './components/CustomDesign';
import Contact from './components/Contact';
import Footer from './components/Footer';
export function App() {
  return <div className="font-serif bg-[#F5F1E8] text-[#2E2E2E] w-full min-h-screen">
      <Toaster position="top-center" />
      <Navbar />
      <main>
        <Hero />
        <FeaturedCollections />
        <About />
        <CustomDesign />
        <Contact />
      </main>
      <Footer />
    </div>;
}