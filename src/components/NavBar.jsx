import React, { useState } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsBag } from "react-icons/bs";
import { FaLinkedinIn, FaRegUserCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci"; // Import search icon
import Container from "./Container";
import { Link } from "react-router-dom";
import { FaXmark } from "react-icons/fa6";
import { navLinks } from "../constants";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    // Responsive container margin
    <Container className="bg-[var(--text-color-white)] mt-[14px] md:mt-[19px] lg:mt-[26px] xl:mt-8">
      <motion.nav
        variants={fadeIn("down", "tween", 0.2, 0.4)}
        initial="hidden"
        animate="show"
        className="flex items-center justify-between lg:h-[36px] xl:h-[45px] w-full"
      >
        <div
          className="flex flex-col lg:hidden size-[25px] gap-1 cursor-pointer rotate-180 group toggleMenu" // Hamburger looks fine
          onClick={handleToggleMenu}
        >
          <span className="w-[85%] h-[3px] bg-[var(--text-color)] group-hover:w-[100%] transition-all duration-300"></span>
          <span className="w-[50%] h-[3px] bg-[var(--text-color)] group-hover:w-[100%] transition-all duration-500"></span>
          <span className="w-[75%] h-[3px] bg-[var(--text-color)] group-hover:w-[100%] transition-all duration-[400ms]"></span>
        </div>
        <div className="flex flex-row items-center font-bold gap-[22px] md:gap-[33px] lg:gap-[42px] xl:gap-[50px]">
          <Link
            to="/"
            className="text-[30px] md:text-[32px] tracking-[0] text-[var(--text-color-active)]"
          >
            Fodveg
          </Link>

          <ul className="flex-row items-center hidden lg:flex gap-[22px] md:gap-[33px] lg:gap-[42px] xl:gap-[50px]">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="text-[var(--text-color)] hover:text-[var(--text-color-active)] text-[13px] xl:text-[16px] transition-all duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-[20px] lg:gap-[27px] xl:gap-[34px]">
          {" "}
          <div className="relative hidden lg:flex">
            <input
              type="search"
              placeholder="Search..."
              className="pl-10 lg:pl-12 pr-4 lg:pr-6 py-1.5 lg:py-2 border border-[#E8E8E8] bg-[#E8E8E8CC] rounded-full outline-none focus:outline-none focus:ring hover:ring focus:ring-[var(--text-color)] text-[#8E8E8E] text-sm transition-all duration-300" //
            />
            <CiSearch
              className="absolute top-1/2 left-4 lg:left-5 transform -translate-y-1/2 text-[#8E8E8E] cursor-pointer"
              size={18} // Slightly smaller icon
            />
          </div>
          {/* Responsive icon gap */}
          <div className="flex flex-row items-center gap-[12px] lg:gap-[15px] xl:gap-[19px]">
            {" "}
            {/* Adjusted icon gap */}
            <div className="hidden md:flex">
              <IoMdNotificationsOutline
                size={24} // Keep size consistent
                className="text-[var(--text-color-reduced)] cursor-pointer hover:text-[var(--text-color-active)] transition-all duration-300"
              />
            </div>
            <div className="relative hidden cursor-pointer md:flex group">
              <BsBag
                size={22} // Keep size consistent
                className="text-[var(--text-color-reduced)] hover:text-[var(--text-color-active)] transition-all duration-300"
              />
              {/* Badge position might need slight tweak if icon size changes, but seems ok for now */}
              <span className="absolute size-4 bg-[#7EB23D] text-[var(--text-color-white)] flex items-center justify-center -right-1.5 -top-1.5 rounded-full text-[10px] group-hover:bg-[var(--text-color-active)] transition-all duration-300">
                {" "}
                {/* Adjusted size/position slightly */}1
              </span>
            </div>
            <FaRegUserCircle
              size={24} // Keep size consistent
              className="text-[var(--text-color-reduced)] cursor-pointer hover:text-[var(--text-color-active)] transition-all duration-300"
            />
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          // Keep transition, adjust background slightly if needed
          className={`fixed inset-0 h-dvh w-dvw z-50 bg-black/20 backdrop-blur-sm transform transition-all duration-500 ease-in-out flex flex-col ${
            // Added backdrop-blur
            isMenuOpen
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0" // Changed opacity for exit
          }`}
          onClick={handleToggleMenu} // Close on overlay click
        >
          {/* Stop propagation on menu content click */}
          <div
            className="w-[84%] max-w-[367px] h-full bg-[var(--text-color-white)] shadow flex flex-col justify-between px-4 py-3 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {" "}
            {/* Adjusted padding, overflow-y */}
            <div className="flex flex-col mt-2">
              {" "}
              {/* Adjusted margin */}
              <div className="self-end">
                {" "}
                {/* Align close button right */}
                <button onClick={handleToggleMenu} className="p-1">
                  {" "}
                  {/* Added padding for easier click */}
                  <FaXmark
                    size={20} // Slightly smaller close icon
                    className="text-[var(--text-color-reduced)] cursor-pointer hover:text-[var(--text-color-active)] transition-all duration-300 hover:rotate-90"
                  />
                </button>
              </div>
              {/* Mobile Search */}
              <div className="relative flex flex-col w-full py-4">
                {" "}
                {/* Adjusted padding */}
                <input
                  type="search"
                  placeholder="Search..."
                  // Consistent styling with desktop search
                  className="pl-10 pr-4 py-1.5 border border-[#E8E8E8] bg-[#E8E8E8CC] rounded-full outline-none focus:outline-none focus:ring focus:ring-[var(--text-color)] text-[#8E8E8E] text-sm"
                />
                <CiSearch
                  // Adjusted position
                  className="absolute top-1/2 left-4 transform -translate-y-1/2 text-[#8E8E8E]"
                  size={18} // Consistent icon size
                />
              </div>
              {/* Mobile Nav Links */}
              <ul className="flex flex-col mt-4 space-y-3">
                {" "}
                {/* Adjusted spacing */}
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      // Adjusted text size
                      className="block py-2 text-[var(--text-color)] hover:text-[var(--text-color-active)] text-lg leading-normal tracking-normal transition-all duration-300" // Added block, py-2
                      onClick={handleToggleMenu} // Keep close on click
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Mobile Menu Footer */}
            <div className="flex flex-col pt-3 border-t border-gray-200">
              {" "}
              {/* Added border-t */}
              {/* Removed divider div */}
              <div className="flex flex-col items-center justify-center text-xs font-medium text-[var(--text-color)] pt-3 pb-4 gap-2">
                {" "}
                {/* Adjusted text size */}
                <p>
                  Copyright &copy; {new Date().getFullYear()}, Fodveg. All right
                  reserved
                </p>
                <p className="flex flex-row items-center flex-nowrap">
                  <strong>Developed by</strong>
                  <a href="#" target="_blank" className="ml-1">
                    <i>Camone_Mide</i>
                  </a>
                  <a
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/mide-web-developer"
                    target="_blank"
                    className=" text-[#0077B5] px-[4px]"
                  >
                    <FaLinkedinIn size={16} />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>
    </Container>
  );
};

export default NavBar;
