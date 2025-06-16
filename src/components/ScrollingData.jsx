import React from "react";

const ScrollingData = ({ data, direction }) => {
  const animationDirection =
    direction === "left" ? "marquee-left" : "marquee-right";
  const extendedData = [...data, ...data, ...data, ...data, ...data]; // Duplicate data for continuous scrolling

  return (
    <div
      className={`relative w-full overflow-hidden bg-[#DAE9C7] h-fit py-[30px] lg:py-[0] lg:h-[178px] flex flex-col justify-center`}
    >
      <div
        className={`flex flex-row items-center whitespace-nowrap gap-[30px] lg:gap-[35px] ${animationDirection} hover:animate-paused`}
      >
        {extendedData.map((item, index) => (
          <div
            key={index}
            className="w-fit lg:w-[289px] flex flex-shrink-0 items-center flex-col gap-[16px] lg:gap-[24px]"
          >
            <h4 className="text-[20px] lg:text-[40px] font-[700] lg:leading-[60px] tracking-[0%] text-[#000000]">
              {item.heading}
            </h4>
            <p className="text-[#606060] text-[14px] lg:text-[20px] font-[500] lg:leading-[30px] tracking-[0%]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingData;
