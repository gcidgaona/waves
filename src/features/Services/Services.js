import React, {useEffect} from 'react'
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import servicesStr from './constants/servicesStr';
export const Services = () => {

    const {
        TITLE,
        CARD_UI,
        CARD_DEV,
        CARD_SUPPORT
    } = servicesStr;

    const controlCardUI = useAnimation();
    const controlCardDev = useAnimation();
    const controlCardSupp = useAnimation();
    const controlTitle = useAnimation();
    const [ref, inView] = useInView();
    const [ref3, inViewTitle] = useInView({threshold: 1});

    useEffect(() => {
    if (inView) {
        controlCardUI.start({
            x: 0,
            transition: {
                delay: 0.7,
            }
        })
        controlCardDev.start({
            x: 0,
            transition: {
                delay: 1,
            }
        })
        controlCardSupp.start({
            x: 0,
            transition: {
                delay: 1.2,
            }
        })
    }
    if (inViewTitle) {
        controlTitle.start({
            opacity: 1,
            transition: {
                delay: 0.4,
                duration: 0.5
            },
        })
    }
    }, [controlCardUI, controlCardDev, controlCardSupp, inView, inViewTitle, controlTitle]);

  return (
    <div className="flex h-fit pb-16  sm:h-screen items-center flex-col" id='services'>
        <div className='w-9/12 sm:w-7/12 mb-8 pt-12'>
            <motion.div ref={ref3}  className='flex flex-row items-center w-full' initial={{opacity: 0}} animate={controlTitle}>
                <h1 className='title'>{TITLE}</h1>
            </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 w-11/12 sm:px-20 md:w-10/12 md:px-0 xl:w-8/12 2xl:w-7/12 h-full sm:pt-16">
            <div className="hidden md:flex md:justify-center">
                <div>
                    <img src="/images/pc.png" width={350}/>
                </div>
            </div>
            <div className='flex flex-col flex-wrap gap-4' ref={ref}>
                <motion.div  class="flex items-start rounded-xl bg-white md:w-96 w-full p-4 shadow-xl" initial={{x: '100vw'}} animate={controlCardUI}>
                    <div class="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                        <img src="/images/busqueda.png" width={32} height={32}/>
                    </div>

                    <div class="ml-4">
                        <h2 class="font-semibold">{CARD_UI.TITLE}</h2>
                        <p class="mt-2 text-sm text-gray-500">{CARD_UI.DESCRIPTION}</p>
                    </div>
                </motion.div>
                <motion.div class="flex items-start rounded-xl bg-white md:w-96 w-full p-4 shadow-xl sm:self-center" initial={{x: '100vw'}} animate={controlCardDev}>
                    <div class="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                        <img src="/images/engranaje.png" width={32} height={32}/>
                    </div>
                    <div class="ml-4">
                        <h2 class="font-semibold">{CARD_DEV.TITLE}</h2>
                        <p class="mt-2 text-sm text-gray-500">{CARD_DEV.DESCRIPTION}</p>
                    </div>
                </motion.div>
                <motion.div class="flex items-start rounded-xl bg-white md:w-96 w-full p-4 shadow-xl sm:self-end" initial={{x: '100vw'}} animate={controlCardSupp}>
                    <div class="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                        <img src="/images/cora.png" width={32} height={32}/>
                    </div>
                    <div class="ml-4">
                        <h2 class="font-semibold">{CARD_SUPPORT.TITLE}</h2>
                        <p class="mt-2 text-sm text-gray-500">{CARD_SUPPORT.DESCRIPTION}</p>
                    </div>
                </motion.div>
            </div>
        </div>
    </div>
  )
}
