import React from "react";
import { Button, Container } from "../components";
import heroCircle from "../assets/images/heroCircle.png";
import heroBoxImg1 from "../assets/images/heroBox1.jpg";
import heroBoxImg2 from "../assets/images/heroBox2.jpg";
import heroBoxImg3 from "../assets/images/heroBox3.jpg";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { heroCusts } from "../constants";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";

const heroBoxImgs = [
  { id: 1, src: heroBoxImg1 },
  { id: 2, src: heroBoxImg2 },
  { id: 3, src: heroBoxImg3 },
];

const Hero = () => {
  return (
    <>
      <Container className={"mt-[8px] md:mt-[22px] xl:mt-[14px] pb-[50px]"}>
        <div className="flex flex-col md:flex-row justify-between gap-[40px] lg:gap-0 relative">
          <div className="pt-[40px] md:pt-[40px] lg:pt-[79px] xl:pt-[99px] flex flex-col w-[94%] lg:w-[45.5%] max-w-[570px]">
            <div className="w-full lg:max-w-none flex flex-col gap-[8px] lg:gap-[10px] xl:gap-[12px]">
              <motion.h2
                variants={fadeIn("down", "tween", 0, 0.4)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="text-[24px] lg:text-[30px] xl:text-[38px] font-[700] tracking-[0%] text-[var(--text-color)]"
              >
                Groceries Made Easy <br className="hidden md:flex" />
                <span className="text-[#7EB23D] block">
                  Fresh, Fast, and Affordable
                </span>
              </motion.h2>
              <motion.p
                variants={fadeIn("up", "tween", 0.1, 0.4)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="text-[14px] xl:text-[16px] font-[500] tracking-[0%] text-[#606060]"
              >
                <span className="block md:hidden">
                  Skip the long lines and enjoy the convenience of fresh,
                  high-quality groceries delivered straight to your door.
                </span>
                <span className="hidden md:block">
                  Skip the long lines and enjoy the convenience of fresh,
                  high-quality groceries delivered straight to your door. From
                  farm-fresh veggies to pantry essentials, we make shopping
                  easy, affordable, and stress-free.
                </span>
              </motion.p>
            </div>
            <motion.div
              variants={fadeIn("up", "tween", 0.2, 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <div className="flex md:hidden flex-row items-center gap-[10px] mt-[22px]">
                <Button
                  to={"/latest"}
                  text={"Get Fresh Groceries"}
                  lite={false}
                  size={24}
                  icon={false}
                />
                <Button
                  to={"/shop"}
                  text={"Explore Our Store"}
                  lite
                  size={24}
                  icon={false}
                />
              </div>
              <div className="hidden md:flex flex-row items-center gap-[14px] lg:gap-[18px] xl:gap-[22px] mt-[30px] lg:mt-[40px] xl:mt-[50px]">
                <Button
                  to={"/latest"}
                  text={"Get Fresh Groceries"}
                  lite={false}
                  size={32}
                  icon={false}
                />
                <Button
                  to={"/shop"}
                  text={"Explore Our Store"}
                  lite
                  size={32}
                  icon={false}
                />
              </div>
            </motion.div>

            <div className="flex mt-[22px] md:mt-[30px] lg:mt-[40px] xl:mt-[50px] ml-[10px] xl:ml-[12.5px] flex-row items-center gap-[10px] lg:gap-[12px] xl:gap-[14px]">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="relative flex flex-row items-center w-full max-w-fit h-[40px] xl:h-[50px]"
              >
                {heroCusts.map((customer) => (
                  <motion.div
                    variants={{
                      hidden: {
                        x: 0,
                        y: "25%",
                        opacity: 0,
                      },
                      show: {
                        x: 0,
                        y: 0,
                        opacity: 1,
                        transition: {
                          type: "tween",
                          delay: customer.id / 6,
                          duration: 0.4,
                          ease: "easeOut",
                        },
                      },
                    }}
                    key={customer.id}
                    className={`size-[40px] xl:size-[50px] rounded-full shrink-0 z-[${customer.id}]  nth-1:-translate-x-[25%] nth-2:-translate-x-[50%] nth-3:-translate-x-[75%] nth-4:-translate-x-[100%] `}
                  >
                    <img
                      src={customer.src}
                      alt={customer.alt}
                      className="object-cover rounded-full size-full"
                    />
                  </motion.div>
                ))}
              </motion.div>
              <div className="flex flex-row items-center gap-[2px] text-[#FFC107] text-[16px] md:text-[22px] -translate-x-[40px] xl:-translate-x-[50px]">
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarHalf />
              </div>
              <h6 className="flex md:hidden lg:flex text-[10px] md:text-[12px] xl:text-[14px] font-[700] tracking-[0%] text-[#606060] -translate-x-[40px] xl:-translate-x-[50px]">
                4.8 (2.2k review)
              </h6>
            </div>
            <div className="hidden md:flex lg:hidden w-full h-[130px]" />
          </div>
          <motion.div
            variants={fadeIn("left", "tween", 0, 0.4)}
            initial="hidden"
            animate="show"
            className="flex h-[420px] md:h-[390px] lg:h-[577px] xl:h-[722px] max-h-[900px] w-full lg:w-[560px] xl:w-[700px] md:translate-x-[10%] lg:translate-x-[20%]"
          >
            <div className="size-full bg-[#DAE9C7] rounded-full flex justify-center items-center">
              <div className="size-[88%] bg-[#FFF] rounded-full flex justify-center items-center">
                <div className="size-[88%] bg-[#f2f7ec] rounded-full flex justify-center items-center">
                  <div className="animate-custom-rotate size-[70%] overflow-visible rounded-full">
                    <img
                      src={heroCircle}
                      alt="heroImg"
                      className="object-contain size-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="absolute bottom-0 left-0 w-full max-w-[1400px] z-10 h-[158px] md:h-[217px] lg:h-[289px] xl:h-[362px] flex flex-row items-end justify-between lg:px-[20px] translate-y-[100px] lg:translate-y-[200px] gap-[10px] group"
          >
            {heroBoxImgs.map((box) => {
              return (
                <motion.div
                  variants={fadeIn("up", "tween", box.id / 6, 0.4)}
                  key={box.id}
                  className="h-[82%] hover:h-full rounded-[16px] hover:rounded-[19px] w-[30%] hover:w-full max-w-[467px] transition-all duration-1000 ease-in-out heroBoxShadow overflow-hidden nth-[2]:w-full nth-[2]:h-full group-hover:nth-[2]:w-[30%] group-hover:nth-[2]:h-[82%] hover:nth-[2]:h-full hover:nth-[2]:w-full"
                >
                  <img
                    src={box.src}
                    alt="heroBoxImage"
                    className="object-cover transition-all duration-700 ease-in-out size-full"
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </Container>
    </>
  );
};

export default Hero;
