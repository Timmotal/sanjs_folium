import { motion } from 'framer-motion';

import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';

const SectionWrapper = (Component, idName) => 
  
    function HOC() {
        return (  
            <motion.section
                variants={staggerContainer()}// but we didn't call it as a function with EdRoh
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
            >
                <span className="hash-span" id={idName}>
                    {/* we are scrolling to the invisible span, with this span, AWESOME */}
                    &nbsp;
                </span>
                <Component />
            </motion.section>
        )
}

export default SectionWrapper;