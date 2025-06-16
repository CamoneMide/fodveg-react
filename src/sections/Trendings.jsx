import React, { useState } from "react";
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

  return (
    // Responsive padding
    <div className={"py-16 md:py-20 lg:py-24 xl:py-32 bg-[#F4F5F5]"}>
      <Container>
        {/* Responsive heading */}
        <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-[var(--text-color)] text-center">
          Trending Products
        </h4>

        {/* Responsive Tabs */}
        {/* Added horizontal scroll for small screens */}
        <div className="flex justify-start gap-4 pb-2 mt-12 overflow-x-auto md:mt-16 lg:mt-20 whitespace-nowrap lg:justify-center md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              // Responsive text size, padding, border
              className={`p-2 md:p-3 lg:p-4 border-b-[3px] text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl leading-normal tracking-tight bg-transparent transition-all duration-300 hover:border-b-[rgba(254,199,64,0.5)] shrink-0 ${
                activeTab === tab
                  ? "font-bold border-b-[#FEC740] text-[var(--text-color)]" // Adjusted font weight
                  : "font-medium border-b-transparent text-[#606060]" // Adjusted font weight
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Responsive Product Grid */}
        {/* Adjusted margin and gaps */}
        <div className="grid grid-cols-1 mt-12 md:mt-16 lg:mt-20 md:grid-cols-2 lg:grid-cols-3 gap-x-4 md:gap-x-5 lg:gap-x-6 xl:gap-x-8 2xl:gap-x-10 gap-y-8 md:gap-y-12 lg:gap-y-16">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        {/* Responsive Pagination */}
        {/* Adjusted margin, size, gap */}
        <div className="flex items-center justify-center w-full mt-12 md:mt-16 lg:mt-20">
          <div className="flex items-center justify-center w-auto h-10 gap-2 md:h-12 md:gap-3">
            {/* Example: Simple numbered buttons */}
            {[1, 2, 3].map((page) => (
              <Link
                key={page}
                to={"/"} // Should ideally link to actual pages
                className={`size-10 md:size-12 flex items-center justify-center rounded-md text-sm md:text-base font-medium cardShadow transition-colors ${
                  page === 1 // Example active state
                    ? "bg-[var(--text-color-active)] text-[var(--text-color-white)]"
                    : "bg-[var(--text-color-white)] text-[var(--text-color)] hover:bg-gray-100"
                }`}
              >
                {page}
              </Link>
            ))}
            {/* Next Button */}
            <Link
              to={"/"} // Should link to next page
              className="size-8 md:size-10 flex items-center justify-center text-[#264653] font-bold hover:bg-gray-100 rounded-md"
            >
              <BsChevronRight size={14} /> {/* Adjusted icon size */}
            </Link>
          </div>
        </div>
      </Container>

      {/* Responsive Promo Boxes */}
      {/* Adjusted margin, stack on small screens, removed fixed height */}
      <Container className="mt-16 md:mt-20 lg:mt-24">
        <div className="flex flex-col justify-between w-full gap-6 lg:flex-row md:gap-8">
          {" "}
          {/* Removed h-[524px], adjusted gap */}
          {/* Left Box (Juice) */}
          {/* Removed h-full, responsive padding */}
          <div className="w-full lg:w-[calc(50%-18px)] xl:w-[calc(50%-20px)] bg-[#DAE9C7] rounded-lg relative p-6 md:p-8 lg:p-10">
            {" "}
            {/* Adjusted width calc, responsive padding */}
            {/* Responsive image container, adjusted absolute positioning and size */}
            <div className="overflow-hidden w-full max-w-[200px] md:max-w-[250px] lg:max-w-[300px] xl:max-w-[335px] h-auto max-h-[200px] md:max-h-[250px] lg:max-h-[300px] xl:max-h-[335px] absolute z-[1] right-4 bottom-4 lg:right-6 lg:bottom-6 xl:right-10 xl:bottom-10">
              <img
                src={juice}
                alt="juice"
                className="object-contain size-full"
              />{" "}
              {/* Changed to contain */}
            </div>
            {/* Responsive text container */}
            {/* Removed h-full max-h-[272px], adjusted max-w */}
            <div className="flex flex-col justify-between w-full max-w-xs gap-4 sm:max-w-sm md:max-w-md lg:max-w-sm xl:max-w-md md:gap-6">
              {" "}
              {/* Adjusted max-w and gap */}
              {/* Responsive typography */}
              <h4 className="text-[#264653] font-bold text-2xl md:text-3xl lg:text-4xl leading-tight md:leading-snug">
                {" "}
                {/* Adjusted font weight */}
                <span className="font-normal">Fresh Orange &</span>{" "}
                {/* Adjusted font weight */}
                <br />
                Natural Juice
              </h4>
              {/* Responsive typography */}
              <p className="text-[#606060] font-medium text-sm md:text-base leading-relaxed z-[2]">
                {" "}
                {/* Adjusted font weight */}
                Packed with natural sweetness and essential nutrients, our
                orange juice is a refreshing delight you’ll love.
              </p>
              <div className="mt-2 w-fit md:mt-4">
                <Button
                  text={"Shop Now"}
                  lite={false}
                  // size={24} // Removed fixed size
                  icon={true}
                  iconPosition={"right"}
                  iconName={"BsArrowRight"}
                />
              </div>
            </div>
          </div>
          {/* Right Boxes (Walnut/Strawberry) */}
          {/* Removed h-full, responsive gap */}
          <div className="w-full lg:w-[calc(50%-18px)] xl:w-[calc(50%-20px)] flex flex-col justify-between gap-6 md:gap-8">
            {" "}
            {/* Adjusted width calc, responsive gap */}
            {/* Walnut Box */}
            {/* Removed h-[250px], responsive padding, stack inner */}
            <div className="relative bg-[#FEC7404D] flex flex-col sm:flex-row justify-between w-full p-4 md:p-6 rounded-lg gap-4">
              {/* Responsive discount badge */}
              <div className="absolute top-0 left-0 bg-[#FEC740] text-[#1E3E4B] text-xs md:text-sm p-1 md:p-2 rounded-r-full font-bold leading-tight tracking-tight">
                {" "}
                {/* Adjusted font weight, size, padding */}
                -23%
              </div>
              {/* Responsive image */}
              <div className="overflow-hidden w-full sm:w-1/3 max-w-[150px] md:max-w-[200px] self-center sm:self-auto shrink-0">
                {" "}
                {/* Added shrink-0 */}
                <img
                  src={walnut}
                  alt="walnut"
                  className="object-contain size-full" // Changed to contain
                />
              </div>
              {/* Responsive text */}
              <div className="flex flex-col gap-2 mt-2">
                {" "}
                {/* Adjusted gap/margin */}
                {/* Responsive typography */}
                <h4 className="text-[#264653] font-bold text-lg md:text-xl lg:text-2xl leading-snug">
                  {" "}
                  {/* Adjusted font weight */}
                  Packed with Flavour, Loaded with
                  <br className="hidden sm:block" />
                  Benefits – Grab Your Walnuts Today
                </h4>
                <div className="mt-1 w-fit md:mt-2">
                  {/* Responsive link */}
                  <Link className="px-4 py-2 text-[#7EB23D] font-bold text-sm md:text-base leading-normal group/line inline-flex flex-col transition-all duration-500">
                    {" "}
                    {/* Adjusted font weight, size, padding */}
                    Learn More
                    <span className="h-[2px] w-0 group-hover/line:w-full bg-[#7EB23D] transition-all duration-500" />
                  </Link>
                </div>
              </div>
            </div>
            {/* Strawberry Box */}
            {/* Removed h-[250px], responsive padding, stack inner */}
            <div className="relative bg-[#DAE9C780] flex flex-col sm:flex-row justify-between w-full p-4 md:p-6 rounded-lg gap-4">
              {" "}
              {/* Adjusted padding */}
              {/* Responsive text */}
              <div className="flex flex-col order-2 gap-4 md:gap-6 sm:order-1">
                {" "}
                {/* Adjusted gap */}
                {/* Responsive typography */}
                <h4 className="text-[#264653] font-bold text-lg md:text-xl lg:text-2xl leading-snug">
                  {" "}
                  {/* Adjusted font weight */}
                  Up to 53% off
                  <br className="hidden sm:block" />
                  Freshly Farmed Strawberry
                </h4>
                <div className="w-fit">
                  <Button
                    text={"Shop Now"}
                    lite={false}
                    // size={24} // Removed fixed size
                    icon={true}
                    iconPosition={"right"}
                    iconName={"BsArrowRight"}
                  />
                </div>
              </div>
              {/* Responsive image */}
              <div className="w-full sm:w-1/3 max-w-[200px] md:max-w-[280px] self-center sm:self-auto order-1 sm:order-2 shrink-0">
                {" "}
                {/* Added shrink-0 */}
                <img
                  src={strawberry}
                  alt="strawberry"
                  className="object-contain size-full"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Responsive Testimonials */}
      {/* Adjusted margin */}
      <Container>
        <div className="mt-16 size-full md:mt-20 lg:mt-24">
          <SectionHeadPar
            headText={"What People are Saying About Us"}
            parText={
              "Don't just take our word for it - hear from our satisfied customers"
            }
          />
          {/* Stack on smaller screens, responsive gap, adjusted margin */}
          <div className="flex flex-col gap-6 mt-12 md:mt-16 lg:mt-20 lg:flex-row md:gap-8">
            {" "}
            {/* Adjusted gap */}
            {/* Left Box (Swiper) */}
            {/* Removed fixed height, responsive padding, removed inner padding div */}
            <div className="bg-[#F9FAFB] w-full lg:w-1/2 rounded-lg p-6 md:p-8 lg:p-10 xl:p-12">
              <Swiper
                spaceBetween={30} // Reduced spaceBetween
                slidesPerView={1}
                navigation={true}
                pagination={{
                  clickable: true,
                  // Using default bullets for simplicity, custom rendering might need adjustments or removal if default is fine
                }}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper testiSwiper" // Keep custom class for potential specific styling
              >
                {testimonialsData.map((testimonial) => (
                  <SwiperSlide key={testimonial.id}>
                    {/* Responsive layout inside slide, adjusted padding/gap */}
                    <div className="flex flex-col gap-4 pb-16 md:gap-6 md:pb-20">
                      {" "}
                      {/* Added bottom padding for pagination, adjusted gap */}
                      {/* Responsive customer info */}
                      <div className="flex flex-col items-center w-full gap-4 sm:flex-row">
                        {" "}
                        {/* Adjusted gap */}
                        {/* Responsive image */}
                        <div className="overflow-hidden rounded-full size-16 md:size-20 lg:size-24 shrink-0">
                          <img
                            src={testimonial.customerImage}
                            alt={testimonial.name}
                            className="object-cover size-full"
                          />
                        </div>
                        {/* Responsive text */}
                        <div className="flex flex-col gap-1 text-center sm:text-left">
                          {/* Responsive typography */}
                          <h4 className="text-[#264653] font-bold text-lg md:text-xl lg:text-2xl leading-snug">
                            {" "}
                            {/* Adjusted font weight */}
                            {testimonial.name}
                          </h4>
                          {/* Responsive typography */}
                          <h6 className="text-[#606060] font-medium text-base md:text-lg leading-normal">
                            {" "}
                            {/* Adjusted font weight */}
                            {testimonial.location}
                          </h6>
                          {/* Responsive stars */}
                          <div className="flex items-center justify-center mt-1 sm:justify-start">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <svg
                                key={i}
                                className="w-4 h-4 text-yellow-500 md:w-5 md:h-5" // Responsive star size
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 1l2.939 4.955 6.572.955-4.756 4.635 1.123 6.545z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                      </div>
                      {/* Responsive quote */}
                      <div className="relative flex flex-col w-full p-4 md:p-6">
                        {" "}
                        {/* Adjusted padding */}
                        {/* Responsive quote icons */}
                        <div className="w-fit absolute left-0 top-0 text-[#FEC740]">
                          <BiSolidQuoteAltLeft className="text-2xl md:text-3xl lg:text-4xl" />{" "}
                          {/* Responsive icon size */}
                        </div>
                        {/* Responsive typography */}
                        <p className="text-[#264653] font-normal text-sm md:text-base leading-relaxed text-center italic px-6 md:px-8 lg:px-10">
                          {" "}
                          {/* Adjusted font weight */}
                          {testimonial.testimony}
                        </p>
                        {/* Responsive quote icons */}
                        <div className="w-fit absolute bottom-0 right-0 text-[#FEC740]">
                          <BiSolidQuoteAltRight className="text-2xl md:text-3xl lg:text-4xl" />{" "}
                          {/* Responsive icon size */}
                        </div>
                      </div>
                    </div>
                    {/* Removed commented out section */}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            {/* Right Box (Image) */}
            {/* Removed fixed height/max-height, hidden on small screens */}
            <div className="hidden w-full h-auto overflow-hidden rounded-lg lg:block lg:w-1/2">
              <img
                src={shopingImg}
                alt="shopingImg"
                className="object-cover w-full h-full" // Ensure image covers container
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Trendings;
