import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant2 } from "../utils/motion";

const SectionHeadPar = ({ headText, parText }) => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="flex flex-col gap-[10px] lg:gap-[16px] w-full items-center"
    >
      <motion.h4
        variants={fadeIn("up", "tween", 0, 0.4)}
        className="text-[32px] lg:text-[40px] font-[700] tracking-[0%] text-[var(--text-color)] text-center"
      >
        {headText}
      </motion.h4>
      <motion.p
        variants={textVariant2}
        className="text-[14px] lg:text-[20px] font-[500] tracking-[0%] text-[#606060] text-center"
      >
        {parText}
      </motion.p>
    </motion.div>
  );
};

export default SectionHeadPar;
