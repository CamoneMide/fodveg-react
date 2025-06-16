import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Added AnimatePresence
import { Button, Container, ProductCard, SectionHeadPar } from "../components";
import { products, testimonialsData } from "../constants";
import { Link } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";
import juice from "../assets/images/productImages/JuiceImg1.png";
import walnut from "../assets/images/productImages/WalnutsImg1.png";
import strawberry from "../assets/images/productImages/StrawberryImg1.png";
import shopingImg from "../assets/images/shopingImg1.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";

const Trendings = () => {
  const [activeTab, setActiveTab] = useState("Hot Offers");

  const tabs = [
    "Hot Offers",
    "Veggies",
    "Fruits & Milks",
    "Meat & Seafood",
    "Bakery",
  ];

  const filteredProducts = products
    .filter((product) => product.category === activeTab)
    .slice(0, 6);

  // Animation variants for the tabs content
  const tabsContentVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.05,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.1,
      },
    },
  };

  // Animation variants for individual product cards
  const productCardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <div className={"py-16 md:py-20 lg:py-24 xl:py-32 bg-[#F4F5F5]"}>
      <Container>
        <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-[var(--text-color)] text-center">
          Trending Products
        </h4>

        {/* Tabs - no animation needed here as per your request */}
        <div className="flex justify-start gap-4 pb-2 mt-12 overflow-x-auto md:mt-16 lg:mt-20 whitespace-nowrap lg:justify-center md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`p-2 md:p-3 lg:p-4 border-b-[3px] text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl leading-normal tracking-tight bg-transparent transition-all duration-300 hover:border-b-[rgba(254,199,64,0.5)] shrink-0 ${
                activeTab === tab
                  ? "font-bold border-b-[#FEC740] text-[var(--text-color)]"
                  : "font-medium border-b-transparent text-[#606060]"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Animated tabs content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={tabsContentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="grid grid-cols-1 mt-12 md:mt-16 lg:mt-20 md:grid-cols-2 lg:grid-cols-3 gap-x-4 md:gap-x-5 lg:gap-x-6 xl:gap-x-8 2xl:gap-x-10 gap-y-8 md:gap-y-12 lg:gap-y-16"
          >
            {filteredProducts.map((product) => (
              <motion.div key={product.id} variants={productCardVariants}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center justify-center w-full mt-12 md:mt-16 lg:mt-20">
          <div className="flex items-center justify-center w-auto h-10 gap-2 md:h-12 md:gap-3">
            {[1, 2, 3].map((page) => (
              <Link
                key={page}
                to={"/"}
                className={`size-10 md:size-12 flex items-center justify-center rounded-md text-sm md:text-base font-medium cardShadow transition-colors ${
                  page === 1
                    ? "bg-[var(--text-color-active)] text-[var(--text-color-white)]"
                    : "bg-[var(--text-color-white)] text-[var(--text-color)] hover:bg-gray-100"
                }`}
              >
                {page}
              </Link>
            ))}
            <Link
              to={"/"}
              className="size-8 md:size-10 flex items-center justify-center text-[#264653] font-bold hover:bg-gray-100 rounded-md"
            >
              <BsChevronRight size={14} />
            </Link>
          </div>
        </div>
      </Container>

      {/* Rest of your component remains unchanged */}
      <Container className="mt-16 md:mt-20 lg:mt-24">
        {/* ... existing promo boxes code ... */}
      </Container>

      <Container>
        <div className="mt-16 size-full md:mt-20 lg:mt-24">
          {/* ... existing testimonials code ... */}
        </div>
      </Container>
    </div>
  );
};

export default Trendings;
