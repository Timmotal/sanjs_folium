import React from 'react';
import { motion } from "framer-motion";
import { styles } from '../styles';
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from '../hoc';

const WorkText = () => {
  return (
    <div>
    <motion.div  
    variants={textVariant()}
    className='mx-auto mt-30'
  >
      <p className={`${styles.sectionSubtext}`}>
        A selection Of Stuffs I've Built.
      </p>
      <h2 className={`${styles.sectionHeadText}`}>My Crafts.</h2>
  </motion.div>

    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className="w-full flex mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
    >
      My favorite app yet, Expelimus MERN AI Image Generator App, it uses Open AI API.
    </motion.p>
    </div>
  )
}

export default SectionWrapper(WorkText, "");