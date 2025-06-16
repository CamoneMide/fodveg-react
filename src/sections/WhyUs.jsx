import React from "react";
import {
  Container,
  SectionHeadPar,
  Card,
  ScrollingData,
  CategCard,
} from "../components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { cardData, categDatas, scrollingData } from "../constants";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2, // Stagger delay
      duration: 0.5,
    },
  }),
};

const WhyUs = () => {
  return (
    <>
      <Container>
        {/* Adjusted top padding */}
        <div className=" w-full pt-[100px] lg:pt-[180px]">
          <SectionHeadPar
            headText={"Why Choose Us"}
            parText={"We provide the best quality products at your doorstep"}
          />
          {/* Adjusted margin */}
          <div className="mt-8 mb-10 md:mt-12 md:mb-16">
            <Swiper
              spaceBetween={30}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              pagination={{ clickable: true }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {cardData.map((card, index) => (
                // Adjusted slide padding
                <SwiperSlide
                  key={index}
                  className="py-8 cursor-pointer md:py-12"
                >
                  <div // Replaced motion.div with div
                    variants={cardVariants} // These props are now unused but harmless on a div
                    initial="hidden" // These props are now unused but harmless on a div
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }} // Trigger when 30% is visible
                    custom={index + 0.5} // Pass index for stagger delay
                  >
                    <Card
                      icon={card.icon}
                      heading={card.heading}
                      description={card.description}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Container>
      {/* Adjusted top padding */}
      <div className="pt-10 md:pt-12">
        <ScrollingData data={scrollingData} direction="right" />
      </div>
      <Container>
        {/* Adjusted top padding */}
        <div className="pt-16 md:pt-20 lg:pt-24 bg-[#F4F5F5]"></div>
        <SectionHeadPar
          headText={"Categories"}
          parText={"Find exactly what you need from our wide selection"}
        />
        {/* Adjusted top padding */}
        <div className="pt-8 md:pt-12">
          <Swiper
            spaceBetween={30}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {categDatas.map((card, index) => (
              // Adjusted slide padding
              <SwiperSlide
                key={card.id}
                className="py-8 cursor-pointer md:py-12"
              >
                <div // Replaced motion.div with div
                  variants={cardVariants} // These props are now unused but harmless on a div
                  initial="hidden" // These props are now unused but harmless on a div
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }} // Trigger when 30% is visible
                  custom={index} // Pass index for stagger delay
                  className="flex items-center justify-center"
                >
                  <CategCard src={card.src} to={card.to} text={card.text} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </>
  );
};

export default WhyUs;
