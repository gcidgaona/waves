import React from 'react'
import { About } from '../features/About/About';
import { Footer } from '../features/Footer/Footer';
import { Home } from '../features/Home/Home';
import Navbar from '../features/Navbar/Navbar';
import { Portfolio } from '../features/Portfolio.js/Portfolio';
import { Services } from '../features/Services/Services';
import { Steps } from '../features/Steps/Steps';

export const Landing = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      {/* <Header /> */}

      {/*  Page content */}
      <main className="flex-grow">

        <Home />
        <About />
        <Services />
        {/* <Steps /> */}
        <Portfolio />
        <Footer />
        {/*  Page sections */}
        {/* <HeroHome />
        <FeaturesHome />
        <FeaturesBlocks />
        <Testimonials />
        <Newsletter /> */}

      </main>

      <Navbar />

      {/*  Site footer */}
      {/* <Footer /> */}

    </div>
  );
}
