import React, { useEffect } from 'react'
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import aboutStr from './constants/aboutStr';
export const About = () => {

  const {
    TITLE,
    DESCRIPTION
  } = aboutStr

  const controls = useAnimation();
  const controls2 = useAnimation();
  const [ref, inView] = useInView({threshold: 1, delay: 500});

  useEffect(() => {
    if (inView) {
        controls.start({
            opacity: 1,
            transition: {
              delay: 0.4,
              duration: 0.5
            },
        })
    }
  }, [controls, inView]);
  useEffect(() => {
    if (inView) {
        controls2.start({
            opacity: 1,
            transition: {
              delay: 0.6,
              duration: 0.5
            },
        })
    }
  }, [controls2, inView]);

  return (
    <div  className='w-full bg-slate-200 h-80 flex flex-col justify-center items-center' id='about'>
      <motion.div ref={ref}  className='flex flex-row items-center gap-2 w-9/12 sm:w-7/12' initial={{opacity: 0}} animate={controls}>
        <h1 className='title'>{TITLE}</h1>
      </motion.div>
      <motion.div initial={{opacity: 0}} animate={controls2} className='w-9/12 sm:w-7/12'>
        <p className='text-gray-500 tracking-wide'>
          {DESCRIPTION}          
        </p>
      </motion.div>
    </div>
  )
}
