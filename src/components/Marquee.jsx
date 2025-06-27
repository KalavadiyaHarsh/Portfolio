import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div data-scroll data-scroll-speed="-.1"  className='w-screen py-16 rounded-3xl bg-[#004D43] text-white overflow-hidden mt-14'>
      <div className="text border-t-2 border-b- flex gap-10 whitespace-nowrap">
        <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 10}} className='text-[17vw] leading-none font-["Test_Founders_Grotesk_X-Cond_SmBd"] uppercase pt-3 pb-3 font-semibold'>
            passionate developer
        </motion.h1>
        <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 10}} className='text-[17vw] leading-none font-["Test_Founders_Grotesk_X-Cond_SmBd"] uppercase pt-3 pb-3 font-semibold'>
            passionate developer
        </motion.h1>
      </div>
    </div>
  )
}

export default Marquee
