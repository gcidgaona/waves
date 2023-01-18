import React from 'react'
import { About } from '../features/About/About';
import { Footer } from '../features/Footer/Footer';
import { Home } from '../features/Home/Home';
import Navbar from '../features/Navbar/Navbar';
import { Portfolio } from '../features/Portfolio.js/Portfolio';
import { Services } from '../features/Services/Services';

export const Landing = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <main className="flex-grow">
        <Home />
        <About />
        <Services />
        <Portfolio />
        <Footer />
      </main>
      <Navbar />
    </div>
  );
}
