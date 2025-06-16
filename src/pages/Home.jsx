import React from "react";
import { Blog, Hero, Trendings, WhyUs } from "../sections";
import "locomotive-scroll/dist/locomotive-scroll.css";

const Home = () => {
  const scrollContainerRef = React.useRef(null);

  React.useEffect(() => {
    let locomotiveScroll;

    const initScroll = async () => {
      try {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;

        locomotiveScroll = new LocomotiveScroll({
          el: scrollContainerRef.current,
          smooth: true,
          // Beta-specific options you might want to include:
          lerp: 0.9, // Default smoothing factor
          multiplier: 1.1, // Scroll speed multiplier
          firefoxMultiplier: 50, // Firefox-specific multiplier
          touchMultiplier: 2, // Touch device multiplier
          smartphone: {
            smooth: true, // Enable smooth scrolling on mobile
          },
          tablet: {
            smooth: true, // Enable smooth scrolling on tablets
          },
        });
      } catch (error) {
        console.error("Failed to initialize Locomotive Scroll:", error);
      }
    };

    initScroll();

    return () => {
      if (locomotiveScroll) {
        locomotiveScroll.destroy();
      }
    };
  }, []);

  return (
    <>
      <section ref={scrollContainerRef} data-scroll-container>
        <div data-scroll-section className="bg-[var(--text-color-white)]">
          <Hero />
        </div>
        <div data-scroll-section className="bg-[#F4F5F5]">
          <WhyUs />
        </div>
        <div data-scroll-section>
          <Trendings />
        </div>

        <div data-scroll-section>
          <Blog />
        </div>
      </section>
    </>
  );
};

export default Home;
