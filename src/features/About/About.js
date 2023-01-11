import React, { useEffect } from 'react'
import { Emoji } from "react-apple-emojis"
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ViewContext from '../../helpers/context/ViewContext';
import { useContext } from 'react';

export const About = () => {

  const controls = useAnimation();
  const controls2 = useAnimation();
  const [ref, inView] = useInView({threshold: 1, delay: 500});

  const { setActualView } = useContext(ViewContext)

  useEffect(() => {
    if (inView) {
        setActualView('about')
        console.log('about')
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
    <div  className='w-full bg-slate-200 h-80 flex flex-col justify-center items-center'>
      <motion.div ref={ref}  className='flex flex-row items-center gap-2 w-7/12' initial={{opacity: 0}} animate={controls}>
        <h1 className='title'>Quienes somos</h1>
      </motion.div>
      <motion.div initial={{opacity: 0}} animate={controls2} className='w-7/12'>
        <p className='text-gray-500 tracking-wide'>
          Somos una Pyme con ganas en ayudar y hacer crecer a otras Pyme! 
          Esto lo hacemos mediante una Web realizada a su medida, conociendo sus interes y lo que quieres lograr.
        </p>
      </motion.div>
    </div>
  )
}
