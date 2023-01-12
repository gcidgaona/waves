import React, { useEffect } from 'react'
import { Blob } from '../../components/Blob/Blob'
import { Mouse } from '../../components/MouseScroll/Mouse'
import * as Unicons from '@iconscout/react-unicons';
import { motion } from 'framer-motion'
import { useInView } from "react-intersection-observer";
import ViewContext from '../../helpers/context/ViewContext';
import { useContext } from 'react';

const SIZE_ICON = 40
const COLOR_ICON = '#475569'
export const Home = () => {

  const [ref, inView] = useInView({threshold: 1});
  const { setActualView } = useContext(ViewContext)

  useEffect(() => {
    if (inView) {
        console.log('home')
        setActualView('home')
    }
  }, [inView]);

  const openGitHub = () => {
    window.open('https://github.com/gcidgaona', '_blank', 'noreferrer');
  }
  const openLinkdin = () => {
    window.open('https://www.linkedin.com/in/gabriel-emilio-cid-gaona/', '_blank', 'noreferrer');
  }
  const openWsp = () => {
    window.open('https://wa.me/56997148987', '_blank', 'noreferrer');
  }
  return (
    <section ref={ref} className="min-h-screen flex justify-center" id='home'>
      <div className='w-7/12'>
        <div className="max-w-6xl h-screen px-4 sm:px-6">
          <div className='flex flex-col h-screen'>
            <motion.div className="text-center pb-12 md:pb-16 h-full flex flex-col justify-center" initial={{opacity: 0, scale: 0.5}} animate={{opacity: 1, scale: 1}} 
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01]
            }}>
              <h1 className="main-title" data-aos="zoom-y-out">Trabaja junto a
              <span data-text="Waves" className="title-home-waves"> Waves</span>
              </h1>
              <div className="mx-auto">
                <p className="main-subtitle" data-aos="zoom-y-out" data-aos-delay="150">Haz realidad tus sueños, pon a crecer tu emprendimiento.</p>
                <motion.div className="max-w-xs gap-2 mx-auto sm:max-w-none flex justify-center" initial={{opacity: 0, scale: 0.5}} animate={{opacity: 1, scale: 1}} 
                transition={{
                  duration: 0.8,
                  delay: 0.7,
                  ease: [0, 0.71, 0.2, 1.01]
                }}>
                  <Unicons.UilGithub size={SIZE_ICON} color={COLOR_ICON} onClick={openGitHub} className='hover:cursor-pointer transform transition-transform hover:scale-110'/>
                  <Unicons.UilWhatsapp size={SIZE_ICON} color={COLOR_ICON} onClick={openWsp} className='hover:cursor-pointer transform transition-transform hover:scale-110'/>
                  <Unicons.UilLinkedin size={SIZE_ICON} color={COLOR_ICON} onClick={openLinkdin} className='hover:cursor-pointer transform transition-transform hover:scale-110'/>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
                initial={{opacity: 0, scale: 0.5}} animate={{opacity: 1, scale: 1}} 
                transition={{
                  duration: 0.8,
                  delay: 3,
                  ease: [0, 0.71, 0.2, 1.01]
                }}
              >
                <Mouse />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
