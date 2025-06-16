import React from "react";
import { BsEnvelope, BsGithub } from "react-icons/bs";
import { Container, ScrollingIcons } from "../components";
import { footerLinks, payCards, scrollIcons } from "../constants";
import {
  BiLogoFacebookSquare,
  BiLogoGithub,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoLinkedinSquare,
  BiLogoYoutube,
} from "react-icons/bi";

const Footer = () => {
  return (
    <>
      {/* Responsive padding */}
      <div className="pb-[356px] bg-[#F4F5F5]">
        <div className="">
          <ScrollingIcons data={scrollIcons} direction="right" />
        </div>

        <Container>
          <div className="relative w-full">
            {/* Newsletter Box: Responsive height, padding, typography, input/button size */}
            <div className="absolute top-0 translate-y-[42%] bg-[#FEC740] w-full rounded-lg md:rounded-xl lg:rounded-2xl h-auto flex flex-col justify-between items-center py-8 md:py-12 lg:py-16 xl:py-[72px] px-4 md:px-8">
              {" "}
              {/* Adjusted padding, rounding, h-auto */}
              {/* Responsive text container & gap */}
              <div className="flex flex-col gap-3 md:gap-4 w-full max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-[854px]">
                {/* Responsive heading */}
                <h4 className="text-xl md:text-2xl lg:text-3xl font-bold leading-snug tracking-tight text-[#264653] text-center">
                  {" "}
                  {/* Adjusted typography */}
                  Get the Freshest Updates Delivered to You
                </h4>
                {/* Responsive paragraph */}
                <p className="text-[#264653] text-sm md:text-base font-medium leading-relaxed text-center">
                  {" "}
                  {/* Adjusted typography */}
                  Sign up and be the first to know about new product drops,
                  limited-time offers, seasonal recipes, and tips for living
                  fresh. We’ll only send the good stuff—no spam, we promise!
                </p>
              </div>
              {/* Responsive input section: margin, width, height, layout, gap */}
              <div className="mt-8 md:mt-10 lg:mt-12 xl:mt-[56px] w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-[859px] h-auto flex sm:flex-row gap-2 md:gap-4">
                {" "}
                {/* Stack on smallest, responsive gap/height */}
                {/* Responsive input wrapper */}
                <div className="relative flex-1">
                  <input
                    type="email"
                    name="email"
                    id="footer-email" // Added id for accessibility
                    placeholder="Email"
                    // Responsive padding, text size, rounding
                    className="bg-[#FFFFFF] border border-[#7EB23D] size-full rounded-md md:rounded-lg pl-10 md:pl-12 lg:pl-[66px] pr-4 text-[#264653] text-sm md:text-base lg:text-lg xl:text-xl font-normal leading-normal tracking-normal focus:outline-[#7EB23D]" // Adjusted padding, text size, rounding, font weight
                  />
                  {/* Responsive icon position */}
                  <div className="absolute top-0 left-3 md:left-4 lg:left-[32px] flex flex-row items-center h-full">
                    <BsEnvelope size={20} className="text-[#264653]" />{" "}
                    {/* Adjusted icon size */}
                  </div>
                </div>
                {/* Responsive button */}
                <a
                  href="/" // Should be a form submit or similar action
                  className="py-2 px-4 md:py-2.5 md:px-6 lg:py-[8px] lg:px-[24px] rounded-md md:rounded-lg bg-[#7EB23D] border border-[#7EB23D] text-[#FFFFFF] text-sm md:text-base lg:text-lg xl:text-xl font-medium leading-normal tracking-normal hover:text-[#7EB23D] hover:bg-[#FFFFFF] transition-all duration-300 shrink-0" // Adjusted padding, text size, rounding, font weight
                >
                  Subscribe
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Footer: Responsive padding, layout, gaps, typography */}
      <div className="pt-24 md:pt-32 lg:pt-48 xl:pt-[232px] pb-8 md:pb-12 lg:pb-16 bg-[#e8eee3]">
        {" "}
        {/* Responsive padding */}
        <Container>
          {/* Stack main layout, responsive gap */}
          <div className="flex flex-col justify-between w-full gap-8 lg:flex-row md:gap-12 lg:gap-16 xl:gap-24">
            {/* Left Side: Responsive gap, typography */}
            <div className="flex flex-col gap-8 md:gap-12 lg:gap-16 lg:w-1/3 xl:w-auto">
              {" "}
              {/* Responsive gap */}
              <div className="flex flex-col w-full max-w-md gap-3 md:gap-4">
                {" "}
                {/* Responsive gap */}
                {/* Responsive logo */}
                <h2 className="text-2xl md:text-3xl font-bold leading-tight tracking-tight text-[#7EB23D]">
                  {" "}
                  {/* Adjusted typography */}
                  Fodveg
                </h2>
                {/* Responsive text */}
                <p className="text-[#264653] text-sm md:text-base font-medium leading-relaxed">
                  {" "}
                  {/* Adjusted typography */}
                  We’re always cooking up something good. From healthy recipes
                  and food hacks to special discounts and product launches
                </p>
              </div>
              {/* Address: Responsive gap, typography */}
              <div className="flex flex-col gap-4 md:gap-6">
                {" "}
                {/* Responsive gap */}
                <div className="flex flex-col w-full max-w-md gap-2 md:gap-3">
                  {" "}
                  {/* Responsive gap */}
                  {/* Responsive heading */}
                  <h4 className="text-lg md:text-xl font-semibold leading-snug tracking-tight text-[#264653]">
                    {" "}
                    {/* Adjusted typography */}
                    Our Address
                  </h4>
                  {/* Responsive text */}
                  <p className="text-[#264653] text-sm md:text-base font-medium leading-relaxed">
                    {" "}
                    {/* Adjusted typography */}
                    245 Greenfield Avenue, Oakridge District, Springfield, CA
                    90213, United States
                  </p>
                </div>
              </div>
            </div>
            {/* Right Side (Links): Stack layout, responsive gap, typography */}
            <div className="flex flex-col gap-8 sm:flex-row md:gap-12 lg:gap-16 xl:gap-20">
              {" "}
              {/* Stack columns, responsive gap */}
              {footerLinks.map((link) => (
                <div key={link.id} className="flex flex-col gap-3 md:gap-4">
                  {" "}
                  {/* Responsive gap */}
                  {/* Responsive heading */}
                  <h4 className="text-lg md:text-xl font-bold leading-snug tracking-tight text-[#264653]">
                    {" "}
                    {/* Adjusted typography */}
                    {link.title}
                  </h4>
                  {/* Responsive links & gap */}
                  <div className="flex flex-col gap-2 md:gap-3">
                    {" "}
                    {/* Responsive gap */}
                    {link.items.map((item) => (
                      <a
                        key={item.id}
                        href={item.to}
                        // Responsive text size
                        className="text-[#264653] text-sm md:text-base font-semibold leading-normal tracking-normal hover:text-[#FEC740] transition-all duration-300" // Adjusted typography
                      >
                        {item.link}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Follow/Payment Section: Stack layout, responsive margin/gap, typography, icon/image size */}
          <div className="flex flex-col justify-between w-full gap-6 mt-8 md:flex-row md:gap-8 md:mt-12">
            {" "}
            {/* Stack layout, responsive margin/gap */}
            {/* Follow Us: Responsive gap, typography, icon size */}
            <div className="flex flex-col items-center gap-4 sm:flex-row md:gap-5 lg:gap-6">
              {" "}
              {/* Responsive gap */}
              {/* Responsive text */}
              <h6 className="text-lg md:text-xl font-semibold leading-snug tracking-tight text-[#264653] shrink-0">
                {" "}
                {/* Adjusted typography */}
                Follow us on:
              </h6>
              {/* Responsive icon gap & size */}
              <div className="flex flex-row items-center gap-4 md:gap-5 lg:gap-6">
                <a href="https://www.linkedin.com/in/mide-web-developer">
                  <BiLogoLinkedinSquare size={24} className="text-[#0a66c2]" />{" "}
                  {/* Adjusted size */}
                </a>
                <BiLogoYoutube size={28} className="text-[#ff0000]" />{" "}
                {/* Adjusted size */}
                <BiLogoFacebookSquare
                  size={24}
                  className="text-[#3d5a98]"
                />{" "}
                {/* Adjusted size */}
                <BiLogoInstagram size={22} className="text-[#db4184]" />{" "}
                {/* Adjusted size */}
              </div>
            </div>
            {/* Payment Methods: Responsive gap, image size */}
            <div className="flex flex-row items-center justify-center gap-4 md:gap-5 lg:gap-6 md:justify-end">
              {" "}
              {/* Responsive gap */}
              {payCards.map((paymentCard) => (
                // Responsive size
                <div
                  key={paymentCard.id}
                  className="size-10 md:size-12 lg:size-[54px]"
                >
                  <img
                    src={paymentCard.src}
                    alt={paymentCard.alt}
                    className="object-contain size-full" // Changed to contain
                  />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
      {/* Copyright Bar: Responsive padding, layout, gap, typography, icon size */}
      <div className="bg-[#e8eee3]">
        <Container>
          {/* Responsive padding, stack layout, gap */}
          <div className="border-t border-t-[#D2D2D2] pt-6 pb-8 md:pt-8 md:pb-10 lg:pt-6 lg:pb-8 flex flex-col sm:flex-row items-center justify-between gap-2">
            {" "}
            {/* Responsive padding, stack layout, gap */}
            {/* Responsive text */}
            <p className="text-[#606060] text-sm md:text-base font-medium leading-normal tracking-normal text-center sm:text-left">
              {" "}
              {/* Adjusted typography */}
              Copyright &copy; {new Date().getFullYear()} Fodveg. All right
              reserved
            </p>
            {/* Responsive text, icon size, gap */}
            <p className="flex flex-row items-center flex-nowrap text-[#606060] text-sm md:text-base font-medium leading-normal tracking-normal gap-1">
              {" "}
              {/* Adjusted typography, added gap */}
              <strong>Developed by</strong>
              <a
                href="https://github.com/CamoneMide"
                target="_blank"
                className="ml-1 hover:text-[#FEC740]" // Added hover
              >
                <i>Camone_Mide</i>
              </a>
              <a
                rel="noreferrer"
                href="https://www.linkedin.com/in/mide-web-developer"
                target="_blank"
                className="text-[#0077B5] hover:opacity-80" // Added hover
              >
                <BiLogoLinkedin size={18} /> {/* Adjusted size */}
              </a>
              <a
                rel="noreferrer"
                href="https://github.com/CamoneMide"
                target="_blank"
                className="text-gray-700 hover:opacity-80" // Changed color, added hover
              >
                <BiLogoGithub size={16} /> {/* Adjusted size */}
              </a>
            </p>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
