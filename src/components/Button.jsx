import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BsArrowDown, BsArrowRight, BsPlusCircle } from "react-icons/bs";

const iconNames = {
  BsPlusCircle: BsPlusCircle,
  BsArrowRight: BsArrowRight,
};
const Button = ({ to, text, lite, size, icon, iconPosition, iconName }) => {
  const IconUsed = iconNames[iconName] || BsArrowDown;

  return (
    <motion.div
      className="relative"
      style={{ perspective: 500 }}
      whileHover={{
        x: 5,
        y: -5,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.9 }}
    >
      <Link
        to={to}
        className={`flex justify-center items-center truncate gap-[8px] rounded-[24px] h-[56px] text-[12px] lg:text-[16px] font-[700] tracking-[0%] transition-all duration-300 ease-in-out group/button ${
          size === 32 ? "px-[32px]" : "px-[24px]"
        } ${
          lite
            ? "border-[1px] border-[#264653] text-[#264653] hover:text-[var(--text-color-white)] hover:bg-[#264653]"
            : "border-[1px] bg-[#7EB23D] text-[var(--text-color-white)] hover:border-[#7EB23D] hover:text-[#7EB23D] hover:bg-transparent"
        }`}
      >
        {icon ? (
          <span
            className={`text-[var(--text-color-white)] group-hover/button:text-[#7EB23D] ${
              iconPosition === "left" ? "flex" : "hidden"
            }`}
          >
            <IconUsed size={20} />
          </span>
        ) : undefined}
        {text}
        {icon ? (
          <span
            className={`text-[var(--text-color-white)] group-hover/button:text-[#7EB23D] ${
              iconPosition === "right" ? "flex" : "hidden"
            }`}
          >
            <IconUsed size={20} />
          </span>
        ) : undefined}
      </Link>
    </motion.div>
  );
};

export default Button;
