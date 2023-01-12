import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

function Navbar() {

  const [top, setTop] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);  

  const links = ['Home', 'About', 'Services', 'Portfolio']

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top && 'bg-white backdrop-blur-sm shadow-lg'}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="hidden sm:flex flex-shrink-0 mr-4 items-center gap-2">
            <img src={'/images/waves.png'} alt="TEST" className='w-7 h-7' />
            <h1 className='title-navbar' >
              Waves
            </h1>
          </div>
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-center sm:justify-end items-center">
              {
                links.map(link => (
                  <li className='font-medium text-gray-600 hover:text-blue-300 px-3 sm:px-5 py-3 flex items-center transition duration-150 ease-in-out cursor-pointer'>
                    <Link activeClass="text-blue-400" to={link.toLowerCase()} spy={true} smooth={true} offset={-75} duration={300}>
                      {link}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
