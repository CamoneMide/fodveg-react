import React from "react";

const ScrollingIcons = ({ data, direction }) => {
  const animationDirection =
    direction === "left" ? "marquee-left" : "marquee-right";
  const extendedData = [...data, ...data, ...data, ...data, ...data]; // Duplicate data for continuous scrolling

  return (
    <div
      className={`relative w-full overflow-hidden bg-[#E8E8E8] h-fit py-[30px] lg:py-[0] lg:h-[178px] flex flex-col justify-center`}
    >
      <div
        className={`flex flex-row items-center whitespace-nowrap gap-[80px] md:gap-[171px] lg:gap-[271px] ${animationDirection} hover:animate-paused`}
      >
        {extendedData.map((item, index) => (
          <div
            key={index}
            className="size-[80px] lg:size-[100px] flex flex-shrink-0"
          >
            <img src={item.iconSrc} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingIcons;
