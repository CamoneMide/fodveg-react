import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const CategCard = ({ src, to, text }) => {
  return (
    <div className="flex flex-col gap-[16px]">
      <div className="rounded-full flex overflow-x-hidden size-[200px]">
        <img src={src} alt="imgSrc" className="object-cover size-full" />
      </div>
      <Link
        to={to}
        className="text-[20px] leading-[30px] font-[600] tracking-[0%] text-[var(--text-color)] text-center flex justify-center items-center hover:text-[var(--text-color-active)] group"
      >
        <h6>{text}</h6>
        <BsArrowRight
          size={22}
          className="rotate-[315deg] font-[500] -ml-[15px] opacity-0 transition-all duration-[350ms] group-hover:opacity-100 group-hover:ml-[2px]"
        />
      </Link>
    </div>
  );
};

export default CategCard;
