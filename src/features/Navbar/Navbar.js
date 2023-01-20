import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-scroll';
import DarkThemeContext from '../../helpers/context/DarkThemeContext';

function Navbar() {

  const [top, setTop] = useState(true);
  const { darkToggle, setDarkToggle } = useContext(DarkThemeContext)

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);  

  const links = ['Inicio', 'Nosotros', 'Servicios', 'Portafolio']

  const getRoute = (link) => {
    const routes = {
      'Inicio': 'home',
      'Nosotros': 'about', 
      'Servicios': 'services', 
      'Portafolio': 'portfolio'
    }
    return routes[link]
  }

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90  transition duration-300 ease-in-out ${!top && 'bg-white dark:bg-secondary dark:bg-opacity-90 backdrop-blur-sm shadow-lg'}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="hidden sm:flex flex-shrink-0 mr-4 items-center gap-2">
            <img src={'/images/waves.png'} alt="TEST" className='w-7 h-7' />
            <h1 className='title-navbar' >
              Waves
            </h1>
          </div>
          <nav className="flex flex-grow items-center">
            <ul className="flex flex-grow justify-center sm:justify-end items-center">
              {
                links.map(link => (
                  <li className='font-medium text-gray-600 hover:text-blue-300 px-3 sm:px-5 py-3 flex items-center transition duration-150 ease-in-out cursor-pointer'>
                    <Link activeClass="text-blue-400" to={getRoute(link)} spy={true} smooth={true} offset={-75} duration={300}>
                      {link}
                    </Link>
                  </li>
                ))
              }
            </ul>
            <div className='hidden sm:block'>
              {darkToggle === true ? (
                <svg
                  onClick={() => setDarkToggle(false)}
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
                  onClick={() => setDarkToggle(true)}
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
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
