import React from 'react'
import homeStr from './constants/homeStr'
import * as Unicons from '@iconscout/react-unicons';
import { Mouse } from '../../components/MouseScroll/Mouse'
import { motion } from 'framer-motion'
import { openGitHub, openLinkedin, openWsp } from '../../helpers/globalHelpers';

const SIZE_ICON = 40

export const Home = () => {

  const { 
    TRABAJA_JUNTO,
    NAME_WEB,
    DESCRIPTION_PAGE
  } = homeStr

  const darkToggle = true
  const COLOR_ICON = darkToggle ? '#9ca3af': '#475569'
  return (
    <section className="min-h-screen flex justify-center dark:bg-primary" id='home'>
      <div className='w-11/12 sm:w-7/12'>
        <div className="max-w-6xl h-screen px-4 sm:px-6">
          <div className='flex flex-col h-screen'>
            <motion.div className="text-center pb-12 md:pb-16 h-full flex flex-col justify-center" initial={{opacity: 0, scale: 0.5}} animate={{opacity: 1, scale: 1}} 
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }}
            >
              <h1 className="main-title" data-aos="zoom-y-out">{TRABAJA_JUNTO}
              <span data-text="Waves" className="title-home-waves">{NAME_WEB}</span>
              </h1>
              <div className="mx-auto">
                <p className="main-subtitle" data-aos="zoom-y-out" data-aos-delay="150">{DESCRIPTION_PAGE}</p>
                <motion.div className="max-w-xs gap-2 mx-auto sm:max-w-none flex justify-center" initial={{opacity: 0, scale: 0.5}} animate={{opacity: 1, scale: 1}} 
                transition={{
                  duration: 0.8,
                  delay: 0.7,
                  ease: [0, 0.71, 0.2, 1.01]
                }}>
                  <Unicons.UilGithub size={SIZE_ICON} color={COLOR_ICON} onClick={openGitHub} className='hover:cursor-pointer transform transition-transform hover:scale-110'/>
                  <Unicons.UilWhatsapp size={SIZE_ICON} color={COLOR_ICON} onClick={openWsp} className='hover:cursor-pointer transform transition-transform hover:scale-110'/>
                  <Unicons.UilLinkedin size={SIZE_ICON} color={COLOR_ICON} onClick={openLinkedin} className='hover:cursor-pointer transform transition-transform hover:scale-110'/>
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
