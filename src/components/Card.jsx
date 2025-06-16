import React, { useRef } from "react";
import { motion, useTransform, useMotionValue } from "framer-motion";
import { BsClock, BsRecycle, BsTruck } from "react-icons/bs";

const iconMap = {
  FaTruck: BsTruck,
  FaClock: BsClock,
  FaRecycle: BsRecycle,
};

const Card = ({ icon, heading, description }) => {
  const cardRef = useRef(null);
  const IconComponent = iconMap[icon] || BsTruck;

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], ["-15deg", "15deg"]);
  const rotateY = useTransform(x, [-50, 50], ["15deg", "-15deg"]);

  const handleMouseMove = (event) => {
    const rect = cardRef.current.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className="flex flex-col items-center py-[32px] px-[24px] rounded-[8px] cardShadow bg-[var(--text-color-white)] gap-[16px]"
      style={{ rotateX: rotateX, rotateY: rotateY, z: 100 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="h-[86px] w-[89px] bg-[#7EB23D80] rounded-full flex items-center justify-center ">
        <IconComponent size={40} className="text-[var(--text-color)] " />
      </div>

      <h4 className="text-[24px] font-[700] leading-[36px] tracking-[0%] text-[#000000] mt-[8px]">
        {heading}
      </h4>
      <p className="text-[#606060] text-[16px] font-[500] leading-[24px] tracking-[0%] ">
        {description}
      </p>
    </motion.div>
  );
};

export default Card;
