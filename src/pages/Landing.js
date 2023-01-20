import React, { useState } from 'react'
import { About } from '../features/About/About';
import { Footer } from '../features/Footer/Footer';
import { Home } from '../features/Home/Home';
import Navbar from '../features/Navbar/Navbar';
import { Portfolio } from '../features/Portfolio.js/Portfolio';
import { Services } from '../features/Services/Services';
import DarkThemeContext from '../helpers/context/DarkThemeContext';

export const Landing = () => {

  const [darkToggle, setDarkToggle] = useState(true)

  return (
    <DarkThemeContext.Provider value={{darkToggle, setDarkToggle}}>
      <div className={`flex flex-col min-h-screen overflow-hidden ${darkToggle && 'dark'}`}>
        <button onClick={() => setDarkToggle(!darkToggle)}
          className={`fixed fab-button bottom-10 right-8 block sm:hidden ${darkToggle ? 'bg-slate-800' : 'bg-gray-50'}  w-10 h-10 rounded-full drop-shadow-lg flex justify-center items-center`}>
            {darkToggle === true ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-indigo-200 cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400 cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
        </button>
        <main className="flex-grow">
          <Home />
          <About />
          <Services />
          <Portfolio />
          <Footer />
        </main>
        <Navbar />
      </div>
    </DarkThemeContext.Provider>
  );
}
