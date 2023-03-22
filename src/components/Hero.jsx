import { motion } from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import SocialMediaIcons from './SocialMediaIcons';
import { github } from '../assets';

const Hero = () => {
  return (
    <section className="relative w-full h-screen">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl md:ml-[-20px] mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className='w-5 h-5 rounded-full bg-[#5ea0d4]' />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>
        
          <div>
            <h1
              className={`${styles.heroHeadText} text-white`}
            >
              Timmortal says
              <br className='sm:block hidden'/>
              <span className="text-[#5ea0d4]">&nbsp;'Hola'</span></h1>
              <div className="">
              <a
                href="#contact"
                className="astyle4 cursor-pointer px-10 text-lg mt-5 z-" 
              >
                Contact Me
              </a>
              <div className='flex mt-10 z-10 relative'>
              <SocialMediaIcons />
              </div>
              </div>
              <div>
              <p className='pt-8 '>
              short on time? <br/> See a <br/>
                <span className='square relative z-10'>
                <a className='underline before after hover:no-underline' href="https://portafoglio.vercel.app/">
                   Non 3D Portfolio
                </a>
                   </span>
                 </p>
              </div>
          </div>
        </div>

        {/* <ComputersCanvas /> */}
        {/* <div className='flex lg:hidden justify-center items-center z-10 relative'>
              <SocialMediaIcons />
        </div> */}
        
        <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-secondary border-4 flex justify-center items-start p-2">
              <motion.dev
                animate={{
                  y: [0, 24, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            </div>
          </a>
        </div>
        <div className="">
        {/* <SocialMediaIcons /> */}
        </div>
    </section>
  )
}

export default Hero