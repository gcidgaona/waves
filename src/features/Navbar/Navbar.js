import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import ViewContext from '../../helpers/context/ViewContext';

function Navbar() {

  const [top, setTop] = useState(true);
  const { actualView } = useContext(ViewContext)

  // detect whether user has scrolled the page down by 10px 
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);  

  const links = ['Home', 'About', 'Services', 'Portfolio']

  const setStyleActive = (link) => {
    if(link.toLowerCase() === actualView) return 'text-blue-400'
    return 'text-gray-600'
  }
  
  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top && 'bg-white backdrop-blur-sm shadow-lg'}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          <div className="flex-shrink-0 mr-4 flex items-center gap-2">
            <img src={'/images/waves.png'} alt="TEST" className='w-7 h-7' />
              <h1 className='title-navbar'>
                Waves
              </h1>
          </div>

          {/* Site navigation */}
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              {
                links.map(link => (
                  <li className={`font-medium hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out ${setStyleActive(link)}`}>
                    {/* <Link to="/signin" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Sign in</Link> */}
                    {link}
                  </li>
                ))
              }
f3`` */}
            </ul>

          </nav>

        </div>
      </div>
    </header>
  );
}

export default Navbar;
