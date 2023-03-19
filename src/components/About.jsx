import React from 'react';
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon, info }) => {
  return (
    <Tilt className="w-10/12 mx-auto">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }} 
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-center items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-primary text-[20px] font-bold text-center py-2">{title}</h3>
          <div>{info}</div>
        </div>
      </motion.div>
      </Tilt>
  )
}
const About = () => {
  return (
    <>
    <motion.div
      variants={textVariant()} 
      className='mx-auto mt-10'>
      <p className={styles.sectionSubText}>Who is Timmortal?</p>
      <h2 className={styles.sectionHeadText}>About.</h2>
    </motion.div>

    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
    >
     A curiosity-driven Front-End Dev, excited to delve into the unknown. I think Front-End Development can be functional and charming
    </motion.p>

    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
    >
     Aiming to be a Digital Renaissance Person. I am constantly surfing for the bests
      tools in the world of technology to help develop ideas into live web apps
    </motion.p>

    <div className="mt-20 flex flex-wrap gap-10">
      {services.map((service, index) => (
        <ServiceCard
          key={service.title}
          index={index}
          {...service}
        />
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(About, "about"); 