import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion"

const Tech = () => {
  return (
    <>
    <motion.div className={styles.padding}>
      <p className={styles.sectionSubText}>Toolbox</p>
      <h2 className={styles.sectionHeadText}>My Skills.</h2>
    </motion.div>
    <div className="flex flew-row flex-wrap justify-center gap-24 md:gap-10">
      {technologies.map((technology) => (
        <div
          key={technology.name} 
          className="w-28 h-28"
        >
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
    </>
  )
}

export default Tech