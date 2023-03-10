import React, { useEffect } from 'react'
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import toast from 'react-hot-toast';
import { Emoji } from "react-apple-emojis"
import portfolioStr from './constants/portfolioStr';

export const Portfolio = () => {

  const {
    ERROR_OKANE,
    TITLE,
    PORTFOLIO
   } = portfolioStr;

  const controlTitle = useAnimation();
  const controlGrid = useAnimation();
  const [ref, inView] = useInView({threshold: 1});


  useEffect(() => {
    if (inView) {
        controlTitle.start({
            opacity: 1,
            transition: {
              delay: 0.4,
              duration: 0.5
            },
        })
        controlGrid.start({
          opacity: 1,
          transition: {
            delay: 0.6,
            duration: 0.5
          },
      })
    }
  }, [controlTitle, inView, controlGrid]);

  const openCryptics = () => {
    window.open('https://cryp-tics.netlify.app/', '_blank', 'noreferrer');
  }
  const openMiInversion = () => {
    window.open('https://ww2.banchileinversiones.cl/web/personas/nuevo-sitio-web?gclid=CjwKCAiAh9qdBhAOEiwAvxIok2IxdMmaQrf_P-lfZ7-IiDrYNNb3juUc1ot64mS6wNxRF84DGuEGbBoCmdsQAvD_BwE', '_blank', 'noreferrer');
  }

  const openOkane = () =>{
    toast(
      <div className='flex flex-row gap-4 items-center'>
        <div>
          <Emoji name="frowning-face" width={54} />
        </div>
        <p>
          {ERROR_OKANE}
        </p> 
      </div>
      , {
      duration: 4000,
    });
  }

  return (
    <div className='w-full h-fit md:h-screen flex flex-col items-center pb-4 pt-4 dark:bg-primary' id='portfolio'>
      <motion.div ref={ref} className='pt-12 flex items-center w-9/12 sm:w-7/12 mb-4' initial={{opacity: 0}} animate={controlTitle}>
        <h1 className='title'>{TITLE}</h1>
      </motion.div>
      <motion.div className='grid grid-cols-1 gap-2 md:gap-0 md:grid-cols-2 h-full pt-12 sm:pt-20' initial={{opacity: 0}} animate={controlGrid}>
          <div className='rounded-xl w-80 h-96 md:w-72 overflow-hidden'>
            <div className='col-span-2 w-full h-full cursor-pointer relative hover:scale-110 transition-transform' onClick={openCryptics}>
              <div class="opacity-0 hover:opacity-100 duration-300 bg-slate-700 bg-opacity-50 absolute inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold">
                {PORTFOLIO.CRYPTICS}
              </div>
              <img src={'/images/cryptics.png'} alt="TEST" className='absolute object-cover w-full h-full '/>
            </div>
          </div>
          <div className='flex flex-col gap-2 overflow-hidden'>
            <div className='w-80 h-48 overflow-hidden rounded-xl'>
              <div className='flex justify-center cursor-pointer items-center bg-mi-inversion h-full hover:scale-110 transition-transform relative' onClick={openMiInversion}>
                <img src={'/images/miinversion.png'} alt="TEST" className='w-44 h-44 absolute' />
                <div class="opacity-0 hover:opacity-100 duration-300 bg-slate-700 bg-opacity-50 absolute inset-0 z-10 flex justify-center items-center text-4xl text-white font-semibold">
                  {PORTFOLIO.MI_INVERSION}
                </div>
              </div>
            </div>
            <div className='w-80 h-48 overflow-hidden rounded-xl'>
              <div className=' flex justify-center items-center cursor-pointer h-full bg-red-200 hover:scale-110 transition-transform relative' onClick={openOkane}>
                <img src={'/images/Bitcoin.svg.png'} alt="TEST" className='w-24 h-24 absolute' />
                <div class="opacity-0 hover:opacity-100 duration-300 bg-slate-700 bg-opacity-50 absolute inset-0 z-10 flex justify-center items-center text-4xl text-white font-semibold">
                  {PORTFOLIO.OKANE}
                </div>
              </div>
            </div>
          </div>
      </motion.div>
    </div>
  )
}
