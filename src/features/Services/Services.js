import React, {useEffect} from 'react'
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ViewContext from '../../helpers/context/ViewContext';
import { useContext } from 'react';
export const Services = () => {


    const { setActualView } = useContext(ViewContext)
    const squareVariants = {
        // visible: { opacity: 1, scale: 2, transition: { duration: 1 } },
        hidden: { opacity: 0, scale: 0 },
      };
      const controls = useAnimation();
      const controls1 = useAnimation();
      const controls2 = useAnimation();
      const controls3 = useAnimation();
      const [ref, inView] = useInView({threshold: 1});
      const [ref2, inView2] = useInView({threshold: 1});
      const [ref3, inView3] = useInView({threshold: 1});

      useEffect(() => {
          console.log('SERVICES IN VIEW 2', inView2)
        if (inView2) {
            setActualView('services')
            console.log('services')
        }
      }, [inView2]);
      useEffect(() => {
        if (inView) {
            setActualView('services')
            controls.start({
                x: 0,
                transition: {
                  delay: 0.7,
                }
            })
        }
      }, [controls, inView]);
      useEffect(() => {
        if (inView) {
            controls1.start({
                x: 0,
                transition: {
                  delay: 1,
                }
            })
        }
      }, [controls1, inView]);
      useEffect(() => {
        if (inView) {
            controls2.start({
                x: 0,
                transition: {
                  delay: 1.2,
                }
            })
        //   controls.start("visible");
        }
        // else {
        //     controls.start("hidden");
        //   }
      }, [controls2, inView]);

      useEffect(() => {
        if (inView3) {
            controls3.start({
                opacity: 1,
                transition: {
                  delay: 0.4,
                  duration: 0.5
                },
            })
        }
      }, [controls3, inView3]);

  return (
    <div className="flex justify-center h-screen items-center flex-col" ref={ref2}>
        <div className='w-7/12 mb-8'>
            <motion.div ref={ref3}  className='flex flex-row items-center gap-2 w-7/12' initial={{opacity: 0}} animate={controls3}>
                <h1 className='title'>Services</h1>
            </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full px-4 sm:px-20 md:w-10/12 md:px-0 xl:w-8/12 2xl:w-7/12">
            <div className="hidden md:flex md:justify-center">
                <img src="/images/pc.png" width={350}/>
            </div>
            <div className='flex flex-col flex-wrap gap-4' ref={ref}>
                <motion.div  class="flex items-start rounded-xl bg-white md:w-96 w-full p-4 shadow-xl" initial={{x: '100vw'}} animate={controls}>
                    <div class="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                        <img src="/images/busqueda.png" width={32} height={32}/>
                    </div>

                    <div class="ml-4">
                        <h2 class="font-semibold">UI/UX</h2>
                        <p class="mt-2 text-sm text-gray-500">Buscaremos el mejor disenio para tu idea</p>
                    </div>
                </motion.div>
                <motion.div class="flex items-start rounded-xl bg-white md:w-96 w-full p-4 shadow-xl sm:self-center" initial={{x: '100vw'}} animate={controls1}>
                    <div class="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                        <img src="/images/engranaje.png" width={32} height={32}/>
                    </div>
                    <div class="ml-4">
                        <h2 class="font-semibold">Desarrollo App</h2>
                        <p class="mt-2 text-sm text-gray-500">Haremos tu idea realidad junto</p>
                    </div>
                </motion.div>
                <motion.div class="flex items-start rounded-xl bg-white md:w-96 w-full p-4 shadow-xl sm:self-end" initial={{x: '100vw'}} animate={controls2}>
                    <div class="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                        <img src="/images/cora.png" width={32} height={32}/>
                    </div>
                    <div class="ml-4">
                        <h2 class="font-semibold">Soporte de tus necesidades</h2>
                        <p class="mt-2 text-sm text-gray-500">Nos haremos cargo de tus ideas nuevas</p>
                    </div>
                </motion.div>
            </div>
        </div>
    </div>
  )
}
